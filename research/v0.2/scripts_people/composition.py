import csv
import json
import sys
from pathlib import Path

base = Path(sys.argv[1])
pops = json.loads((base / "scripts_people/wpp_pops.json").read_text())
wgi_rows = json.loads((base / "raw/dl_people_wb/GOV_WGI_GE.EST.json").read_text())[1]
ge = {r["countryiso3code"]: r["value"] for r in wgi_rows if r["date"] == "2025" and r["value"] is not None and r["countryiso3code"]}
names = {r["countryiso3code"]: r["country"]["value"] for r in wgi_rows if r["countryiso3code"]}
rd_rows = list(csv.DictReader(open(base / "raw/dl_ndgain/ex/resources 2/readiness/readiness.csv", encoding="utf-8")))
rd = {r["ISO3"]: float(r["2024"]) for r in rd_rows if r["2024"] not in ("", "NA")}


def weighted(scores: dict[str, float], year: str) -> tuple[float, float]:
    keys = [k for k in scores if k in pops and year in pops[k]]
    tot = sum(pops[k][year] for k in keys)
    return sum(scores[k] * pops[k][year] for k in keys) / tot, tot


def share_below(scores: dict[str, float], year: str, thr: float) -> float:
    keys = [k for k in scores if k in pops and year in pops[k]]
    tot = sum(pops[k][year] for k in keys)
    return sum(pops[k][year] for k in keys if scores[k] < thr) / tot


for label, scores, thrs in (("GE", ge, (0.0, -1.0)), ("readiness", rd, (0.40, 0.25))):
    for y in ("2025", "2100"):
        m, tot = weighted(scores=scores, year=y)
        print(label, y, "pop-weighted mean", round(m, 3), "pop covered (bn)", round(tot / 1e6, 2), {t: round(share_below(scores=scores, year=y, thr=t), 3) for t in thrs})
print("GE below -1.0 in 2025:", sorted((round(v, 2), names.get(k, k)) for k, v in ge.items() if v < -1.0))
vals = sorted(rd.values())
n = len(vals)
print("readiness p10", round(vals[n // 10], 3), "p25", round(vals[n // 4], 3), "median", round(vals[n // 2], 3))
print("readiness below 0.25:", sorted((round(v, 3), k) for k, v in rd.items() if v < 0.25))
gev = sorted(ge.values())
print("GE unweighted mean", round(sum(gev) / len(gev), 3), "median", round(gev[len(gev) // 2], 3))
