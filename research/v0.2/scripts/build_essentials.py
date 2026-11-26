"""Build the essentials_cost estimates (share of GDP) from the downloaded datasets.

Every input below is either read from a downloaded file or typed from a fetched page
(the page URL is recorded next to the value). Judged inputs are flagged as such.
"""

import json
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path("/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad")
ENTITIES = ["FRA", "DEU", "GBR", "SWE", "NOR", "USA", "JPN", "CHN", "IND", "BRA", "NGA", "WLD"]

ICP = json.loads((ROOT / "dl_wb/icp2021_share_gdp.json").read_text())
WDI = json.loads((ROOT / "dl_wb/wdi.json").read_text())

URL_ICP = "https://databank.worldbank.org/source/icp-2021"
URL_EUROSTAT_COICOP = "https://ec.europa.eu/eurostat/databrowser/view/nama_10_co3_p3/default/table"
URL_EUROSTAT_HICPW = "https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_inw/default/table"
URL_EUROSTAT_COFOG = "https://ec.europa.eu/eurostat/databrowser/view/gov_10a_exp/default/table"
URL_OECD_T5 = "https://data-explorer.oecd.org/?df[ds]=dsDisseminateFinalDMZ&df[id]=DSD_NAMAIN10%40DF_TABLE5&df[ag]=OECD.SDD.NAD"
URL_OECD_T11 = "https://data-explorer.oecd.org/?df[ds]=dsDisseminateFinalDMZ&df[id]=DSD_NASEC10%40DF_TABLE11&df[ag]=OECD.SDD.NAD"
URL_IMF_COFOG = "https://data.imf.org/en/datasets/IMF.STA:GFS_COFOG"
URL_BEA_ENERGY = "https://fred.stlouisfed.org/series/DNRGRC1A027NBEA"
URL_BEA_WATER = "https://fred.stlouisfed.org/series/DWRSRC1A027NBEA"
URL_HCES = "https://mospi.gov.in/sites/default/files/publication_reports/HCES%20FactSheet%202023-24.pdf"
URL_NISER = "https://niser.gov.ng/v2/wp-content/uploads/2025/05/NISER-Brief-_-CONSUMER-PRICE-INDEX-REBASING-AND-COST-OF-LIVING-REALITY-IN-NIGERIA_new2.pdf"
URL_WB_WATER = "https://www.worldbank.org/en/topic/water/publication/funding-a-water-secure-future"
URL_EIA = "https://www.eia.gov/todayinenergy/detail.php?id=65965"
URL_IEA_10PCT = "https://solarquarter.com/2026/02/18/iea-2025-report-batteries-account-for-40-of-energy-patents-as-global-energy-spending-nears-10-of-gdp-report/"
URL_WB_HEALTH = "https://data.worldbank.org/indicator/SH.XPD.CHEX.GD.ZS"
URL_WB_MIL = "https://data.worldbank.org/indicator/MS.MIL.XPND.GD.ZS"
URL_PRS = "https://prsindia.org/budgets/parliament/demand-for-grants-2024-25-analysis-home-affairs"

# US GDP 2025, US$ bn (FRED GDPA), PCE energy goods and services 2025 (FRED DNRGRC1A027NBEA), PCE water supply and sanitation 2025 (FRED DWRSRC1A027NBEA)
US_GDP_2025 = 30861.292
US_PCE_ENERGY_2025 = 766.724
US_PCE_WATER_2025 = 139.774

# Share of fuels and lubricants (CP0722) in operation of personal transport (CP072), from Eurostat HICP item weights.
FUEL_SHARE_OF_CP072 = {
    "FRA": 41.01 / 102.57,  # France 2022
    "DEU": 41.09 / 84.96,  # Germany 2022
    "SWE": 28.77 / 74.47,  # Sweden 2022
    "NOR": 28.07 / 69.78,  # Norway 2023
    "EU27_2024": 42.98 / 85.62,  # proxy used for Japan 2024
    "EU27_2025": 41.05 / 82.04,  # proxy used for the UK 2025
}

# National-accounts household spending by COICOP, % of GDP (computed from Eurostat nama_10_co3_p3 and OECD Table 5).
# (year, CP01, CP045, CP072, CP044, source label, url)
NATIONAL_ACCOUNTS: dict[str, tuple[int, float, float, float, float | None, str, str]] = {
    "FRA": (2022, 6.89, 2.35, 4.44, 0.71, "Eurostat nama_10_co3_p3", URL_EUROSTAT_COICOP),
    "DEU": (2022, 5.39, 2.28, 3.39, 1.15, "Eurostat nama_10_co3_p3", URL_EUROSTAT_COICOP),
    "SWE": (2022, 5.56, 2.87, 2.78, None, "Eurostat nama_10_co3_p3", URL_EUROSTAT_COICOP),
    "NOR": (2023, 3.55, 1.21, 1.79, 0.55, "OECD Table 5 (COICOP 2018)", URL_OECD_T5),
    "GBR": (2025, 5.28, 1.62, 2.75, 0.51, "OECD Table 5", URL_OECD_T5),
    "USA": (2024, 4.27, 1.17, 3.10, 0.48, "OECD Table 5", URL_OECD_T5),
    "JPN": (2024, 8.53, 1.61, 2.07, 0.53, "OECD Table 5 (COICOP 2018)", URL_OECD_T5),
}

