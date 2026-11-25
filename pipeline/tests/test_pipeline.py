import gzip
import json
import re
from pathlib import Path

import pytest

from doom_pipeline.build import build_dataset
from doom_pipeline.catalog import CONSUMPTION_CODE, HEALTH_COVERAGE_CODE, HIGH_INCOME
from doom_pipeline.models import Country, Point, RawInputs
from doom_pipeline.run import write
from doom_pipeline.sources import (
    fetch_world_bank,
    fetch_world_bank_aggregate,
    parse_gallup_safety,
    parse_owid,
    parse_who_hale,
    parse_wpp_population,
)


def world_bank_page(*, pages: int, rows: list[tuple[str, str, int, float | None]]) -> str:
    """One page of a World Bank API answer: (ISO3 code, country id, year, value) per row."""
    body = [{"countryiso3code": iso3, "country": {"id": country_id}, "date": str(year), "value": value} for iso3, country_id, year, value in rows]
    return json.dumps([{"page": 1, "pages": pages}, body])


def who_row(*, kind: str, place: str, year: int, sex: str, value: float) -> dict[str, object]:
    return {"SpatialDimType": kind, "SpatialDim": place, "TimeDim": year, "Dim1": sex, "NumericValue": value}


def test_mock_countries_flow_into_country_and_region_rows(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> None:
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

    # The World Bank API, as it really answers: pages, several years per economy, empty values, the
    # high-income aggregate without an ISO3 code, and a foreign economy filed under Sweden's code.
    world_bank_pages = {
        ("all", CONSUMPTION_CODE, 1): world_bank_page(
            pages=2,
            rows=[("FRA", "FR", 2025, 27000.0), ("FRA", "FR", 2024, 26000.0), ("DEU", "DE", 2025, None), ("DEU", "DE", 2024, 15000.0)],
        ),
        ("all", CONSUMPTION_CODE, 2): world_bank_page(
            pages=2,
            rows=[("SWE", "", 2026, 99999.0), ("SWE", "SE", 2025, 33000.0), ("TUV", "TV", 2025, 6000.0), ("", "XD", 2024, 30000.0)],
        ),
        (HIGH_INCOME, CONSUMPTION_CODE, 1): world_bank_page(pages=1, rows=[("", "XD", 2025, None), ("", "XD", 2024, 30000.0), ("", "XD", 2023, 29000.0)]),
        ("all", HEALTH_COVERAGE_CODE, 1): world_bank_page(
            pages=1,
            rows=[("FRA", "FR", 2023, 85.0), ("DEU", "DE", 2023, 88.0), ("SWE", "SE", 2023, 90.0), ("NOR", "NO", 2023, 87.0), ("TUV", "TV", 2023, 60.0)],
        ),
    }

    def fake_get_text(*, url: str) -> str:
        found = re.search(r"/country/(\w+)/indicator/([\w.]+)\?.*&page=(\d+)", url)
        assert found is not None, url
        return world_bank_pages[(found.group(1), found.group(2), int(found.group(3)))]

    monkeypatch.setattr("doom_pipeline.sources.get_text", fake_get_text)

    # The files the run keeps in its raw cache, in the shape their publishers give them.
    energy = tmp_path / "energy.csv"
    energy.write_text(
        "Entity,Code,Year,Total energy supply\n"
        "France,FRA,2023,40000\nFrance,FRA,2024,38000\nGermany,DEU,2024,36000\n"
        "Sweden,SWE,2023,52000\nSweden,SWE,2024,\nNorway,NOR,2024,90000\nNorway,NOR,2025,0\nTuvalu,TUV,2024,3000\nWorld,OWID_WRL,2024,20000\n",
        encoding="utf-8",
    )
    hours = tmp_path / "hours.csv"
    hours.write_text(
        "Entity,Code,Year,Working hours per worker,World region according to OWID\nFrance,FRA,2023,1500,Europe\nGermany,DEU,2023,1340,Europe\n",
        encoding="utf-8",
    )
    hale = tmp_path / "hale.json"
    hale.write_text(
        json.dumps(
            {
                "value": [
                    who_row(kind="COUNTRY", place="FRA", year=2021, sex="SEX_BTSX", value=69.0),
                    who_row(kind="COUNTRY", place="FRA", year=2023, sex="SEX_BTSX", value=70.0),
                    who_row(kind="COUNTRY", place="FRA", year=2023, sex="SEX_MLE", value=68.0),
                    who_row(kind="COUNTRY", place="DEU", year=2023, sex="SEX_BTSX", value=69.5),
                    who_row(kind="COUNTRY", place="SWE", year=2023, sex="SEX_BTSX", value=71.0),
                    who_row(kind="COUNTRY", place="NOR", year=2023, sex="SEX_BTSX", value=71.4),
                    who_row(kind="COUNTRY", place="TUV", year=2023, sex="SEX_BTSX", value=58.0),
                    who_row(kind="REGION", place="EUR", year=2023, sex="SEX_BTSX", value=66.7),
                ]
            }
        ),
        encoding="utf-8",
    )
    safety = tmp_path / "safety.csv"
    safety.write_text("DW_NAME,VALUE\nKingdom of Norway,90.0\nFrance,71.0\nGermany,76.0\nSweden,79.0\nNorthern Cyprus,88.0", encoding="utf-8")
    wpp = tmp_path / "wpp.csv.gz"
    with gzip.open(wpp, mode="wt", encoding="utf-8", newline="") as handle:
        handle.write(
            "LocTypeName,ISO3_code,Location,Variant,Time,TPopulation1July\n"
            "World,,World,Medium,2100,10000.5\nSubregion,,Western Europe,Medium,2100,190000\n"
            "Country/Area,FRA,France,Medium,2025,66000\nCountry/Area,FRA,France,Medium,2100,68000\n"
            "Country/Area,DEU,Germany,Medium,2100,70000.25\nCountry/Area,SWE,Sweden,Medium,2100,12000\n"
            "Country/Area,NOR,Norway,Medium,2100,6000\nCountry/Area,TUV,Tuvalu,Medium,2100,10\nCountry/Area,FRA,France,Medium,2101,\n"
        )

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
        "consumption_per_person": fetch_world_bank(code=CONSUMPTION_CODE, source=None),
        "energy_per_person": parse_owid(path=energy, column="Total energy supply"),
        "healthy_life_years": parse_who_hale(path=hale),
        "health_coverage": fetch_world_bank(code=HEALTH_COVERAGE_CODE, source=None),
        "hours_worked": parse_owid(path=hours, column="Working hours per worker"),
        "feel_safe": parse_gallup_safety(
            path=safety,
            names={country.name: country.iso3 for country in countries} | {"Kingdom of Norway": "NOR"},
            unpublished=("Northern Cyprus",),
            year=2025,
        ),
    }
    raw = RawInputs(
        countries=countries,
        population=population,
        indicators=indicators,
        projections={"water_stress": {"FRA": Point(value=2.1, year=2050), "TUV": Point(value=0.5, year=2050)}},
        high_income_consumption=fetch_world_bank_aggregate(code=CONSUMPTION_CODE, aggregate=HIGH_INCOME),
        population_2100=parse_wpp_population(path=wpp, year=2100),
    )

    dataset = build_dataset(raw=raw, spotlight=("FRA", "SWE"), min_factors=2)
    write(dataset=dataset, out_dir=tmp_path / "out")

    # Countries: Tuvalu has too few factors (the living-standard measures do not count toward a page),
    # Antarctica belongs to no region; the rest are sorted by population.
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

    # Consumption: the latest non-empty year from either page; the foreign economy filed under SWE is ignored.
    assert (rows[("consumption_per_person", "FRA")].value, rows[("consumption_per_person", "FRA")].year) == (27000.0, 2025)
    assert (rows[("consumption_per_person", "DEU")].value, rows[("consumption_per_person", "DEU")].year) == (15000.0, 2024)
    assert rows[("consumption_per_person", "SWE")].value == 33000.0
    assert rows[("consumption_per_person", "FRA")].url == f"https://data.worldbank.org/indicator/{CONSUMPTION_CODE}?locations=FR"
    assert abs(rows[("consumption_per_person", "europe-west")].value - (27000 * 60 + 15000 * 80) / 140) < 0.06
    # Living standard: the same consumption with the high-income aggregate (30,000 in 2024) at 100.
    assert rows[("living_standard", "FRA")].value == 90.0
    assert rows[("living_standard", "DEU")].value == 50.0
    assert rows[("living_standard", "SWE")].value == 110.0
    assert rows[("living_standard", "FRA")].note == "100 = high-income average of $30,000 per person (2024)"
    assert abs(rows[("living_standard", "europe-west")].value - (90 * 60 + 50 * 80) / 140) < 0.006
    assert rows[("living_standard", "europe-north")].note == "population-weighted average of 1 countries (67% of the population)"
    assert ("living_standard", "NOR") not in rows
    benchmarks = {(o.factor_id, o.entity): o for o in dataset.benchmarks}
    assert benchmarks[("consumption_per_person", HIGH_INCOME)].value == 30000.0
    assert benchmarks[("living_standard", HIGH_INCOME)].value == 100.0
    assert benchmarks[("living_standard", "WLD")].value == (90 * 60 + 50 * 80 + 110 * 10) / 150
    assert benchmarks[("living_standard", "WLD")].note == "population-weighted average of 3 countries (97% of the population)"
    assert (HIGH_INCOME not in regions) and all(o.entity != HIGH_INCOME for o in dataset.observations)

    # Parsed files: the latest year with a value (an empty cell or a zero is none), both sexes, countries only,
    # names resolved to ISO3 codes.
    assert (rows[("energy_per_person", "FRA")].value, rows[("energy_per_person", "FRA")].year) == (38000.0, 2024)
    assert (rows[("energy_per_person", "SWE")].value, rows[("energy_per_person", "SWE")].year) == (52000.0, 2023)
    assert (rows[("energy_per_person", "NOR")].value, rows[("energy_per_person", "NOR")].year) == (90000.0, 2024)
    assert abs(rows[("energy_per_person", "europe-north")].value - (52000 * 10 + 90000 * 5) / 15) < 0.06
    assert (rows[("healthy_life_years", "FRA")].value, rows[("healthy_life_years", "FRA")].year) == (70.0, 2023)
    assert rows[("health_coverage", "NOR")].value == 87.0
    assert (rows[("feel_safe", "NOR")].value, rows[("feel_safe", "NOR")].year) == (90.0, 2025)
    assert rows[("feel_safe", "DEU")].url == "https://www.gallup.com/analytics/356996/gallup-global-safety-report.aspx"
    # Hours worked: countries without a value are left without one, and so is a region made of them.
    assert rows[("hours_worked", "FRA")].value == 1500.0
    assert ("hours_worked", "SWE") not in rows
    assert ("hours_worked", "europe-north") not in rows
    assert all(o.entity != "TUV" for o in dataset.observations)

    # Projections only for published countries.
    assert [(p.entity, p.value, p.year) for p in dataset.projections] == [("FRA", 2.1, 2050)]

    # JSON for the site: camelCase keys, no nulls.
    written = json.loads((tmp_path / "out" / "observations.json").read_text(encoding="utf-8"))
    assert set(written[0]) >= {"factorId", "entity", "value", "year", "source", "url"}
    assert all(row.get("note", "x") is not None for row in written)
    assert {row["factorId"] for row in written if row["entity"] == "FRA"} >= {"living_standard", "energy_per_person", "feel_safe"}
    assert len(json.loads((tmp_path / "out" / "entities.json").read_text(encoding="utf-8"))) == 6

    # People in 2100: the UN's world total, regions as the sum of their published countries, then the countries.
    people = json.loads((tmp_path / "out" / "population-2100.json").read_text(encoding="utf-8"))
    assert people == {
        "WLD": 10000500,
        "europe-north": 18000000,
        "europe-west": 138000250,
        "DEU": 70000250,
        "FRA": 68000000,
        "SWE": 12000000,
        "NOR": 6000000,
    }
    assert list(people)[0] == "WLD"
