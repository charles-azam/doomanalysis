"""Merge the resources-group fragments and the essentials/wealth/energy-import entries into research/resources.json."""

import json
from pathlib import Path

ROOT = Path("/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad")
WDI = json.loads((ROOT / "dl_wb/wdi.json").read_text())
ESSENTIALS = json.loads((ROOT / "work_resources/essentials_table.json").read_text())
PPPPC = json.loads((ROOT / "dl_imf/dm_ppppc.json").read_text())["values"]["PPPPC"]

COUNTRIES = ["FRA", "DEU", "GBR", "SWE", "NOR", "USA", "JPN", "CHN", "IND", "BRA", "NGA"]
ENTITIES = COUNTRIES + ["WLD"]
NAMES = {"FRA": "France", "DEU": "Germany", "GBR": "UK", "SWE": "Sweden", "NOR": "Norway", "USA": "US", "JPN": "Japan", "CHN": "China", "IND": "India", "BRA": "Brazil", "NGA": "Nigeria", "WLD": "World"}

URL_WB_IMPORTS = "https://data.worldbank.org/indicator/EG.IMP.CONS.ZS"
URL_EU_STOCKS = "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0119"
URL_WB_GDPPC = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.KD"
URL_WB_LINES = "https://www.worldbank.org/en/news/factsheet/2025/06/05/june-2025-update-to-global-poverty-lines"
URL_DELLINK = "https://ageconsearch.umn.edu/record/330258/files/6444_Dellink.pdf"
URL_CRESPO = "https://iamconsortium.org/wp-content/uploads/2024/01/Crespo-presentation.pdf"
URL_IMF_PPPPC = "https://www.imf.org/external/datamapper/PPPPC@WEO"
URL_ICP = "https://databank.worldbank.org/source/icp-2021"
URL_FOX = "https://foxbusiness.com/economy/musk-predicts-ai-create-universal-high-income-make-saving-money-unnecessary"
URL_CRFB = "https://www.crfb.org/blogs/national-health-expenditures-continue-rise"

# Dellink (OECD ENV-Growth, early SSP projections), GDP per capita in 2100, thousand 2005 USD PPP: SSP1..SSP5
SSP_2100: dict[str, tuple[float, float, float, float, float]] = {
    "NOR": (128.5, 92.9, 71.1, 113.9, 172.6),
    "USA": (136.2, 101.6, 84.9, 123.3, 187.6),
    "SWE": (119.2, 86.4, 68.5, 104.5, 160.6),
    "DEU": (125.1, 92.1, 68.7, 110.5, 174.0),
    "GBR": (132.9, 97.3, 68.8, 117.2, 183.4),
    "JPN": (128.0, 93.2, 67.2, 111.4, 177.5),
    "FRA": (116.0, 83.9, 60.8, 100.8, 157.7),
    "BRA": (117.1, 79.8, 32.3, 71.2, 168.0),
    "CHN": (133.8, 101.3, 51.1, 105.6, 192.5),
    "IND": (112.2, 77.8, 26.9, 64.3, 162.9),
    "NGA": (88.9, 57.0, 16.6, 16.2, 128.2),
}


def latest(indicator: str, entity: str) -> tuple[int, float]:
    series = {int(year): value for year, value in WDI[indicator].get(entity, {}).items() if value is not None}
    year = max(series)
    return year, series[year]


def essentials_projections() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for row in ESSENTIALS:
        parts = row["parts"]
        years = row["years"]
        judged = row["judged"]
        note = (
            f"Parts, % of GDP: food {parts['food']:.1f} ({years['food']}), energy {parts['energy']:.1f} ({years['energy']}), "
            f"water {parts['water']:.1f} ({years['water']}), health {parts['health']:.1f} ({years['health']}), "
            f"military {parts['military']:.1f} ({years['military']}), public order {parts['public_order']:.1f} ({years['public_order']})."
            + (f" Judged parts: {', '.join(judged)}." if judged else " No judged parts.")
            + " Low: food without soft drinks. High: economy-wide energy bill, half of restaurant spending, public water spending."
        )
        rows.append({
            "factorId": "essentials_cost",
            "entity": row["entity"],
            "value": row["central"],
            "low": row["low"],
            "high": row["high"],
            "year": max(years.values()),
            "unit": "% of GDP",
            "scenario": "Latest data, not a projection; component years differ (see note). No published projection exists.",
            "source": "Own estimate from World Bank ICP 2021, Eurostat, OECD, IMF GFS, WHO GHED, SIPRI, BEA, MoSPI HCES, NBS/NISER; method in notes",
            "url": URL_ICP,
            "note": note,
        })
    return rows


