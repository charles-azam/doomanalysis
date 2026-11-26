import csv
import sys

path = sys.argv[1]
wanted = ["NOR", "FIN", "CHE", "FRA", "USA", "CHN", "BRA", "IND", "EGY", "BGD", "NGA", "TCD", "SOM", "NER", "ERI", "SSD"]
with open(path, newline="") as handle:
    rows = list(csv.DictReader(handle))
values: list[tuple[float, str, str]] = []
for row in rows:
    raw = row["2024"] or row["2023"]
    if raw and raw != "":
        values.append((float(raw), row["ISO3"], row["Name"]))
values.sort()
print("countries with 2024 value:", len(values))
print("lowest 5:", [(round(v, 3), iso) for v, iso, _ in values[:5]])
print("highest 5:", [(round(v, 3), iso) for v, iso, _ in values[-5:]])
ranks = {iso: index + 1 for index, (_, iso, _) in enumerate(values)}
for row in rows:
    if row["ISO3"] in wanted:
        print(row["ISO3"], row["Name"], "1995:", row["1995"][:6], "2024:", row["2024"][:6], "rank_low_to_high:", ranks.get(row["ISO3"]))
