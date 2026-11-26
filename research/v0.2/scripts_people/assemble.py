import json
import sys
from pathlib import Path

gen = json.loads(Path(sys.argv[1]).read_text())
out_path = Path(sys.argv[2])

SITE = "https://doom.charlesazam.com"
SITE_SRC = "Doom Analysis definitions (abundance needs >=90% with each essential; collapse = majority loses one)"
WPP_SUM = "https://population.un.org/wpp/assets/Files/WPP2024_Summary-of-Results.pdf"
URL_WGI = "https://www.worldbank.org/en/publication/worldwide-governance-indicators"
URL_NDGAIN = "https://gain.nd.edu/our-work/country-index/download-data/"

thresholds = [
    {"factorId": "aging", "value": 50, "label": "2 workers/elder", "severity": "limit", "basis": "judgment",
     "consequence": "Two working-age people per older person; pensions and care strain budgets", "source": "Own judgment; ratio definition from UN WPP 2024", "url": WPP_SUM},
    {"factorId": "aging", "value": 100, "label": "1 worker/elder", "severity": "danger", "basis": "judgment",
     "consequence": "One working-age person per older person; essentials funding at risk", "source": "Own judgment; ratio definition from UN WPP 2024", "url": WPP_SUM},
    {"factorId": "fertility", "value": 2.1, "label": "Replacement", "severity": "limit", "basis": "published",
     "consequence": "Each generation smaller; population shrinks long-run without migration", "source": "UN DESA, World Population Prospects 2024: Summary of Results", "url": WPP_SUM},
    {"factorId": "fertility", "value": 1.4, "label": "Ultra-low", "severity": "danger", "basis": "published",
     "consequence": "Each generation about a third smaller; fast ageing and decline", "source": "UN DESA, World Population Prospects 2024: Summary of Results ('ultra-low' = under 1.4)", "url": WPP_SUM},
    {"factorId": "life_expectancy", "value": 65, "label": "1995 world level", "severity": "limit", "basis": "judgment",
     "consequence": "Three decades of health gains lost", "source": "Own judgment; world was 64.9 in 1995 (UN WPP 2024 estimates)", "url": "https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/CSV_FILES/WPP2024_Demographic_Indicators_Medium.csv.gz"},
    {"factorId": "life_expectancy", "value": 50, "label": "1960 world level", "severity": "danger", "basis": "judgment",
     "consequence": "Mass early death; health essential failing for most people", "source": "Own judgment; world was 47.8 in 1960 (UN WPP 2024 estimates)", "url": "https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/CSV_FILES/WPP2024_Demographic_Indicators_Medium.csv.gz"},
    {"factorId": "government_effectiveness", "value": 0.0, "label": "Below average", "severity": "limit", "basis": "judgment",
     "consequence": "Public services worse than the typical country's; delivery of essentials weakens", "source": "Own judgment; WGI estimates are centred near 0 across countries", "url": URL_WGI},
    {"factorId": "government_effectiveness", "value": -1.0, "label": "Fragile zone", "severity": "danger", "basis": "judgment",
     "consequence": "State struggles to deliver basic services; 26 countries there in 2025", "source": "Own judgment; World Bank WGI 2025 data", "url": URL_WGI},
    {"factorId": "readiness", "value": 0.40, "label": "World median", "severity": "limit", "basis": "judgment",
     "consequence": "Less able than the typical country to turn money into adaptation", "source": "Own judgment; ND-GAIN 2024 median is 0.39", "url": URL_NDGAIN},
    {"factorId": "readiness", "value": 0.25, "label": "Bottom tenth", "severity": "danger", "basis": "judgment",
     "consequence": "Adaptation investment rarely converts to action; shocks hit unbuffered", "source": "Own judgment; ND-GAIN 2024 10th percentile is about 0.255", "url": URL_NDGAIN},
]
for f, nm in (("electricity_access", "electricity"), ("water_access", "safe water")):
    thresholds += [
        {"factorId": f, "value": 90, "label": "Abundance floor", "severity": "limit", "basis": "judgment",
         "consequence": f"Below this, abundance (90% with {nm}) is impossible", "source": SITE_SRC, "url": SITE},
        {"factorId": f, "value": 50, "label": "Collapse line", "severity": "danger", "basis": "judgment",
         "consequence": f"A majority lacks {nm}; meets the collapse definition if sustained", "source": SITE_SRC, "url": SITE},
    ]