def energy_import_projections() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for entity in COUNTRIES:
        year, value = latest(indicator="EG.IMP.CONS.ZS", entity=entity)
        rows.append({
            "factorId": "energy_imports",
            "entity": entity,
            "value": round(value, 1),
            "low": None,
            "high": None,
            "year": year,
            "unit": "% of energy use (negative = net exporter)",
            "scenario": "Latest observed value; no published projection to 2100 found",
            "source": "World Bank WDI EG.IMP.CONS.ZS (IEA energy balances)",
            "url": URL_WB_IMPORTS,
            "note": "France: SDES says 61.0% of energy consumed was produced domestically in 2024 and 62.7% in 2025 (nuclear heat counted as domestic)." if entity == "FRA" else None,
        })
    return rows


def wealth_projections() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for entity, values in SSP_2100.items():
        rows.append({
            "factorId": "wealth",
            "entity": entity,
            "value": round(values[1] * 1000),
            "low": round(min(values[2], values[3]) * 1000),
            "high": round(values[4] * 1000),
            "year": 2100,
            "unit": "GDP per capita, 2005 US$ PPP",
            "scenario": "SSP2 (middle of the road); low = SSP3/SSP4 minimum, high = SSP5. Original OECD ENV-Growth SSP projections",
            "source": "Rob Dellink (OECD), GTAP conference paper, Annex III",
            "url": URL_DELLINK,
            "note": "2005 dollars, not comparable with the site's constant 2021 PPP values without rebasing. The 2023 IIASA-WU update is less optimistic in all scenarios (Crespo Cuaresma and Zellmann 2024).",
        })
    rows.append({
        "factorId": "wealth",
        "entity": "WLD",
        "value": None,
        "low": 25000,
        "high": 150000,
        "year": 2100,
        "unit": "GDP per capita, 2005 US$ PPP",
        "scenario": "Range across SSPs: just over 25k (SSP3) to more than 150k (SSP5); SSP2 world value not stated in text read",
        "source": "Rob Dellink (OECD), GTAP conference paper, conclusions",
        "url": URL_DELLINK,
        "note": "World SSP2 value is in charts only.",
    })
    for entity in COUNTRIES + ["WEOWORLD"]:
        value = PPPPC[entity]["2031"]
        rows.append({
            "factorId": "wealth",
            "entity": "WLD" if entity == "WEOWORLD" else entity,
            "value": round(value),
            "low": None,
            "high": None,
            "year": 2031,
            "unit": "GDP per capita, current international $ (PPP), includes inflation",
            "scenario": "IMF WEO October 2026 projection, furthest year",
            "source": "IMF DataMapper PPPPC",
            "url": URL_IMF_PPPPC,
            "note": f"2025 value {PPPPC[entity]['2025']:.0f}. Current-price series: not comparable with constant-2021-dollar World Bank values.",
        })
    return rows