# Public order and safety (COFOG 03), % of GDP: (value, year, source, url)
PUBLIC_ORDER: dict[str, tuple[float, int, str, str]] = {
    "FRA": (1.8, 2024, "Eurostat gov_10a_exp GF03", URL_EUROSTAT_COFOG),
    "DEU": (1.6, 2024, "Eurostat gov_10a_exp GF03", URL_EUROSTAT_COFOG),
    "SWE": (1.6, 2024, "Eurostat gov_10a_exp GF03", URL_EUROSTAT_COFOG),
    "NOR": (1.0, 2024, "Eurostat gov_10a_exp GF03", URL_EUROSTAT_COFOG),
    "GBR": (2.15, 2024, "OECD Table 11 COFOG 03", URL_OECD_T11),
    "USA": (1.80, 2024, "OECD Table 11 COFOG 03", URL_OECD_T11),
    "JPN": (1.16, 2024, "OECD Table 11 COFOG 03", URL_OECD_T11),
    "CHN": (1.10, 2024, "IMF GFS COFOG 03", URL_IMF_COFOG),
    "BRA": (2.95, 2024, "IMF GFS COFOG 03", URL_IMF_COFOG),
}
# Judged public order where no COFOG data exist: (central, low, high, reason)
PUBLIC_ORDER_JUDGED: dict[str, tuple[float, float, float, str]] = {
    "IND": (1.1, 0.8, 1.4, "judged: Union police budget alone was 0.44% of GDP in 2023-24 (PRS, derived with World Bank GDP); states fund most policing"),
    "NGA": (0.6, 0.3, 1.0, "judged: no COFOG data"),
    "WLD": (1.5, 1.0, 2.0, "judged: reported countries range 1.0-2.9% of GDP"),
}

# Public water supply (GF0603) + wastewater (GF0502) spending, % of GDP, used only for the high bound.
PUBLIC_WATER = {"FRA": 0.3, "DEU": 0.1, "SWE": 0.4, "NOR": 0.8, "GBR": 0.02, "JPN": 0.55, "USA": 0.0, "BRA": 0.31}

# Judged household direct energy for countries without COICOP detail: (central, low, high, reason)
ENERGY_JUDGED: dict[str, tuple[float, float, float, str]] = {
    "CHN": (2.0, 1.5, 3.0, "judged: households consume only 38-40% of GDP; no published COICOP split"),
    "BRA": (4.0, 3.0, 5.5, "judged: households consume 63% of GDP; no COICOP split read on a fetched page"),
    "NGA": (4.3, 3.1, 6.2, "judged: 5-10% of household spending (2024 CPI weights: housing, water, electricity, gas and fuels 8.4%, transport 10.7%) times household consumption 62% of GDP (ICP 2021)"),
    "WLD": (3.0, 2.0, 4.5, "judged from the country values above"),
}


@dataclass
class Component:
    name: str
    central: float
    low: float
    high: float
    year: int
    source: str
    judged: bool = False


@dataclass
class Estimate:
    entity: str
    components: list[Component] = field(default_factory=list)

    def total(self, which: str) -> float:
        return round(sum(getattr(component, which) for component in self.components), 1)


def latest(indicator: str, entity: str) -> tuple[int, float]:
    series = {int(year): value for year, value in WDI[indicator].get(entity, {}).items() if value is not None}
    year = max(series)
    return year, series[year]


def food(entity: str) -> Component:
    icp_food_bev = ICP["1101000:FOOD AND NON-ALCOHOLIC BEVERAGES"][entity]
    icp_food = ICP["1101100:FOOD"][entity]
    restaurants = ICP["1111000:RESTAURANTS AND HOTELS"][entity]
    if entity in NATIONAL_ACCOUNTS:
        year, cp01, _, _, _, label, _ = NATIONAL_ACCOUNTS[entity]
        central = cp01
        source = f"{label} COICOP 01, {year}"
    else:
        year = 2021
        central = icp_food_bev
        source = "World Bank ICP 2021, food and non-alcoholic beverages"
    low = central * icp_food / icp_food_bev
    high = central + 0.5 * restaurants
    return Component(name="food", central=central, low=low, high=high, year=year, source=source)


