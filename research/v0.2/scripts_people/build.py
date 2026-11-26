import json
import math
import sys
from pathlib import Path
from statistics import NormalDist

BASE = Path(sys.argv[1])
OUT = Path(sys.argv[2])
SP = BASE / "scripts_people"
SPOT = ["WLD","FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS"]
ND = NormalDist()

ind = json.loads((SP / "wpp_ind_extract.json").read_text())
oadr = json.loads((SP / "wpp_oadr_extract.json").read_text())["Medium variant"]
ppp = json.loads((SP / "ppp_extract.json").read_text())
OADR_KEY = "Annual old-age dep. ratio [65+ / 15-64] (%)"

URL_CSV = "https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/CSV_FILES/WPP2024_Demographic_Indicators_Medium.csv.gz"
URL_F07 = "https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/EXCEL_FILES/2_Population/WPP2024_POP_F07_1_DEPENDENCY_RATIOS_BOTH_SEXES.xlsx"
PPP_BASE = "https://population.un.org/wpp/assets/Excel%20Files/2_Indicators%20(Probabilistic)/EXCEL_FILES/"
URL_PPP = {
    "population": PPP_BASE + "2_Population/UN_PPP2024_Output_PopTot.xlsx",
    "aging": PPP_BASE + "2_Population/UN_PPP2024_Output_Annual_OldAgeDepRatio.xlsx",
    "fertility": PPP_BASE + "3_Fertility/UN_PPP2024_Input_TFR.xlsx",
    "life_expectancy": PPP_BASE + "4_Mortality/UN_PPP2024_Output_e0.xlsx",
}
PPP_FILE = {
    "population": "UN_PPP2024_Output_PopTot.xlsx",
    "aging": "UN_PPP2024_Output_Annual_OldAgeDepRatio.xlsx",
    "fertility": "UN_PPP2024_Input_TFR.xlsx",
    "life_expectancy": "UN_PPP2024_Output_e0.xlsx",
}
QUANT = [("Lower 95", 0.025), ("Lower 80", 0.10), ("Median", 0.50), ("Upper 80", 0.90), ("Upper 95", 0.975)]


def q(factor: str, entity: str, year: str) -> list[tuple[float, float]]:
    d = ppp[PPP_FILE[factor]]
    return [(p, float(d[name][entity][year])) for name, p in QUANT]


def p_below(quants: list[tuple[float, float]], t: float) -> float:
    """Probability that the value is below t, interpolating linearly in normal-z space between published quantiles."""
    pts = [(ND.inv_cdf(p), v) for p, v in quants]
    if t <= pts[0][1]:
        (z0, v0), (z1, v1) = pts[0], pts[1]
    elif t >= pts[-1][1]:
        (z0, v0), (z1, v1) = pts[-2], pts[-1]
    else:
        for (z0, v0), (z1, v1) in zip(pts, pts[1:]):
            if v0 <= t <= v1:
                break
    z = z0 + (t - v0) * (z1 - z0) / (v1 - v0)
    return ND.cdf(z)


def fmt_p(p: float) -> float:
    return round(min(max(p, 0.001), 0.999), 3)