def thresholds() -> list[dict[str, object]]:
    return [
        {"factorId": "energy_imports", "value": 0, "label": "Net importer", "severity": "limit", "basis": "published",
         "consequence": "Depends on foreign suppliers; EU law requires 90 days of oil stocks.",
         "source": "EU Council Directive 2009/119/EC, Art. 3 (stocks of 90 days of net imports or 61 days of consumption)", "url": URL_EU_STOCKS},
        {"factorId": "energy_imports", "value": 50, "label": "Half imported", "severity": "limit", "basis": "judgment",
         "consequence": "Most energy supply depends on foreign decisions and world prices.",
         "source": "Judgment", "url": URL_WB_IMPORTS},
        {"factorId": "energy_imports", "value": 75, "label": "Three-quarters", "severity": "danger", "basis": "judgment",
         "consequence": "A major supplier crisis cannot be covered from domestic sources.",
         "source": "Judgment; Japan (87%) and Germany (70%) bracket it", "url": URL_WB_IMPORTS},
        {"factorId": "wealth", "value": 3030, "label": "$8.30-a-day GDP", "severity": "limit", "basis": "published",
         "consequence": "Even shared equally, output cannot lift everyone above $8.30 a day.",
         "source": "World Bank upper-middle-income poverty line $8.30/day (2021 PPP), x365", "url": URL_WB_LINES},
        {"factorId": "wealth", "value": 1095, "label": "Poverty-line GDP", "severity": "danger", "basis": "published",
         "consequence": "Output per person below $3.00 a day: poor even if shared equally.",
         "source": "World Bank international poverty line $3.00/day (2021 PPP), x365", "url": URL_WB_LINES},
        {"factorId": "essentials_cost", "value": 10, "label": "Abundance line", "severity": "limit", "basis": "judgment",
         "consequence": "Below it, the site counts essentials as nearly free: abundance test met.",
         "source": "Site definition of abundance (essentials under 10% of national income, 2096-2100 average)", "url": URL_FOX},
        {"factorId": "essentials_cost", "value": 50, "label": "Half of output", "severity": "danger", "basis": "judgment",
         "consequence": "Half of output goes to staying fed, safe and healthy; little left.",
         "source": "Judgment; no published national line", "url": URL_ICP},
    ]


IMPORTS_JUDGED: dict[str, tuple[float, float, float, str]] = {
    "FRA": (0.6, 0.1, 0.03, "France fell from 54% (2022) to 42% (2024) and plans to replace imported oil and gas with nuclear and renewable power, but aviation, chemicals and some gas are likely to stay imported."),
    "DEU": (0.85, 0.35, 0.12, "Germany has little fossil fuel left, closed its reactors and plans to import hydrogen and power, so it likely stays a large importer even if electrified."),
    "GBR": (0.75, 0.25, 0.08, "North Sea output is declining (imports rose from 39% to 48% in 2022-2024), offset over decades by offshore wind and nuclear."),
    "SWE": (0.45, 0.05, 0.02, "Hydro and nuclear already cover most needs; the remaining 28% is mostly oil for transport, which electrification can remove."),
    "NOR": (0.1, 0.01, 0.01, "Hydropower alone covers domestic electricity, so Norway stays a net exporter even after oil and gas decline."),
    "USA": (0.25, 0.02, 0.01, "Large domestic oil, gas, coal, uranium and renewable resources make a return to heavy dependence unlikely."),
    "JPN": (0.9, 0.55, 0.3, "Japan imports 87% today, has limited land for renewables and plans hydrogen and ammonia imports, so heavy dependence is likely to persist."),
    "CHN": (0.6, 0.08, 0.03, "Domestic coal and the world's largest renewable build-out keep China well below half despite oil and gas imports."),
    "IND": (0.75, 0.25, 0.05, "Demand will grow several-fold; domestic coal and solar help, but oil and gas imports are already 36% of energy use."),
    "BRA": (0.15, 0.02, 0.01, "Pre-salt oil, hydropower and biofuels make Brazil a net exporter with ample renewable potential."),
    "NGA": (0.15, 0.03, 0.01, "Nigeria exports oil and gas today; only depletion plus fast demand growth without new supply would flip it."),
}

WEALTH_JUDGED: dict[str, tuple[float, float, str]] = {
    "FRA": (0.03, 0.02, "Requires a civilizational or national collapse cutting income per person by over 90%; SSP scenarios all project growth."),
    "DEU": (0.03, 0.02, "Requires a collapse cutting income per person by over 90%; all SSP scenarios project growth."),
    "GBR": (0.03, 0.02, "Requires a collapse cutting income per person by over 90%; all SSP scenarios project growth."),
    "SWE": (0.03, 0.02, "Requires a collapse cutting income per person by over 90%; all SSP scenarios project growth."),
    "NOR": (0.03, 0.02, "Requires a collapse cutting income per person by over 95%; all SSP scenarios project growth."),
    "USA": (0.03, 0.02, "Requires a collapse cutting income per person by over 95%; all SSP scenarios project growth."),
    "JPN": (0.03, 0.02, "Requires a collapse cutting income per person by over 90%; all SSP scenarios project growth."),
    "CHN": (0.04, 0.02, "Requires income per person to fall about 88% from $25,100 (2025); only war or collapse could do it."),
    "IND": (0.05, 0.02, "Income is $10,000 (2025) and every SSP projects growth; only a severe regional collapse (war, climate, famine) would push it below."),
    "BRA": (0.04, 0.02, "Requires income per person to fall about 85% from $20,000 (2025); no published scenario does this."),
    "NGA": (0.07, 0.03, "Income is $8,100 (2025) and SSP3/SSP4 still grow it; conflict or state failure is the main route below these lines."),
    "WLD": (0.03, 0.02, "World income is $21,900 (2025); falling below these lines would mean a civilization-wide collapse, close to the site's doom definition."),
}

