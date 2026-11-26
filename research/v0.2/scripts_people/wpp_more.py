import csv
import gzip
import json
import sys
from pathlib import Path

pops: dict[str, dict[str, float]] = {}
world: dict[str, dict[str, str]] = {}
with gzip.open(sys.argv[1], mode="rt", encoding="utf-8-sig") as fh:
    for row in csv.DictReader(fh):
        if row["Location"] == "World" and row["Time"] in ("1950", "1960", "1990", "1995", "2019", "2020", "2021", "2023", "2024", "2030", "2050", "2080", "2085", "2100"):
            world[row["Time"]] = {k: row[k] for k in ("TPopulation1July", "TFR", "LEx", "MedianAgePop")}
        if row["ISO3_code"] and row["LocTypeName"] == "Country/Area" and row["Time"] in ("2025", "2100"):
            pops.setdefault(row["ISO3_code"], {})[row["Time"]] = float(row["TPopulation1July"])
for y in sorted(world):
    print(y, world[y])
Path(sys.argv[2]).write_text(json.dumps(pops))
print("countries", len(pops))
