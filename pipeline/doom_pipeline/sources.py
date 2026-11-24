"""Fetchers for remote APIs and parsers for the official files downloaded to a local cache."""

import csv
import io
import json
import re
import urllib.request
from pathlib import Path

from openpyxl import load_workbook

from doom_pipeline.models import Country, Point

WORLD_BANK_API = "https://api.worldbank.org/v2"
IMF_API = "https://www.imf.org/external/datamapper/api/v1"
M49_CSV = "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.csv"


def get_text(*, url: str) -> str:
    # The default urllib user agent: the IMF API refuses custom ones.
    with urllib.request.urlopen(url, timeout=120) as response:
        return response.read().decode("utf-8")


def as_list(*, value: object) -> list[object]:
    if not isinstance(value, list):
        raise ValueError(f"expected a list, got {type(value).__name__}")
    return value


def as_dict(*, value: object) -> dict[str, object]:
    if not isinstance(value, dict):
        raise ValueError(f"expected an object, got {type(value).__name__}")
    return value


def fetch_m49() -> dict[str, str]:
    """ISO3 code -> UN M49 sub-region (intermediate region for Sub-Saharan Africa stays at sub-region level)."""
    rows = csv.DictReader(io.StringIO(get_text(url=M49_CSV)))
    return {row["alpha-3"]: row["sub-region"] for row in rows if row["sub-region"]}


def fetch_countries(*, m49: dict[str, str]) -> list[Country]:
    """World Bank economies that are real countries (aggregates have no region) and have an M49 sub-region."""
    payload = as_list(value=json.loads(get_text(url=f"{WORLD_BANK_API}/country?format=json&per_page=400")))
    countries: list[Country] = []
    for item in as_list(value=payload[1]):
        row = as_dict(value=item)
        region = as_dict(value=row["region"])
        iso3 = str(row["id"])
        if region["id"] == "NA" or iso3 not in m49:
            continue
        countries.append(Country(iso3=iso3, iso2=str(row["iso2Code"]), name=str(row["name"]), sub_region=m49[iso3]))
    return countries


def fetch_world_bank(*, code: str, source: int | None) -> dict[str, Point]:
    """Most recent non-empty value per economy for one World Bank indicator."""
    source_part = f"&source={source}" if source is not None else ""
    url = f"{WORLD_BANK_API}/country/all/indicator/{code}?format=json&mrnev=1&per_page=500{source_part}"
    payload = as_list(value=json.loads(get_text(url=url)))
    points: dict[str, Point] = {}
    for item in as_list(value=payload[1]):
        row = as_dict(value=item)
        value = row["value"]
        if isinstance(value, (int, float)):
            points[str(row["countryiso3code"])] = Point(value=float(value), year=int(str(row["date"])))
    return points


def fetch_imf_debt(*, year: int) -> dict[str, Point]:
    """General government gross debt, % of GDP, for one WEO year (the latest estimate, not a forecast)."""
    payload = as_dict(value=json.loads(get_text(url=f"{IMF_API}/GGXWDG_NGDP")))
    series = as_dict(value=as_dict(value=payload["values"])["GGXWDG_NGDP"])
    points: dict[str, Point] = {}
    for iso3, by_year in series.items():
        value = as_dict(value=by_year).get(str(year))
        if isinstance(value, (int, float)):
            points[iso3] = Point(value=float(value), year=year)
    return points


def parse_gpi(*, path: Path) -> dict[str, Point]:
    """Global Peace Index 2026 overall scores, from the dataset embedded in the official site's script."""
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(r'"iso3":"([A-Z]{3})","region":"[^"]*","overall_score_2026":([0-9.]+)')
    return {iso3: Point(value=float(score), year=2026) for iso3, score in pattern.findall(text)}


def parse_ndgain(*, path: Path) -> dict[str, Point]:
    """Latest non-empty year of an ND-GAIN country CSV (one row per country, one column per year)."""
    points: dict[str, Point] = {}
    with path.open(encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            years = sorted((int(key) for key in row if key.isdigit() and row[key] not in ("", "NA")), reverse=True)
            if years:
                points[row["ISO3"]] = Point(value=float(row[str(years[0])]), year=years[0])
    return points


def parse_aqueduct(*, path: Path) -> tuple[dict[str, Point], dict[str, Point]]:
    """Baseline water stress (bws, all sectors) and its 2050 business-as-usual projection, per country."""
    book = load_workbook(filename=path, read_only=True)
    baseline: dict[str, Point] = {}
    for row in book["country_baseline"].iter_rows(min_row=2, values_only=True):
        iso3, indicator, weight, score = row[0], row[2], row[3], row[4]
        if indicator == "bws" and weight == "Tot" and isinstance(score, (int, float)) and score >= 0:
            baseline[str(iso3)] = Point(value=float(score), year=2023)
    future: dict[str, Point] = {}
    for row in book["country_future"].iter_rows(min_row=2, values_only=True):
        iso3, year, scenario, indicator, weight, score = row[0], row[2], row[3], row[4], row[5], row[6]
        if year == 2050 and scenario == "bau" and indicator == "bws" and weight == "Tot" and isinstance(score, (int, float)) and score >= 0:
            future[str(iso3)] = Point(value=float(score), year=2050)
    return baseline, future
