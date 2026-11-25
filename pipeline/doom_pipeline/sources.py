"""Fetchers for remote APIs and parsers for the official files downloaded to a local cache."""

import csv
import gzip
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
OWID_ENERGY_CSV = "https://ourworldindata.org/grapher/per-capita-energy-use.csv?csvType=full"
OWID_HOURS_CSV = "https://ourworldindata.org/grapher/annual-working-hours-per-worker.csv?csvType=full"
WHO_HALE_JSON = "https://ghoapi.azureedge.net/api/WHOSIS_000002?$filter=Dim1%20eq%20%27SEX_BTSX%27"
# The data behind the map on https://www.gallup.com/analytics/356996/gallup-global-safety-report.aspx (2026 report).
GALLUP_SAFETY_CSV = "https://datawrapper.dwcdn.net/AUEWD/3/dataset.csv"
WPP_MEDIUM_CSV = "https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/CSV_FILES/WPP2024_Demographic_Indicators_Medium.csv.gz"
# The dataset the Microsoft AI Diffusion Report Q2 2026 cites, at the commit that published it.
MS_AI_DIFFUSION_CSV = (
    "https://raw.githubusercontent.com/microsoft/ai-diffusion-report/507c31611c2af77abf44de43036f3ea1d599c248/data/AI_Diffusion_Q22026_Update.csv"
)
# Claude.ai usage by geography from the Anthropic Economic Index release of 26 June 2026 (April and May 2026), pinned.
ANTHROPIC_AEI_CSV = (
    "https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6"
    "/release_2026_06_26/data/aei_claude_ai_2026-06-26.csv"
)


def get_text(*, url: str) -> str:
    # The default urllib user agent: the IMF API refuses custom ones.
    with urllib.request.urlopen(url, timeout=120) as response:
        return response.read().decode("utf-8")


def cached(*, url: str, path: Path) -> Path:
    """A remote file kept in the raw cache: downloaded once, then read from disk. Delete the file to refresh it."""
    if not path.exists():
        path.parent.mkdir(parents=True, exist_ok=True)
        # A generic user agent that names nothing: Datawrapper refuses urllib's default one.
        request = urllib.request.Request(url=url, headers={"User-Agent": "data-pipeline/1.0"})
        with urllib.request.urlopen(url=request, timeout=600) as response:
            path.write_bytes(response.read())
    return path


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


def world_bank_rows(*, economy: str, code: str, source: int | None) -> list[dict[str, object]]:
    """Every row of the World Bank's most recent values for one indicator, following the answer's pages."""
    source_part = f"&source={source}" if source is not None else ""
    rows: list[dict[str, object]] = []
    page = 1
    while True:
        url = f"{WORLD_BANK_API}/country/{economy}/indicator/{code}?format=json&mrnev=1&per_page=1000&page={page}{source_part}"
        payload = as_list(value=json.loads(get_text(url=url)))
        rows.extend(as_dict(value=item) for item in as_list(value=payload[1]))
        if page >= int(str(as_dict(value=payload[0])["pages"])):
            return rows
        page += 1


def fetch_world_bank(*, code: str, source: int | None) -> dict[str, Point]:
    """Most recent non-empty value per economy for one World Bank indicator."""
    points: dict[str, Point] = {}
    for row in world_bank_rows(economy="all", code=code, source=source):
        value = row["value"]
        iso3 = str(row["countryiso3code"])
        year = int(str(row["date"]))
        # A row without a country id is an economy the API cannot place: the governance source files
        # Taiwan under SYR and the Netherlands Antilles under NLD. Those rows are not the country's.
        if as_dict(value=row["country"])["id"] == "" or not isinstance(value, (int, float)):
            continue
        # The API sometimes answers with several years per economy: keep the latest.
        if iso3 not in points or year > points[iso3].year:
            points[iso3] = Point(value=float(value), year=year)
    return points


def fetch_world_bank_aggregate(*, code: str, aggregate: str) -> Point:
    """Most recent non-empty value of one World Bank aggregate, such as HIC for the high-income countries."""
    points: list[Point] = []
    for row in world_bank_rows(economy=aggregate, code=code, source=None):
        value = row["value"]
        if isinstance(value, (int, float)):
            points.append(Point(value=float(value), year=int(str(row["date"]))))
    return max(points, key=lambda point: point.year)


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


