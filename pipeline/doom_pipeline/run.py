"""Fetch everything, build the dataset, write the JSON files the site imports.

Usage (from pdoom/pipeline): uv run python -m doom_pipeline.run --raw-dir <downloads> --out-dir ../src/data/generated
The raw dir holds the official files that have no API: the GPI 2026 site script, the ND-GAIN 2026 zip
contents and the WRI Aqueduct 4.0 rankings workbook. The run also keeps there the files it downloads itself
(Our World in Data, WHO, Gallup's safety map, UN WPP 2024, Microsoft's AI diffusion table, Anthropic's
Economic Index): delete one to fetch it again.
"""

import argparse
import json
from dataclasses import asdict
from pathlib import Path

from doom_pipeline.build import build_dataset
from doom_pipeline.catalog import (
    AEI_MONTH,
    CONSUMPTION_CODE,
    GALLUP_NAMES,
    GALLUP_SURVEY_YEAR,
    GALLUP_UNPUBLISHED,
    HEALTH_COVERAGE_CODE,
    HIGH_INCOME,
    MIN_FACTORS,
    MS_AI_COLUMN,
    MS_AI_NAMES,
    MS_AI_UNPUBLISHED,
    MS_AI_YEAR,
    SPOTLIGHT,
    WORLD_BANK_CODES,
)
from doom_pipeline.models import Dataset, Point, RawInputs
from doom_pipeline.sources import (
    ANTHROPIC_AEI_CSV,
    GALLUP_SAFETY_CSV,
    MS_AI_DIFFUSION_CSV,
    OWID_ENERGY_CSV,
    OWID_HOURS_CSV,
    WHO_HALE_JSON,
    WPP_MEDIUM_CSV,
    cached,
    fetch_countries,
    fetch_imf_debt,
    fetch_m49,
    fetch_world_bank,
    fetch_world_bank_aggregate,
    parse_anthropic_usage_index,
    parse_aqueduct,
    parse_gallup_safety,
    parse_gpi,
    parse_ms_ai_diffusion,
    parse_ndgain,
    parse_owid,
    parse_who_hale,
    parse_wpp_population,
)


def camel(*, key: str) -> str:
    head, *rest = key.split("_")
    return head + "".join(part.title() for part in rest)


def to_json(*, rows: list[dict[str, object]]) -> str:
    cleaned = [{camel(key=k): v for k, v in row.items() if v is not None} for row in rows]
    return json.dumps(cleaned, ensure_ascii=False, indent=1) + "\n"


