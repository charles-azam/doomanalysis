"""Turns raw inputs into the entities, observations and projections the site reads. Pure: no network, no files."""

import re
import unicodedata

from doom_pipeline.catalog import MIN_COVERAGE, REGIONS, SPECS
from doom_pipeline.models import Country, Dataset, Entity, IndicatorSpec, Observation, Point, Projection, RawInputs

# Display names that differ from the World Bank's formal ones.
SHORT_NAMES: dict[str, str] = {
    "RUS": "Russia",
    "IRN": "Iran",
    "EGY": "Egypt",
    "KOR": "South Korea",
    "PRK": "North Korea",
    "VEN": "Venezuela",
    "COD": "DR Congo",
    "COG": "Congo",
    "SYR": "Syria",
    "YEM": "Yemen",
    "TUR": "Türkiye",
    "LAO": "Laos",
    "KGZ": "Kyrgyzstan",
    "SVK": "Slovakia",
    "CZE": "Czechia",
    "GMB": "Gambia",
    "BHS": "Bahamas",
    "FSM": "Micronesia",
    "HKG": "Hong Kong",
    "MAC": "Macao",
    "PSE": "Palestine",
}


def slugify(*, text: str) -> str:
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")


def note_for(*, factor_id: str, point: Point) -> str | None:
    if factor_id == "undernourishment" and point.value <= 2.5:
        return "below 2.5%; FAO does not report lower values"
    if factor_id == "energy_imports" and point.value < 0:
        return "negative means a net energy exporter"
    return None


def cite(*, spec: IndicatorSpec, country: Country) -> str:
    return spec.url_template.replace("{iso2}", country.iso2).replace("{iso3}", country.iso3)


def region_of(*, country: Country) -> str | None:
    for region in REGIONS:
        if country.sub_region in region.sub_regions:
            return region.id
    return None


def build_dataset(*, raw: RawInputs, spotlight: tuple[str, ...], min_factors: int) -> Dataset:
    specs = {spec.factor_id: spec for spec in SPECS}

    # Countries: keep those with a population and enough factor values to be worth a page.
    published: list[Country] = []
    for country in raw.countries:
        count = sum(1 for points in raw.indicators.values() if country.iso3 in points)
        if country.iso3 in raw.population and count >= min_factors and region_of(country=country) is not None:
            published.append(country)

    observations: list[Observation] = []
    for country in published:
        for factor_id, points in raw.indicators.items():
            point = points.get(country.iso3)
            if point is None:
                continue
            spec = specs[factor_id]
            observations.append(
                Observation(
                    factor_id=factor_id,
                    entity=country.iso3,
                    value=round(point.value, spec.decimals + 1),
                    year=point.year,
                    source=spec.source,
                    url=cite(spec=spec, country=country),
                    note=note_for(factor_id=factor_id, point=point),
                )
            )

    # Regions: population-weighted means, published only where coverage is high enough.
    region_entities: list[Entity] = []
    for region in REGIONS:
        members = [country for country in published if region_of(country=country) == region.id]
        total = sum(raw.population[country.iso3].value for country in members)
        if total == 0:
            continue
        region_entities.append(
            Entity(id=region.id, kind="region", name=region.name, slug=region.id, iso2=None, region=None, population=total, spotlight=True)
        )
        for factor_id, points in raw.indicators.items():
            covered = [country for country in members if country.iso3 in points]
            weight = sum(raw.population[country.iso3].value for country in covered)
            if weight / total < MIN_COVERAGE:
                continue
            value = sum(points[c.iso3].value * raw.population[c.iso3].value for c in covered) / weight
            years = sorted(points[c.iso3].year for c in covered)
            spec = specs[factor_id]
            observations.append(
                Observation(
                    factor_id=factor_id,
                    entity=region.id,
                    value=round(value, spec.decimals + 1),
                    year=years[len(years) // 2],
                    source=spec.source,
                    url=spec.url_template.replace("?locations={iso2}", "").replace("{iso3}", ""),
                    note=f"population-weighted average of {len(covered)} countries ({round(100 * weight / total)}% of the population)",
                )
            )

    projections: list[Projection] = []
    for factor_id, points in raw.projections.items():
        for country in published:
            point = points.get(country.iso3)
            if point is not None:
                projections.append(
                    Projection(
                        factor_id=factor_id,
                        entity=country.iso3,
                        value=round(point.value, 2),
                        year=point.year,
                        scenario="business as usual",
                        source="WRI Aqueduct 4.0",
                        url="https://www.wri.org/data/aqueduct-40-country-rankings",
                    )
                )

    country_entities = [
        Entity(
            id=country.iso3,
            kind="country",
            name=SHORT_NAMES.get(country.iso3, country.name),
            slug=slugify(text=SHORT_NAMES.get(country.iso3, country.name)),
            iso2=country.iso2,
            region=region_of(country=country),
            population=raw.population[country.iso3].value,
            spotlight=country.iso3 in spotlight,
        )
        for country in sorted(published, key=lambda c: -raw.population[c.iso3].value)
    ]
    missing_spotlight = [iso3 for iso3 in spotlight if iso3 not in {e.id for e in country_entities}]
    if missing_spotlight:
        raise ValueError(f"spotlight countries without enough data: {missing_spotlight}")
    if len({e.slug for e in country_entities}) != len(country_entities):
        raise ValueError("two countries share a slug")
    return Dataset(entities=region_entities + country_entities, observations=observations, projections=projections)
