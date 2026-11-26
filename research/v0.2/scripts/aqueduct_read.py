import sys
from openpyxl import load_workbook

workbook = load_workbook(filename=sys.argv[1], read_only=True)
readme = workbook["Read Me"]
for row in readme.iter_rows(values_only=True):
    text = " | ".join(str(cell) for cell in row if cell is not None)
    if text:
        print("README:", text[:400])
wanted = {"FRA", "USA", "CHN", "IND", "NGA", "BRA", "BGD", "EGY", "SAU", "ISR", "ESP", "MEX", "PAK", "ZAF", "QAT"}
baseline: dict[str, tuple[float, str]] = {}
extreme_baseline: list[str] = []
for row in workbook["country_baseline"].iter_rows(min_row=2, values_only=True):
    gid, name, indicator, weight, score, ranked, cat, label = row[:8]
    if indicator == "bws" and weight == "Tot":
        baseline[gid] = (score, label)
        if cat == 4:
            extreme_baseline.append(gid)
print("baseline countries with bws Tot:", len(baseline), "extremely high:", len(extreme_baseline))
print("extreme list:", sorted(extreme_baseline))
future: dict[tuple[str, int, str], tuple[float, str]] = {}
extreme_2050_bau: list[str] = []
for row in workbook["country_future"].iter_rows(min_row=2, values_only=True):
    gid, name, year, scenario, indicator, weight, score, ranked, cat, label = row[:10]
    if indicator == "bws" and weight == "Tot":
        future[(gid, year, scenario)] = (score, label)
        if year == 2050 and scenario == "bau" and cat == 4:
            extreme_2050_bau.append(gid)
print("extremely high 2050 bau:", len(extreme_2050_bau))
for gid in sorted(wanted):
    print(gid, "baseline", baseline.get(gid), "2050 opt", future.get((gid, 2050, "opt")), "2050 bau", future.get((gid, 2050, "bau")), "2050 pes", future.get((gid, 2050, "pes")), "2080 bau", future.get((gid, 2080, "bau")))
