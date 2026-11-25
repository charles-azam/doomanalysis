"""Turns raw inputs into the entities, observations and projections the site reads. Pure: no network, no files."""

import re
import unicodedata

from doom_pipeline.catalog import AI_FACTORS, HIGH_INCOME, LIVING_FACTORS, MIN_COVERAGE, REGIONS, SPECS
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


def note_for(*, factor_id: str, point: Point, baseline: Point) -> str | None:
    if factor_id == "undernourishment" and point.value <= 2.5:
        return "below 2.5%; FAO does not report lower values"
    if factor_id == "energy_imports" and point.value < 0:
        return "negative means a net energy exporter"
    if factor_id == "living_standard":
        return f"100 = high-income average of ${baseline.value:,.0f} per person ({baseline.year})"
    return None


def cite(*, spec: IndicatorSpec, country: Country) -> str:
    return spec.url_template.replace("{iso2}", country.iso2).replace("{iso3}", country.iso3)


def cite_aggregate(*, spec: IndicatorSpec) -> str:
    return spec.url_template.replace("?locations={iso2}", "").replace("{iso3}", "")


def living_standard(*, consumption: dict[str, Point], baseline: Point) -> dict[str, Point]:
    """Consumption per person as an index where the high-income aggregate is 100."""
    return {iso3: Point(value=100 * point.value / baseline.value, year=point.year) for iso3, point in consumption.items()}


def weighted_average(
    *, entity: str, members: list[Country], spec: IndicatorSpec, points: dict[str, Point], population: dict[str, Point]
) -> Observation | None:
    """Population-weighted mean over the members with a value, or nothing when they hold too few of the people."""
    total = sum(population[country.iso3].value for country in members)
    covered = [country for country in members if country.iso3 in points]
    weight = sum(population[country.iso3].value for country in covered)
    if total == 0 or weight / total < MIN_COVERAGE:
        return None
    value = sum(points[c.iso3].value * population[c.iso3].value for c in covered) / weight
    years = sorted(points[c.iso3].year for c in covered)
    return Observation(
        factor_id=spec.factor_id,
        entity=entity,
        value=round(value, spec.decimals + 1),
        year=years[len(years) // 2],
        source=spec.source,
        url=cite_aggregate(spec=spec),
        note=f"population-weighted average of {len(covered)} countries ({round(100 * weight / total)}% of the population)",
    )


def region_of(*, country: Country) -> str | None:
    for region in REGIONS:
        if country.sub_region in region.sub_regions:
            return region.id
    return None


def build_dataset(*, raw: RawInputs, spotlight: tuple[str, ...], min_factors: int) -> Dataset:
    specs = {spec.factor_id: spec for spec in SPECS}

    # Countries: keep those with a population and enough factor values to be worth a page. The living and
    # AI-access measures do not count, so adding them never changes which countries are published.
    published: list[Country] = []
    for country in raw.countries:
        count = sum(1 for factor_id, points in raw.indicators.items() if factor_id not in LIVING_FACTORS + AI_FACTORS and country.iso3 in points)
        if country.iso3 in raw.population and count >= min_factors and region_of(country=country) is not None:
            published.append(country)

    # The living standard is derived from consumption. The high-income aggregate rides along as its own
    # economy, so it comes out at exactly 100.
    indicators: dict[str, dict[str, Point]] = {}
    for factor_id, points in raw.indicators.items():
        indicators[factor_id] = points
        if factor_id == "consumption_per_person":
            indicators[factor_id] = points | {HIGH_INCOME: raw.high_income_consumption}
            indicators["living_standard"] = living_standard(consumption=indicators[factor_id], baseline=raw.high_income_consumption)

    observations: list[Observation] = []
    for country in published:
        for factor_id, points in indicators.items():
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
                    note=note_for(factor_id=factor_id, point=point, baseline=raw.high_income_consumption),
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
        for factor_id, points in indicators.items():
            average = weighted_average(entity=region.id, members=members, spec=specs[factor_id], points=points, population=raw.population)
            if average is not None:
                observations.append(average)

    # Benchmarks for the living-standard and AI-access measures: the world as one more weighted average, and the
    # high-income aggregate where the source has one.
    benchmarks: list[Observation] = []
    for factor_id in LIVING_FACTORS + AI_FACTORS:
        points = indicators.get(factor_id, {})
        spec = specs[factor_id]
        world = weighted_average(entity="WLD", members=published, spec=spec, points=points, population=raw.population)
        if world is not None:
            benchmarks.append(world)
        if HIGH_INCOME in points:
            benchmarks.append(
                Observation(
                    factor_id=factor_id,
                    entity=HIGH_INCOME,
                    value=round(points[HIGH_INCOME].value, spec.decimals + 1),
                    year=points[HIGH_INCOME].year,
                    source=spec.source,
                    url=cite_aggregate(spec=spec),
                    note="World Bank high-income aggregate",
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

    # People in 2100: the UN's world total, each region as the sum of its published countries, then the countries.
    without_2100 = [country.iso3 for country in published if country.iso3 not in raw.population_2100]
    if without_2100:
        raise ValueError(f"published countries without a 2100 population: {without_2100}")
    population_2100 = {"WLD": raw.population_2100["WLD"]}
    for region in region_entities:
        population_2100[region.id] = sum(raw.population_2100[c.iso3] for c in published if region_of(country=c) == region.id)
    for entity in country_entities:
        population_2100[entity.id] = raw.population_2100[entity.id]

    return Dataset(
        entities=region_entities + country_entities,
        observations=observations,
        projections=projections,
        benchmarks=benchmarks,
        population_2100=population_2100,
    )