def parse_owid(*, path: Path, column: str) -> dict[str, Point]:
    """Latest year with a value per ISO3 code of an Our World in Data grapher CSV (Entity, Code, Year, then the values).

    A zero counts as no value: the energy file writes 0 where its source has no estimate (Tuvalu).
    """
    points: dict[str, Point] = {}
    with path.open(encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            code, year = row["Code"], int(row["Year"])
            if row[column] != "" and float(row[column]) > 0 and (code not in points or year > points[code].year):
                points[code] = Point(value=float(row[column]), year=year)
    return points


def parse_who_hale(*, path: Path) -> dict[str, Point]:
    """Healthy life expectancy at birth, both sexes, latest year per country, from a WHO Global Health Observatory answer."""
    payload = as_dict(value=json.loads(path.read_text(encoding="utf-8")))
    points: dict[str, Point] = {}
    for item in as_list(value=payload["value"]):
        row = as_dict(value=item)
        value = row["NumericValue"]
        iso3 = str(row["SpatialDim"])
        year = int(str(row["TimeDim"]))
        if row["SpatialDimType"] != "COUNTRY" or row["Dim1"] != "SEX_BTSX" or not isinstance(value, (int, float)):
            continue
        if iso3 not in points or year > points[iso3].year:
            points[iso3] = Point(value=float(value), year=year)
    return points


def parse_gallup_safety(*, path: Path, names: dict[str, str], unpublished: tuple[str, ...], year: int) -> dict[str, Point]:
    """Share of adults who feel safe walking alone at night where they live, from one year of Gallup World Poll surveys.

    The file names countries in words: `names` maps them to ISO3 codes, and a name found neither there nor
    in `unpublished` stops the run instead of being dropped silently.
    """
    points: dict[str, Point] = {}
    with path.open(encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            if row["DW_NAME"] not in unpublished and row["VALUE"] != "":
                points[names[row["DW_NAME"]]] = Point(value=float(row["VALUE"]), year=year)
    return points


def parse_ms_ai_diffusion(*, path: Path, column: str, names: dict[str, str], unpublished: tuple[str, ...], year: int) -> dict[str, Point]:
    """Share of people aged 15 to 64 who used a generative AI product in one period of Microsoft's AI diffusion table.

    The file is Mac Roman encoded (its "Türkiye" is the byte 0x9F) and writes shares as "49.6%". It names economies
    in words: `names` maps them to ISO3 codes, and a name found neither there nor in `unpublished` stops the run.
    """
    points: dict[str, Point] = {}
    with path.open(encoding="mac_roman", newline="") as handle:
        for row in csv.DictReader(handle):
            if row["Economy"] not in unpublished:
                points[names[row["Economy"]]] = Point(value=float(row[column].removesuffix("%")), year=year)
    return points


def parse_anthropic_usage_index(*, path: Path, month: str) -> dict[str, Point]:
    """The Anthropic AI Usage Index per country for one month of Claude.ai use, as Anthropic publishes it.

    The index is a country's share of Claude.ai conversations divided by its share of the working-age (15–64)
    population (metric usage_per_capita_index, category overall). `month` is the row's date_start, such as "2026-05-01".
    """
    points: dict[str, Point] = {}
    with path.open(encoding="utf-8", newline="") as handle:
        for row in csv.DictReader(handle):
            if (
                row["date_start"] == month
                and row["geo_level"] == "country"
                and row["category_name"] == "overall"
                and row["metric_id"] == "usage_per_capita_index"
            ):
                points[row["geo_id"]] = Point(value=float(row["value"]), year=int(month[:4]))
    if not points:
        raise ValueError(f"no country usage index for {month} in {path.name}")
    return points


def parse_wpp_population(*, path: Path, year: int) -> dict[str, int]:
    """People on 1 July of one year, UN WPP medium variant, by ISO3 code, with the world total under "WLD"."""
    people: dict[str, int] = {}
    with gzip.open(filename=path, mode="rt", encoding="utf-8-sig", newline="") as handle:
        for row in csv.DictReader(handle):
            if row["Time"] != str(year) or row["Variant"] != "Medium" or row["TPopulation1July"] == "":
                continue
            key = "WLD" if row["LocTypeName"] == "World" else row["ISO3_code"]
            if key != "":
                people[key] = round(float(row["TPopulation1July"]) * 1000)
    return people
