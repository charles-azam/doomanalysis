import json
from dataclasses import asdict

from doom_pipeline.build import build_dataset
from doom_pipeline.models import Country, Point, RawInputs
from doom_pipeline.run import to_json


def test_mock_countries_flow_into_country_and_region_rows() -> None:
    countries = [
        Country(iso3="FRA", iso2="FR", name="France", sub_region="Western Europe"),
        Country(iso3="DEU", iso2="DE", name="Germany", sub_region="Western Europe"),
        Country(iso3="SWE", iso2="SE", name="Sweden", sub_region="Northern Europe"),
        Country(iso3="NOR", iso2="NO", name="Norway", sub_region="Northern Europe"),
        Country(iso3="TUV", iso2="TV", name="Tuvalu", sub_region="Polynesia"),
        Country(iso3="ATA", iso2="AQ", name="Nowhere", sub_region="Antarctica"),
    ]
    population = {
        "FRA": Point(value=60.0, year=2025),
        "DEU": Point(value=80.0, year=2025),
        "SWE": Point(value=10.0, year=2025),
        "NOR": Point(value=5.0, year=2025),
        "TUV": Point(value=0.01, year=2025),
        "ATA": Point(value=1.0, year=2025),
    }
    indicators = {
        "homicide_rate": {
            "FRA": Point(value=1.0, year=2023),
            "DEU": Point(value=1.0, year=2023),
            "SWE": Point(value=1.2, year=2023),
            "NOR": Point(value=0.6, year=2023),
            "ATA": Point(value=9.0, year=2023),
        },
        "public_debt": {"FRA": Point(value=115.0, year=2025), "DEU": Point(value=63.0, year=2025), "SWE": Point(value=35.0, year=2025)},
        "undernourishment": {"FRA": Point(value=2.5, year=2024), "SWE": Point(value=2.5, year=2024), "NOR": Point(value=2.5, year=2024)},
        "energy_imports": {"NOR": Point(value=-729.0, year=2024), "FRA": Point(value=42.0, year=2024)},
    }
    raw = RawInputs(
        countries=countries,
        population=population,
        indicators=indicators,
        projections={"water_stress": {"FRA": Point(value=2.1, year=2050), "TUV": Point(value=0.5, year=2050)}},
    )

    dataset = build_dataset(raw=raw, spotlight=("FRA", "SWE"), min_factors=2)

    # Countries: Tuvalu has too few factors, Antarctica belongs to no region; the rest are sorted by population.
    countries_out = [e for e in dataset.entities if e.kind == "country"]
    assert [e.id for e in countries_out] == ["DEU", "FRA", "SWE", "NOR"]
    assert [e.slug for e in countries_out] == ["germany", "france", "sweden", "norway"]
    assert [e.spotlight for e in countries_out] == [False, True, True, False]
    assert {e.id: e.region for e in countries_out}["NOR"] == "europe-north"

    # Regions: only those with members, populations summed.
    regions = {e.id: e for e in dataset.entities if e.kind == "region"}
    assert set(regions) == {"europe-west", "europe-north"}
    assert regions["europe-west"].population == 140.0

    rows = {(o.factor_id, o.entity): o for o in dataset.observations}
    # Population-weighted means: Northern Europe homicide = (1.2 * 10 + 0.6 * 5) / 15.
    assert abs(rows[("homicide_rate", "europe-north")].value - 1.0) < 1e-9
    assert rows[("homicide_rate", "europe-north")].note == "population-weighted average of 2 countries (100% of the population)"
    # Coverage: Sweden alone holds 10/15 of Northern Europe, enough; Western Europe debt covers both countries.
    assert abs(rows[("public_debt", "europe-north")].value - 35.0) < 1e-9
    assert abs(rows[("public_debt", "europe-west")].value - (115 * 60 + 63 * 80) / 140) < 0.01
    # Energy imports: Germany is missing and France holds 60/140 < 50%, so Western Europe gets no value.
    assert ("energy_imports", "europe-west") not in rows
    # Notes and citations.
    assert rows[("undernourishment", "FRA")].note == "below 2.5%; FAO does not report lower values"
    assert rows[("energy_imports", "NOR")].note == "negative means a net energy exporter"
    assert rows[("public_debt", "FRA")].url == "https://www.imf.org/external/datamapper/GGXWDG_NGDP@WEO/FRA"
    assert rows[("homicide_rate", "SWE")].url == "https://data.worldbank.org/indicator/VC.IHR.PSRC.P5?locations=SE"
    assert ("homicide_rate", "ATA") not in rows

    # Projections only for published countries.
    assert [(p.entity, p.value, p.year) for p in dataset.projections] == [("FRA", 2.1, 2050)]

    # JSON for the site: camelCase keys, no nulls.
    written = json.loads(to_json(rows=[asdict(o) for o in dataset.observations]))
    assert set(written[0]) >= {"factorId", "entity", "value", "year", "source", "url"}
    assert all(row.get("note", "x") is not None for row in written)