def fetch_raw(*, raw_dir: Path) -> RawInputs:
    m49 = fetch_m49()
    countries = fetch_countries(m49=m49)
    indicators: dict[str, dict[str, Point]] = {
        factor_id: fetch_world_bank(code=code, source=source) for factor_id, (code, source) in WORLD_BANK_CODES.items()
    }
    indicators["public_debt"] = fetch_imf_debt(year=2025)
    scripts = sorted((raw_dir / "dl_gpi").glob("index-*.js"))
    indicators["peace"] = parse_gpi(path=next(p for p in scripts if "overall_score_2026" in p.read_text(encoding="utf-8")))
    ndgain = raw_dir / "dl_ndgain" / "ex" / "resources 2"
    indicators["climate_vulnerability"] = parse_ndgain(path=ndgain / "vulnerability" / "vulnerability.csv")
    indicators["readiness"] = parse_ndgain(path=ndgain / "readiness" / "readiness.csv")
    workbook = raw_dir / "dl_aq" / "ex" / "Aqueduct40_rankings_download_Y2023M07D05" / "Aqueduct40_rankings_download_Y2023M07D05.xlsx"
    baseline, future = parse_aqueduct(path=workbook)
    indicators["water_stress"] = baseline

    # How people live: fetched last, so the rows of the factors above keep their place in the output.
    indicators["consumption_per_person"] = fetch_world_bank(code=CONSUMPTION_CODE, source=None)
    energy = cached(url=OWID_ENERGY_CSV, path=raw_dir / "dl_owid_energy" / "per-capita-energy-use.csv")
    indicators["energy_per_person"] = parse_owid(path=energy, column="Total energy supply")
    indicators["healthy_life_years"] = parse_who_hale(path=cached(url=WHO_HALE_JSON, path=raw_dir / "dl_who_hale" / "WHOSIS_000002.json"))
    indicators["health_coverage"] = fetch_world_bank(code=HEALTH_COVERAGE_CODE, source=None)
    hours = cached(url=OWID_HOURS_CSV, path=raw_dir / "dl_owid_hours" / "annual-working-hours-per-worker.csv")
    indicators["hours_worked"] = parse_owid(path=hours, column="Working hours per worker")
    indicators["feel_safe"] = parse_gallup_safety(
        path=cached(url=GALLUP_SAFETY_CSV, path=raw_dir / "dl_gallup_safety" / "dataset.csv"),
        names={country.name: country.iso3 for country in countries} | GALLUP_NAMES,
        unpublished=GALLUP_UNPUBLISHED,
        year=GALLUP_SURVEY_YEAR,
    )

    # AI access: fetched after the living factors, for the same reason.
    indicators["ai_use"] = parse_ms_ai_diffusion(
        path=cached(url=MS_AI_DIFFUSION_CSV, path=raw_dir / "dl_ms_ai_diffusion" / "AI_Diffusion_Q22026_Update.csv"),
        column=MS_AI_COLUMN,
        names={country.name: country.iso3 for country in countries} | MS_AI_NAMES,
        unpublished=MS_AI_UNPUBLISHED,
        year=MS_AI_YEAR,
    )
    indicators["ai_usage_index"] = parse_anthropic_usage_index(
        path=cached(url=ANTHROPIC_AEI_CSV, path=raw_dir / "dl_anthropic_aei" / "aei_claude_ai_2026-06-26.csv"),
        month=AEI_MONTH,
    )
    wpp = cached(url=WPP_MEDIUM_CSV, path=raw_dir / "dl_people_wpp" / "WPP2024_Demographic_Indicators_Medium.csv.gz")
    return RawInputs(
        countries=countries,
        population=fetch_world_bank(code="SP.POP.TOTL", source=None),
        indicators=indicators,
        projections={"water_stress": future},
        high_income_consumption=fetch_world_bank_aggregate(code=CONSUMPTION_CODE, aggregate=HIGH_INCOME),
        population_2100=parse_wpp_population(path=wpp, year=2100),
    )


def write(*, dataset: Dataset, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "entities.json").write_text(to_json(rows=[asdict(e) for e in dataset.entities]), encoding="utf-8")
    (out_dir / "observations.json").write_text(to_json(rows=[asdict(o) for o in dataset.observations]), encoding="utf-8")
    (out_dir / "projections.json").write_text(to_json(rows=[asdict(p) for p in dataset.projections]), encoding="utf-8")
    (out_dir / "population-2100.json").write_text(json.dumps(dataset.population_2100, indent=1) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw-dir", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, required=True)
    args = parser.parse_args()
    dataset = build_dataset(raw=fetch_raw(raw_dir=args.raw_dir), spotlight=SPOTLIGHT, min_factors=MIN_FACTORS)
    write(dataset=dataset, out_dir=args.out_dir)
    countries = sum(1 for e in dataset.entities if e.kind == "country")
    print(f"{countries} countries, {len(dataset.entities) - countries} regions, {len(dataset.observations)} observations, {len(dataset.projections)} projections")
    print(f"{dataset.population_2100['WLD']:,} people in 2100")
    for row in dataset.benchmarks:
        print(f"{row.factor_id} {row.entity}: {row.value} ({row.year}; {row.note})")


if __name__ == "__main__":
    main()