for f, nm in (("undernourishment", "undernourished"), ("food_insecurity", "food insecure")):
    thresholds += [
        {"factorId": f, "value": 10, "label": "Abundance floor", "severity": "limit", "basis": "judgment",
         "consequence": f"Over 10% {nm}: abundance (90% fed) is impossible", "source": SITE_SRC, "url": SITE},
        {"factorId": f, "value": 50, "label": "Collapse line", "severity": "danger", "basis": "judgment",
         "consequence": f"A majority {nm}; meets the collapse definition if sustained", "source": SITE_SRC, "url": SITE},
    ]

for t in thresholds:
    assert len(t["label"]) <= 16, t["label"]
    assert len(t["consequence"].split()) <= 15, t["consequence"]

J = "judged"


def ex(f: str, e: str, thr: float, d: str, p: float, src: str, url: str, why: str) -> dict[str, object]:
    return {"factorId": f, "entity": e, "threshold": thr, "direction": d, "year": 2100, "probability": p, "basis": J, "source": src, "url": url, "reasoning": why}


WB = "https://data.worldbank.org/indicator/"
SDG7 = "https://www.seforall.org/system/files/2026-07/SEforALL%20Tracking%20SDG7%20-%20The%20Energy%20Progress%20Report%202026_Executive%20Version_22Jul2026-2.pdf"
SOFI = "https://www.fao.org/newsroom/detail/un-report--global-hunger-levels-ease-for-third-consecutive-year-as-regional-disparities-persist/en"
FOFA = "https://openknowledge.fao.org/3/I8429EN/i8429en.pdf"
judged = [
    ex("electricity_access", "WLD", 90, "below", 0.10, "Own judgment from Tracking SDG7 2026 (91.9% in 2024; ~644 million without in 2030)", SDG7,
       "Access is rising slowly, but a stall in fast-growing sub-Saharan Africa or a major global shock could pull the world share under 90%."),
    ex("electricity_access", "WLD", 50, "below", 0.02, "Own judgment", SDG7,
       "Needs most connected people to lose grid service, which implies a global collapse."),
    ex("electricity_access", "FRA", 90, "below", 0.02, "Own judgment; France 100% in 2024 (World Bank)", WB + "EG.ELC.ACCS.ZS",
       "Only war or systemic collapse would disconnect a tenth of French households for long."),
    ex("electricity_access", "FRA", 50, "below", 0.01, "Own judgment", WB + "EG.ELC.ACCS.ZS",
       "Requires national-scale collapse."),
    ex("water_access", "WLD", 90, "below", 0.40, "Own judgment from JMP data (67.7% in 2015, 73.7% in 2024)", WB + "SH.H2O.SMDW.ZS",
       "Already below 90%; value is P(still below in 2100): the trend reaches 90% around mid-century, but the strict standard and growth in low-coverage countries may keep it short."),
    ex("water_access", "WLD", 50, "below", 0.04, "Own judgment", WB + "SH.H2O.SMDW.ZS",
       "Even with stalled progress in today's lowest-coverage countries the world stays above 50%, so only a broad collapse gets there."),
    ex("water_access", "FRA", 90, "below", 0.03, "Own judgment; France 99.7% in 2024", WB + "SH.H2O.SMDW.ZS",
       "Would need lasting failure of water treatment or contamination on a national scale."),
    ex("water_access", "FRA", 50, "below", 0.01, "Own judgment", WB + "SH.H2O.SMDW.ZS",
       "Requires national-scale collapse."),
    ex("undernourishment", "WLD", 10, "above", 0.25, "Own judgment from SOFI 2026 (7.8% in 2025) and FAO 2018 scenarios (up to 12.4% in 2050)", SOFI,
       "FAO's own 'stratified societies' scenario exceeds 10%, and a multi-breadbasket failure, war or volcanic winter could do it for a year or more."),
    ex("undernourishment", "WLD", 50, "above", 0.02, "Own judgment", FOFA,
       "Would require a global food system collapse such as a nuclear or volcanic winter."),
    ex("undernourishment", "FRA", 10, "above", 0.03, "Own judgment; France below 2.5% (reported as 2.5)", WB + "SN.ITK.DEFC.ZS",
       "Rich, food-exporting country; only a deep national or global crisis gets there."),
    ex("undernourishment", "FRA", 50, "above", 0.01, "Own judgment", WB + "SN.ITK.DEFC.ZS",
       "Requires national-scale collapse."),
    ex("food_insecurity", "WLD", 10, "above", 0.65, "Own judgment from SOFI 2026 (25.8% in 2025; 8.7% in Northern America and Europe)", SOFI,
       "Already above 10%; value is P(still above in 2100): getting under 10% needs every region at today's richest-region level while Africa's share of people grows."),
    ex("food_insecurity", "WLD", 50, "above", 0.05, "Own judgment", SOFI,
       "Would need a shock far larger than COVID-19, which raised the rate only a few points."),
    ex("food_insecurity", "FRA", 10, "above", 0.60, "Own judgment; France 9.4% in 2024 (World Bank/FAO)", WB + "SN.ITK.MSFI.ZS",
       "France rose from 5.8% (2019) to 9.4% (2024), so crossing 10% in some year before 2100 is more likely than not."),
    ex("food_insecurity", "FRA", 50, "above", 0.02, "Own judgment", WB + "SN.ITK.MSFI.ZS",
       "Requires national-scale collapse."),
    ex("government_effectiveness", "FRA", 0.0, "below", 0.08, "Own judgment; base rate from WGI 1996-2025", URL_WGI,
       "Of 29 places scoring 1.0 or more in 1996, only Puerto Rico later fell below 0, about 3% per 29 years, or about 8% over 75 years."),
    ex("government_effectiveness", "FRA", -1.0, "below", 0.02, "Own judgment; base rate from WGI 1996-2025", URL_WGI,
       "No high-scoring country has fallen this far since 1996; it would take state breakdown."),
    ex("government_effectiveness", "WLD", 0.0, "below", 0.65, "Own judgment; WLD = population-weighted mean of country estimates", URL_WGI,
       "Holding 2025 scores fixed, population shifts alone move the weighted mean from 0.16 to -0.16 by 2100, so only relative gains in fast-growing countries prevent it."),
    ex("government_effectiveness", "WLD", -1.0, "below", 0.02, "Own judgment; WLD = population-weighted mean", URL_WGI,
       "Would need most of the world's people living in fragile states."),
    ex("readiness", "FRA", 0.40, "below", 0.06, "Own judgment; France 0.639 in 2024 (ND-GAIN)", URL_NDGAIN,
       "France would have to fall to today's median country; it fell only 0.02 from 2015 to 2024."),
    ex("readiness", "FRA", 0.25, "below", 0.02, "Own judgment", URL_NDGAIN,
       "Would take state and economic breakdown."),
    ex("readiness", "WLD", 0.40, "below", 0.50, "Own judgment; WLD = population-weighted mean (0.402 in 2024)", URL_NDGAIN,
       "Population shifts alone push the mean to 0.359 by 2100, roughly offset by the rise seen in many middle-income countries since 2015."),
    ex("readiness", "WLD", 0.25, "below", 0.03, "Own judgment; WLD = population-weighted mean", URL_NDGAIN,
       "Needs the typical person to live in a bottom-tenth country, which implies broad collapse."),
]