ESSENTIALS_JUDGED: dict[str, tuple[float, float, str]] = {
    "FRA": (0.04, 0.02, "Today about 27%, with health alone 11.5% and rising and security heading to NATO's 5%; without SI a fall below 10% is very unlikely (with transformative SI, judged about 0.3)."),
    "DEU": (0.04, 0.02, "Today about 27% with health at 12.3%; aging and NATO's 5% pledge push up (with transformative SI, judged about 0.3)."),
    "GBR": (0.04, 0.02, "Today about 24% with health at 11.1%; the same aging and defence pressures as the rest of Europe (with transformative SI, judged about 0.3)."),
    "SWE": (0.04, 0.02, "Today about 25% with health at 11.2% and defence rising after NATO entry (with transformative SI, judged about 0.3)."),
    "NOR": (0.06, 0.02, "Today about 20% because oil and gas inflate GDP; that cushion shrinks as petroleum declines (with transformative SI, judged about 0.35)."),
    "USA": (0.03, 0.04, "Today about 29% with health at 16.7% and CMS projecting 20.6% of GDP by 2034; a 2100 health share far above today is plausible (with transformative SI, judged about 0.3)."),
    "JPN": (0.04, 0.02, "Today about 25%; the oldest large population keeps health and care spending high (with transformative SI, judged about 0.3)."),
    "CHN": (0.05, 0.02, "Today about 18.5% with low health spending (5.9%) that will rise with income and aging (with transformative SI, judged about 0.3)."),
    "IND": (0.03, 0.03, "Today about 31%, dominated by food (19%); the food share should fall with growth but health (3.3%) should rise (with transformative SI, judged about 0.25)."),
    "BRA": (0.03, 0.03, "Today about 31% with food 12% and health 9.7%; no published path reaches 10% (with transformative SI, judged about 0.25)."),
    "NGA": (0.02, 0.08, "Today about 38% (range 35-48) with food at 28% of GDP; growth should cut the food share, but conflict or climate shocks could push the total above half (with transformative SI, judged about 0.2)."),
    "WLD": (0.03, 0.03, "Today about 26% (range 24-36); falling food shares are offset by rising health and security shares in every published trend (with transformative SI, judged about 0.25)."),
}


def exceedance() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for entity, (p0, p50, p75, reason) in IMPORTS_JUDGED.items():
        for threshold, probability in ((0, p0), (50, p50), (75, p75)):
            rows.append({
                "factorId": "energy_imports", "entity": entity, "threshold": threshold, "direction": "above", "year": 2100,
                "probability": probability, "basis": "judged", "source": "Judgment from World Bank 2024 data and national plans",
                "url": URL_WB_IMPORTS, "reasoning": f"Probability the 2096-2100 average is above {threshold}%: {reason}",
            })
    for entity, (p_limit, p_danger, reason) in WEALTH_JUDGED.items():
        for threshold, probability in ((3030, p_limit), (1095, p_danger)):
            rows.append({
                "factorId": "wealth", "entity": entity, "threshold": threshold, "direction": "below", "year": 2100,
                "probability": probability, "basis": "judged", "source": "Judgment from World Bank 2025 data and SSP projections",
                "url": URL_DELLINK, "reasoning": f"Probability GDP per person (2021 PPP $) is below ${threshold:,} in 2096-2100: {reason[0].lower() + reason[1:]}",
            })
    for entity, (p_below_10, p_above_50, reason) in ESSENTIALS_JUDGED.items():
        rows.append({
            "factorId": "essentials_cost", "entity": entity, "threshold": 10, "direction": "below", "year": 2100,
            "probability": p_below_10, "basis": "judged", "source": "Judgment from own 2022-2025 estimate, USDA ERS, CMS and NATO trends",
            "url": URL_CRFB, "reasoning": f"No-SI baseline for the 2096-2100 average: {reason[0].lower() + reason[1:]}",
        })
        rows.append({
            "factorId": "essentials_cost", "entity": entity, "threshold": 50, "direction": "above", "year": 2100,
            "probability": p_above_50, "basis": "judged", "source": "Judgment from own 2022-2025 estimate",
            "url": URL_ICP, "reasoning": "No-SI baseline for the 2096-2100 average; Nigeria is at about 38% (range 35-48) today, so famine, conflict or a food-price shock could push it past half." if entity == "NGA" else f"No-SI baseline for the 2096-2100 average; {NAMES[entity]} is far below half today, so this needs a war economy, famine or runaway health costs.",
        })
    return rows


