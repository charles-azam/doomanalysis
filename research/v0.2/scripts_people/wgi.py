import json
import sys
from pathlib import Path

raw = Path(sys.argv[1])
rows = json.loads((raw / "GOV_WGI_GE.EST.json").read_text())[1] + json.loads((raw / "GOV_WGI_GE.EST_1996_2009.json.hist").read_text())[1]
iso_by_name: dict[str, str] = {}
wb_pop = json.loads((raw / "SP.POP.TOTL.json").read_text())[1]
pop = {x["countryiso3code"]: x["value"] for x in wb_pop if x["date"] == "2024" and x["value"]}
names = {x["country"]["value"]: x["countryiso3code"] for x in wb_pop}
series: dict[str, dict[int, float]] = {}
for r in rows:
    if r["value"] is None:
        continue
    iso = r["countryiso3code"] or names.get(r["country"]["value"], "")
    if not iso:
        continue
    series.setdefault(iso, {})[int(r["date"])] = r["value"]
v25 = {k: v[2025] for k, v in series.items() if 2025 in v}
print("countries with 2025:", len(v25))
num = sum(v25[k] * pop[k] for k in v25 if k in pop)
den = sum(pop[k] for k in v25 if k in pop)
print("pop-weighted mean 2025:", round(num / den, 3), "pop covered bn", round(den / 1e9, 2))
for thr in (-1.0, -1.5, 0.0):
    below = [k for k in v25 if v25[k] < thr]
    print(f"below {thr}: {len(below)} countries; pop share {sum(pop.get(k, 0) for k in below) / den:.3f}")
# base rate: drop of >= 1.0 between any start year and +20 years
for gap in (10, 20, 25):
    n = 0
    drops = []
    for k, s in series.items():
        for y0 in sorted(s):
            y1 = y0 + gap
            if y1 in s:
                n += 1
                if s[y0] - s[y1] >= 1.0:
                    drops.append((k, y0, round(s[y0], 2), y1, round(s[y1], 2)))
    print(f"gap {gap}: pairs {n}, drops>=1.0: {len(drops)}; countries {sorted(set(d[0] for d in drops))}")
fra = series["FRA"]
print("FRA", {y: round(fra[y], 2) for y in sorted(fra)})
for k in ("VEN", "SYR", "YEM", "LBY", "USA", "SWE", "NOR"):
    s = series.get(k, {})
    print(k, {y: round(s[y], 2) for y in (1996, 2000, 2005, 2010, 2015, 2020, 2025) if y in s})
# countries that were above 1.0 in 1996 and their min afterwards
hi = [k for k, s in series.items() if s.get(1996, -9) >= 1.0]
fell = [(k, round(s[1996], 2), round(min(s.values()), 2)) for k, s in series.items() if k in hi and min(v for y, v in s.items() if y > 1996) < 0.0]
print("rich-governance (>=1.0 in 1996):", len(hi), "fell below 0 later:", fell)