def energy(entity: str) -> Component:
    if entity == "USA":
        central = 100 * US_PCE_ENERGY_2025 / US_GDP_2025
        return Component(name="energy", central=central, low=central, high=5.7, year=2025, source="BEA PCE energy goods and services 2025 (FRED); high = EIA total energy expenditure 5.7% of GDP (2023)")
    if entity == "IND":
        fuel_light = (6.11 + 5.59) / 2
        conveyance = (7.59 + 8.46) / 2
        year, household_share = latest(indicator="NE.CON.PRVT.ZS", entity="IND")
        central = (fuel_light + 0.4 * conveyance) * household_share / 100
        low = fuel_light * household_share / 100
        high = max((fuel_light + conveyance) * household_share / 100, central * 2.3)
        return Component(name="energy", central=central, low=low, high=high, year=2024, source=f"MoSPI HCES 2023-24 fuel and light + 40% of conveyance (judged fuel part) x household consumption {household_share:.1f}% of GDP ({year})", judged=True)
    if entity in ENERGY_JUDGED:
        central, low, high, reason = ENERGY_JUDGED[entity]
        if entity == "WLD":
            high = 10.0
            reason = reason + "; high = IEA: energy spending nearly 10% of world GDP (via SolarQuarter)"
        else:
            high = max(high, central * 2.3)
        return Component(name="energy", central=central, low=low, high=high, year=2024, source=reason, judged=True)
    year, _, cp045, cp072, _, label, _ = NATIONAL_ACCOUNTS[entity]
    fuel_key = {"JPN": "EU27_2024", "GBR": "EU27_2025"}.get(entity, entity)
    central = cp045 + cp072 * FUEL_SHARE_OF_CP072[fuel_key]
    return Component(name="energy", central=central, low=central, high=central * 2.3, year=year, source=f"{label} COICOP 04.5 + fuel share of 07.2 (Eurostat HICP weights), {year}; high = x2.3 economy-wide (judged, US ratio)")


def water(entity: str) -> Component:
    if entity == "USA":
        central = 100 * US_PCE_WATER_2025 / US_GDP_2025
        return Component(name="water", central=central, low=central, high=central, year=2025, source="BEA PCE water supply and sanitation 2025 (FRED)")
    if entity in NATIONAL_ACCOUNTS and NATIONAL_ACCOUNTS[entity][4] is not None:
        year, _, _, _, cp044, label, _ = NATIONAL_ACCOUNTS[entity]
        return Component(name="water", central=cp044, low=cp044, high=cp044 + PUBLIC_WATER.get(entity, 0.0), year=year, source=f"{label} COICOP 04.4, {year}; high adds public water and wastewater (COFOG)")
    if entity == "SWE":
        return Component(name="water", central=0.3, low=0.2, high=0.7, year=2025, source="judged: HICP weight for water and sewerage 5.8 per mille (2025); high adds public water and wastewater 0.4% (COFOG)", judged=True)
    return Component(name="water", central=0.5, low=0.3, high=1.0, year=2024, source="judged, anchored on World Bank: public water spending in developing countries about 0.5% of GDP", judged=True)


def health(entity: str) -> Component:
    year, value = latest(indicator="SH.XPD.CHEX.GD.ZS", entity=entity)
    return Component(name="health", central=value, low=value, high=value, year=year, source=f"WHO GHED current health expenditure via World Bank, {year}")


def military(entity: str) -> Component:
    year, value = latest(indicator="MS.MIL.XPND.GD.ZS", entity=entity)
    return Component(name="military", central=value, low=value, high=value, year=year, source=f"SIPRI via World Bank, {year}")


def public_order(entity: str) -> Component:
    if entity in PUBLIC_ORDER:
        value, year, label, _ = PUBLIC_ORDER[entity]
        return Component(name="public_order", central=value, low=value, high=value, year=year, source=f"{label}, {year}")
    central, low, high, reason = PUBLIC_ORDER_JUDGED[entity]
    return Component(name="public_order", central=central, low=low, high=high, year=2024, source=reason, judged=True)


def build() -> list[Estimate]:
    estimates: list[Estimate] = []
    for entity in ENTITIES:
        estimate = Estimate(entity=entity)
        for maker in (food, energy, water, health, military, public_order):
            estimate.components.append(maker(entity))
        estimates.append(estimate)
    return estimates


def main() -> None:
    estimates = build()
    rows = []
    for estimate in estimates:
        parts = {component.name: round(component.central, 2) for component in estimate.components}
        rows.append({
            "entity": estimate.entity,
            "central": estimate.total(which="central"),
            "low": estimate.total(which="low"),
            "high": estimate.total(which="high"),
            "parts": parts,
            "years": {component.name: component.year for component in estimate.components},
            "sources": {component.name: component.source for component in estimate.components},
            "judged": [component.name for component in estimate.components if component.judged],
        })
        print(estimate.entity, estimate.total(which="low"), estimate.total(which="central"), estimate.total(which="high"), parts)
    (ROOT / "work_resources/essentials_table.json").write_text(json.dumps(rows, indent=1))


if __name__ == "__main__":
    main()
