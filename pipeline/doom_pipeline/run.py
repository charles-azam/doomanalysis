"""Fetch everything, build the dataset, write the JSON files the site imports.

Usage (from pdoom/pipeline): uv run python -m doom_pipeline.run --raw-dir <downloads> --out-dir ../src/data/generated
The raw dir holds the official files that have no API: the GPI 2026 site script, the ND-GAIN 2026 zip
contents and the WRI Aqueduct 4.0 rankings workbook.
"""

import argparse
import json
from dataclasses import asdict
from pathlib import Path

from doom_pipeline.build import build_dataset
from doom_pipeline.catalog import MIN_FACTORS, SPOTLIGHT, WORLD_BANK_CODES
from doom_pipeline.models import Dataset, Point, RawInputs
from doom_pipeline.sources import (
    fetch_countries,
    fetch_imf_debt,
    fetch_m49,
    fetch_world_bank,
    parse_aqueduct,
    parse_gpi,
    parse_ndgain,
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
    return RawInputs(
        countries=countries,
        population=fetch_world_bank(code="SP.POP.TOTL", source=None),
        indicators=indicators,
        projections={"water_stress": future},
    )


def write(*, dataset: Dataset, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "entities.json").write_text(to_json(rows=[asdict(e) for e in dataset.entities]), encoding="utf-8")
    (out_dir / "observations.json").write_text(to_json(rows=[asdict(o) for o in dataset.observations]), encoding="utf-8")
    (out_dir / "projections.json").write_text(to_json(rows=[asdict(p) for p in dataset.projections]), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw-dir", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, required=True)
    args = parser.parse_args()
    dataset = build_dataset(raw=fetch_raw(raw_dir=args.raw_dir), spotlight=SPOTLIGHT, min_factors=MIN_FACTORS)
    write(dataset=dataset, out_dir=args.out_dir)
    countries = sum(1 for e in dataset.entities if e.kind == "country")
    print(f"{countries} countries, {len(dataset.entities) - countries} regions, {len(dataset.observations)} observations, {len(dataset.projections)} projections")


if __name__ == "__main__":
    main()
