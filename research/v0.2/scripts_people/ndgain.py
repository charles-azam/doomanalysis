import csv
import json
import sys
from pathlib import Path

SPOT = ["FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS"]

rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8")))
years = [k for k in rows[0].keys() if k.isdigit()]
print("years", years[0], years[-1], "countries", len(rows))
latest_year = max(y for y in years if any(r[y] not in ("", "NA") for r in rows))
print("latest year with data", latest_year)
by_iso = {r["ISO3"]: r for r in rows}
for iso in SPOT:
    r = by_iso.get(iso)
    print(iso, {y: (round(float(r[y]), 3) if r and r[y] not in ("", "NA") else None) for y in ("2015", "2020", "2023", "2024")})
vals = sorted(float(r[latest_year]) for r in rows if r[latest_year] not in ("", "NA"))
n = len(vals)
print("n", n, "min", round(vals[0], 3), "p25", round(vals[n // 4], 3), "median", round(vals[n // 2], 3), "p75", round(vals[3 * n // 4], 3), "max", round(vals[-1], 3))
# population-weighted world mean using WB population 2024
wb = json.loads(Path(sys.argv[2]).read_text())[1]
pop = {x["countryiso3code"]: x["value"] for x in wb if x["date"] == "2024" and x["value"]}
num = sum(float(r[latest_year]) * pop[r["ISO3"]] for r in rows if r[latest_year] not in ("", "NA") and r["ISO3"] in pop)
den = sum(pop[r["ISO3"]] for r in rows if r[latest_year] not in ("", "NA") and r["ISO3"] in pop)
print("pop-weighted mean", round(num / den, 4), "pop covered (bn)", round(den / 1e9, 2))
below = [r["ISO3"] for r in rows if r[latest_year] not in ("", "NA") and float(r[latest_year]) < 0.3]
print("countries below 0.30:", len(below), below)
share = sum(pop.get(i, 0) for i in below) / den
print("pop share below 0.30", round(share, 3))