projections: list[dict[str, object]] = []
for e in SPOT:
    name = ind[e]["2025"]["Location"]
    for year in ("2025", "2100"):
        qs = q(factor="population", entity=e, year=year)
        projections.append({
            "factorId": "population", "entity": e,
            "value": round(float(ind[e][year]["TPopulation1July"]) / 1000, 3),
            "low": round(qs[1][1] / 1000, 3), "high": round(qs[3][1] / 1000, 3),
            "year": int(year), "scenario": "UN WPP 2024 medium variant; low/high = 80% prediction interval (probabilistic projections)",
            "source": "UN DESA Population Division, World Population Prospects 2024",
            "url": URL_CSV,
            "note": f"{name}. Unit: million people (1 July). 95% interval {qs[0][1] / 1000:.3f}–{qs[4][1] / 1000:.3f}. Intervals from {URL_PPP['population']}",
        })
    qa = q(factor="aging", entity=e, year="2100")
    projections.append({
        "factorId": "aging", "entity": e, "value": round(oadr[e]["2100"][OADR_KEY], 1),
        "low": round(qa[1][1], 1), "high": round(qa[3][1], 1), "year": 2100,
        "scenario": "UN WPP 2024 medium variant; low/high = 80% prediction interval",
        "source": "UN DESA Population Division, World Population Prospects 2024 (file POP/07-1 and probabilistic OADR file)",
        "url": URL_F07,
        "note": f"{name}. Old-age dependency ratio, people 65+ per 100 aged 15-64. 2025: {oadr[e]['2025'][OADR_KEY]:.1f}; 2050: {oadr[e]['2050'][OADR_KEY]:.1f}. 95% interval 2100: {qa[0][1]:.1f}–{qa[4][1]:.1f}. Intervals from {URL_PPP['aging']}",
    })
    qf = q(factor="fertility", entity=e, year="2100")
    projections.append({
        "factorId": "fertility", "entity": e, "value": round(float(ind[e]["2100"]["TFR"]), 2),
        "low": round(qf[1][1], 2), "high": round(qf[3][1], 2), "year": 2100,
        "scenario": "UN WPP 2024 medium variant; low/high = 80% prediction interval",
        "source": "UN DESA Population Division, World Population Prospects 2024",
        "url": URL_CSV,
        "note": f"{name}. Births per woman. WPP estimate for 2024: {float(ind[e]['2024']['TFR']):.2f}. Probabilistic median 2100: {qf[2][1]:.2f} (differs slightly from the medium variant). 95% interval: {qf[0][1]:.2f}–{qf[4][1]:.2f}. Intervals from {URL_PPP['fertility']}",
    })
    ql = q(factor="life_expectancy", entity=e, year="2100")
    projections.append({
        "factorId": "life_expectancy", "entity": e, "value": round(float(ind[e]["2100"]["LEx"]), 1),
        "low": round(ql[1][1], 1), "high": round(ql[3][1], 1), "year": 2100,
        "scenario": "UN WPP 2024 medium variant; low/high = 80% prediction interval",
        "source": "UN DESA Population Division, World Population Prospects 2024",
        "url": URL_CSV,
        "note": f"{name}. Life expectancy at birth, both sexes (years). WPP estimate for 2024: {float(ind[e]['2024']['LEx']):.1f}. 95% interval 2100: {ql[0][1]:.1f}–{ql[4][1]:.1f}. The model has no catastrophes (war, pandemic, famine). Intervals from {URL_PPP['life_expectancy']}",
    })

URL_SOFI = "https://www.fao.org/newsroom/detail/un-report--global-hunger-levels-ease-for-third-consecutive-year-as-regional-disparities-persist/en"
URL_FOFA = "https://openknowledge.fao.org/3/I8429EN/i8429en.pdf"
URL_SDG7 = "https://www.seforall.org/system/files/2026-07/SEforALL%20Tracking%20SDG7%20-%20The%20Energy%20Progress%20Report%202026_Executive%20Version_22Jul2026-2.pdf"
URL_WGI = "https://api.worldbank.org/v2/country/all/indicator/GOV_WGI_GE.EST?source=3&format=json&date=2025"
URL_NDGAIN = "https://gain.nd.edu/our-work/country-index/download-data/"
world2030 = 8569.124911  # WPP 2024 medium, world population 2030, million
projections += [
    {"factorId": "undernourishment", "entity": "WLD", "value": round(515 / world2030 * 100, 2), "low": round(510 / world2030 * 100, 2), "high": round(520 / world2030 * 100, 2), "year": 2030,
     "scenario": "FAO SOFI 2026 projection to 2030 (furthest year published in SOFI)", "source": "FAO, IFAD, UNICEF, WFP, WHO, The State of Food Security and Nutrition in the World 2026 (FAO news release, 21 Jul 2026)", "url": URL_SOFI,
     "note": "Published as 510-520 million people (503 million in the pre-Middle-East-conflict scenario); converted to % using UN WPP 2024 world population for 2030 (8.569 bn). El Nino 2026-27 and other weather extremes not included. 2025 estimate: 7.8% (about 645 million)."},
    {"factorId": "undernourishment", "entity": "WLD", "value": 6.7, "low": 3.4, "high": 11.8, "year": 2030,
     "scenario": "FAO 2018 Global Perspectives (GAPS model): business as usual; low = Towards Sustainability, high = Stratified Societies", "source": "FAO, The future of food and agriculture: Alternative pathways to 2050 (2018), Table 4.6", "url": URL_FOFA,
     "note": "Scenario range, not a probability interval. Built on an older FAO series in which 2012 PoU was 11%; the current FAO/World Bank series puts 2012 at 8.2%, so levels are not directly comparable with today's 7.8%."},
    {"factorId": "undernourishment", "entity": "WLD", "value": 7.6, "low": 3.5, "high": 12.4, "year": 2050,
     "scenario": "FAO 2018 Global Perspectives (GAPS model): business as usual; low = Towards Sustainability, high = Stratified Societies", "source": "FAO, The future of food and agriculture: Alternative pathways to 2050 (2018), Table 4.6", "url": URL_FOFA,
     "note": "Furthest year published. Numbers: BAU 737 million, TSS 344 million, SSS 1,208 million undernourished in 2050 (Table 4.7). Older baseline (2012 = 11%); see 2030 note. No published FAO/IFPRI PoU projection to 2100 found."},
    {"factorId": "electricity_access", "entity": "WLD", "value": round((1 - 644 / world2030) * 100, 1), "low": None, "high": None, "year": 2030,
     "scenario": "SEforALL linear projection on current trends (Tracking SDG7 2026)", "source": "SEforALL, Tracking SDG7: The Energy Progress Report 2026, Deep Dive Perspective (executive version, July 2026)", "url": URL_SDG7,
     "note": "Published as about 644 million people without access in 2030 (about 92% of them in Africa); converted to % with UN WPP 2024 world population 2030. 2024: 655 million without access, almost 92% access. No published projection to 2100 found."},
]