MY_NOTES = [
    "EXCEEDANCE CONVENTIONS DIFFER IN THIS FILE. energy_imports, wealth, essentials_cost, public_debt and interest_burden: probability that the 2096-2100 average is beyond the threshold. The five global factors (mineral_concentration, copper_gap, solar_price, battery_price, clean_investment): for lines already crossed, the probability the value is still beyond in 2100; for lines not yet crossed, the probability of crossing in at least one year before 2100. All exceedance values in this file are judged.",
    "Exceedance probabilities are no-SI baselines. For essentials_cost, the reasoning text gives a judged with-SI value (transformative superintelligence widely deployed) because that is the claim the factor tests.",
    "essentials_cost METHOD: share of GDP spent on (1) household food and non-alcoholic beverages (COICOP 01), (2) household direct energy: home electricity, gas and other fuels (COICOP 04.5) plus fuels for personal vehicles (07.2.2), (3) household water supply, sewerage and refuse (COICOP 04.4), (4) current health expenditure, public and private (WHO GHED), (5) military expenditure (SIPRI) plus public order and safety: police, fire, courts, prisons (COFOG 03). Sum divided by GDP.",
    "essentials_cost SOURCES BY COUNTRY: food and energy from Eurostat nama_10_co3_p3 (FRA, DEU, SWE, 2022) and OECD Table 5 (NOR 2023, GBR 2025, USA 2024, JPN 2024); elsewhere World Bank ICP 2021 food shares. Vehicle fuel = COICOP 07.2 times the fuel share of 07.2 in Eurostat HICP weights (country-specific for FRA/DEU/SWE/NOR; EU27 proxy for GBR and JPN). US energy = BEA PCE energy goods and services 2025 (2.48% of GDP); US water = BEA PCE water supply and sanitation (0.45%). India energy = MoSPI HCES 2023-24 fuel and light (6.11% rural, 5.59% urban of MPCE) plus a judged 40% of conveyance (7.59%/8.46%), times household consumption 56.7% of GDP. Public order from Eurostat COFOG 2024 (FRA 1.8, DEU 1.6, SWE 1.6, NOR 1.0), OECD Table 11 2024 (GBR 2.15, USA 1.80, JPN 1.16) and IMF GFS 2024 (CHN 1.10, BRA 2.95).",
    "essentials_cost JUDGED PIECES: household energy for CHN (2.0), BRA (4.0), NGA (4.3; 2024 CPI weights show housing/water/electricity/gas/fuels 8.4% and transport 10.7% of the basket) and WLD (3.0); water for CHN, IND, BRA, NGA, WLD (0.5, anchored on the World Bank's ~0.5% of GDP public water spending in developing countries) and SWE (0.3); public order for IND (1.1; Union police budget alone 0.44% of GDP in 2023-24, derived from PRS and World Bank GDP), NGA (0.6) and WLD (1.5).",
    "essentials_cost RANGE: low = food excluding non-alcoholic beverages (ICP ratio) and judged lows; high = economy-wide energy spending instead of household energy (US 5.7% of GDP, EIA 2023; world 'nearly 10%', IEA via SolarQuarter; elsewhere judged at 2.3x household energy, the US ratio), plus half of restaurant and hotel spending (ICP 2021), plus public water and wastewater spending (COFOG). The high bound partly double-counts energy embedded in food and health.",
    "essentials_cost CAVEATS: (a) the denominator is GDP, not national income; net national income is smaller than GDP, so on that basis every share would be higher. (b) Component years differ (2021 for ICP food shares, 2022-2025 elsewhere); the 2022 European energy figures are from an energy-price-spike year. (c) Excluded: private security, explicit energy and food subsidies, health capital spending, unpaid home production. (d) Norway's shares are low partly because petroleum inflates GDP. (e) WHO's current health expenditure (US 16.7%, 2023) is narrower than CMS national health expenditure (US 18.4% in 2025). (f) Survey budget shares (India) applied to national-accounts consumption.",
    "essentials_cost CONTEXT for the judge: food share falls with income (USDA ERS: US food 9.7% of disposable income in 2025, 10.4% in 1997); health share rises (CMS: US 18.4% of GDP in 2025 to 20.6% in 2034, via CRFB); NATO allies pledged 5% of GDP (3.5% core defence plus up to 1.5% related) by 2035. At 2025 world GDP per capita (constant 2021 PPP $21,914), the 10% line means about $2,190 per person per year for all five essentials.",
    "Musk claim sources: Fox Business (17 Dec 2025) quotes 'universal high income' and, from VivaTech Paris (May 2024), 'There'll be no shortage of goods or services'. Tesla Master Plan Part IV (1 Sep 2025) frames the goal as 'sustainable abundance' (Drive Tesla Canada); tesla.com returned 403.",
    "energy_imports: World Bank WDI EG.IMP.CONS.ZS (IEA balances). Values 2024: FRA 41.75, DEU 70.26, GBR 47.56, SWE 27.71, NOR -729.0, USA -9.78, JPN 87.28, CHN 24.02, IND 36.03, BRA -10.84, NGA -83.08. The WLD aggregate is not meaningful (should net to about zero; WDI shows 14.6 for 2023), so no world exceedance is given. Nuclear heat is counted as domestic production, so uranium imports (France: 6,000-8,000 t/yr, all imported) do not appear in this indicator.",
    "energy_imports France detail (SDES): energy bill EUR 57.7bn in 2024 (oil 43.7, gas 17.4), EUR 45.8bn in 2025; independence 61.0% (2024), 62.7% (2025); oil 39% and gas 18% of final energy (2024). PPE3 fossil-share targets (40% in 2030, 30% in 2035) were seen only in search snippets and are NOT used; official pages returned 403.",
    "wealth: World Bank NY.GDP.PCAP.PP.KD 2025 (constant 2021 PPP $): FRA 55,125, DEU 62,824, GBR 53,993, SWE 63,362, NOR 95,173, USA 76,931, JPN 48,283, CHN 25,067, IND 10,039, BRA 20,025, NGA 8,145, WLD 21,914. Long-run projections use the original OECD SSP runs (2005 US$ PPP) because the 2023-update tables were not readable; that update is 'less optimistic across all scenarios'. The IMF 2031 values are in current dollars.",
    "wealth thresholds are the World Bank's June 2025 poverty lines ($3.00 and $8.30 a day, 2021 PPP) multiplied by 365 and compared with GDP per person, which overstates consumption (household consumption is roughly 40-68% of GDP in these countries).",
]


def main() -> None:
    global_fragment = json.loads((ROOT / "work_resources/fragment_global.json").read_text())
    fiscal_fragment = json.loads((ROOT / "work_resources/fragment_fiscal.json").read_text())
    output = {
        "projections": global_fragment["projections"] + fiscal_fragment["projections"] + energy_import_projections() + wealth_projections() + essentials_projections(),
        "thresholds": global_fragment["thresholds"] + fiscal_fragment["thresholds"] + thresholds(),
        "exceedance": global_fragment["exceedance"] + fiscal_fragment["exceedance"] + exceedance(),
        "notes": MY_NOTES + global_fragment["notes"] + fiscal_fragment["notes"],
    }
    (ROOT / "research/resources.json").write_text(json.dumps(output, indent=1, ensure_ascii=False))
    print({key: len(value) for key, value in output.items()})


if __name__ == "__main__":
    main()