notes = [
    "Units: population projections are in millions; aging = people 65+ per 100 aged 15-64; fertility = births per woman; life expectancy in years; access/undernourishment/food insecurity in % of population; government_effectiveness = WGI estimate (about -2.5 to 2.5); readiness = ND-GAIN 0-1.",
    "Projections for population, aging, fertility and life_expectancy come from the official UN WPP 2024 files (medium-variant CSV and POP/07-1 workbook), read row by row; low/high are the 80% prediction intervals from the UN probabilistic files (95% intervals in each note). The probabilistic median TFR differs slightly from the deterministic medium variant (e.g. South Korea 2100: 1.30 medium vs 1.33 probabilistic median; world 1.84 in both).",
    "Exceedance for aging, fertility and life_expectancy is the probability that the 2100 value is beyond the threshold, derived from the UN quantiles (2.5/10/50/90/97.5%) by interpolating in normal-z space; the at-any-time probability is at least this. Where a country is already beyond the threshold today, the reasoning says so and the card should show the threshold as already crossed.",
    "The UN life-expectancy model has no catastrophes (war, pandemic, famine), so derived probabilities of the world falling below 65 are near zero. My judged overlay for the world dropping below 65 in any year before 2100, including catastrophes: about 0.03 (not included in exceedance to avoid mixing bases).",
    "Today's values (World Bank API, pulled 2026-11-24, last updated 2026-11-11): France OADR 36.8 (2025), TFR 1.61 (2024), LE 83.0, migrant share 13.8%, electricity 100%, safely managed water 99.7%, PoU <2.5 (shown 2.5), food insecurity 9.4%, WGI GE 1.21 (2025). World: OADR 16.0, TFR 2.19, LE 73.5, migrants 3.73%, electricity 91.9%, water 73.7%, PoU 8.1% (2024), food insecurity 28.0% (2024).",
    "Conflicts between sources: (1) World TFR 2024 is 2.19 in the World Bank aggregate but 2.25 in WPP 2024. (2) France TFR 2024 is 1.61 in the World Bank (national data) but 1.64 in WPP. (3) France population 2025 is 68.7 million in the World Bank but 66.7 million in WPP, probably a territorial-coverage difference (WPP lists some overseas departments separately; not verified). (4) World moderate-or-severe food insecurity 2024 is 28.0% in the World Bank series but 27.1% in SOFI 2026, which revised the series; SOFI 2026 gives 25.8% for 2025. (5) World PoU: SOFI 2026 gives 7.8% for 2025 (about 645 million) and 8.1% for 2024; the World Bank series stops at 2024 (8.1%).",
    "Water: 'safely managed' is a strict standard (on premises, available when needed, free of faecal and priority chemical contamination). Several functioning countries are below 50% on it (Mexico 43%, Indonesia 30.5%, Philippines 48.5%), and there is no estimate for China, Argentina, Kenya, Turkiye, Saudi Arabia or Australia. For the collapse line, consider 'at least basic drinking water' (SH.H2O.BASW.ZS; world 91.5%, Mexico 99.5%, DR Congo 35.7%, Ethiopia 55.6% in 2024) and keep 'safely managed' for the abundance line.",
    "Food: moderate-or-severe food insecurity (FIES) includes people who cut diet quality, which is not 'losing access'. Nigeria (76.5%), DR Congo (81.7%), Kenya (71.7%) and Ethiopia (60.1%) are already above 50% on it. For the collapse line consider severe food insecurity (SN.ITK.SVFI.ZS; world 10.1% in 2024, DR Congo 43.9%).",
    "Electricity: DR Congo (22.5%) is already under the 50% line, but it never had majority access, so 'losing access' does not apply; the card should show 'never reached' rather than 'collapsed'. The access measure is a yes/no connection and does not capture reliability (SDG 7.1.1 metadata).",
    "WGI estimates are relative (standard normal units, re-centred each year), so they cannot show a world-wide decline. I used a population-weighted mean for WLD. WGI also publishes 0-100 scores anchored to fixed reference points (GOV_WGI_GE.SC; France 77.1 in 2025), better for tracking absolute change. Standard error for France 2025 is 0.22, so a 90% band of about +/-0.36.",
    "ND-GAIN fills missing values by interpolation. Several rich countries' readiness fell sharply 2015-2024 (Norway 0.800 to 0.700, Sweden 0.756 to 0.681, UK 0.714 to 0.653); this may reflect index or indicator changes, so treat trends with caution.",
    "Composition projections for government_effectiveness and readiness (WLD 2100) hold each country's current score fixed and reweight by UN 2100 populations. They are not forecasts; they show that growth is concentrated where scores are lowest.",
    "migrant_share is context only: no thresholds and no exceedance. No official projection of migrant stock to 2100 exists (WPP projects net migration flows only). 2024 shares: Sweden 21.4%, Norway 18.2%, France 13.8%, world 3.73% (304 million, UN DESA).",
    "Immigration evidence: the OECD International Migration Outlook 2021 fiscal chapter could not be fetched (403), so its figures were left out of the explainer. Norway crime figures are from SSB 2017/2020; the 2023 de Soysa et al. Norway study is known only via Bra's 2025 review.",
    "Not found or not verified: any FAO or IFPRI undernourishment projection to 2100; a verified IFPRI IMPACT 2050 hunger number (search snippets only, left out); a JMP global % projection for safe water in 2030; projections of WGI or ND-GAIN readiness.",
    "FAO 2018 scenario projections use an older PoU series (2012 = 11%) than today's (2012 = 8.2% in the current World Bank/FAO series), so their 2030/2050 levels are not comparable with today's 7.8%.",
]

result = {"projections": gen["projections"], "thresholds": thresholds, "exceedance": gen["exceedance"] + judged, "notes": notes}
out_path.write_text(json.dumps(result, indent=2, ensure_ascii=False))
print(len(result["projections"]), len(result["thresholds"]), len(result["exceedance"]), len(notes))