# composition-only projections (derived)
projections += [
    {"factorId": "government_effectiveness", "entity": "WLD", "value": -0.16, "low": None, "high": None, "year": 2100,
     "scenario": "Derived, composition only: each country's 2025 WGI score held fixed, weighted by UN WPP 2024 medium-variant 2100 population", "source": "World Bank WGI 2025 update + UN WPP 2024 (own calculation)", "url": URL_WGI,
     "note": "Not a forecast of governance. Shows that population growth is concentrated in low-scoring countries. Same method gives 0.16 for 2025. Share of world population in countries below -1.0: 7.2% (2025 weights) vs 14.3% (2100 weights). No published WGI projection exists."},
    {"factorId": "readiness", "entity": "WLD", "value": 0.359, "low": None, "high": None, "year": 2100,
     "scenario": "Derived, composition only: each country's 2024 ND-GAIN readiness held fixed, weighted by UN WPP 2024 medium-variant 2100 population", "source": "ND-GAIN Country Index 2026 release + UN WPP 2024 (own calculation)", "url": URL_NDGAIN,
     "note": "Not a forecast. Same method gives 0.402 with 2025 weights. Share of world population in countries below 0.25: 8.4% (2025 weights) vs 16.2% (2100 weights). No published readiness projection exists."},
]

THRESH = {
    "aging": [(50.0, "above"), (100.0, "above")],
    "fertility": [(2.1, "below"), (1.4, "below")],
    "life_expectancy": [(65.0, "below"), (50.0, "below")],
}
today = {
    "aging": {e: oadr[e]["2025"][OADR_KEY] for e in SPOT},
    "fertility": {e: float(ind[e]["2024"]["TFR"]) for e in SPOT},
    "life_expectancy": {e: float(ind[e]["2024"]["LEx"]) for e in SPOT},
}
exceedance: list[dict[str, object]] = []
for factor, ths in THRESH.items():
    for e in SPOT:
        quants = q(factor=factor, entity=e, year="2100")
        for t, direction in ths:
            pb = p_below(quants=quants, t=t)
            p = pb if direction == "below" else 1 - pb
            cur = today[factor][e]
            already = (cur < t) if direction == "below" else (cur > t)
            outside = t < quants[0][1] or t > quants[-1][1]
            reason = (f"P(2100 value {direction} {t:g}) from UN WPP 2024 probabilistic quantiles (2.5/10/50/90/97.5%), interpolated in normal-z space"
                      + ("; threshold outside the 95% interval, so extrapolated" if outside else "")
                      + (f"; already {direction} today ({cur:.2f}), so crossing by 2100 has happened" if already else "; at-any-time probability is at least this")
                      + ("; model excludes catastrophes" if factor == "life_expectancy" else "")
                      + ("; true value under 0.1%, shown as 0.001" if p < 0.001 else "")
                      + ("; true value over 99.9%, shown as 0.999" if p > 0.999 else "") + ".")
            exceedance.append({"factorId": factor, "entity": e, "threshold": t, "direction": direction, "year": 2100,
                               "probability": fmt_p(p), "basis": "derived",
                               "source": "UN DESA Population Division, WPP 2024 probabilistic projections", "url": URL_PPP[factor], "reasoning": reason})

OUT.write_text(json.dumps({"projections": projections, "exceedance": exceedance}, indent=1, ensure_ascii=False))
for x in exceedance:
    if x["entity"] in ("WLD", "FRA", "KOR", "NGA", "JPN", "SWE", "NOR"):
        print(x["factorId"], x["entity"], x["threshold"], x["direction"], x["probability"])
print(len(projections), len(exceedance))
