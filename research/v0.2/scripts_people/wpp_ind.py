import csv
import gzip
import io
import json
import sys

SPOT = ["FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS"]
YEARS = {"2024", "2025", "2050", "2100"}
FIELDS = ["TPopulation1July", "TFR", "LEx", "MedianAgePop", "NetMigrations"]

out: dict[str, dict[str, dict[str, str]]] = {}
with gzip.open(sys.argv[1], mode="rt", encoding="utf-8-sig") as fh:
    reader = csv.DictReader(fh)
    for row in reader:
        key = row["ISO3_code"] if row["ISO3_code"] in SPOT else ("WLD" if row["Location"] == "World" else None)
        if key is None or row["Time"] not in YEARS:
            continue
        out.setdefault(key, {})[row["Time"]] = {f: row[f] for f in FIELDS} | {"Variant": row["Variant"], "Location": row["Location"], "LocID": row["LocID"]}
json.dump(out, open(sys.argv[2], "w"), indent=1)
for k in ["WLD"] + SPOT:
    v = out[k]
    print(k, v["2025"]["Location"], v["2025"]["Variant"], "| pop2025", v["2025"]["TPopulation1July"], "pop2100", v["2100"]["TPopulation1July"], "| TFR2024", v["2024"]["TFR"], "TFR2100", v["2100"]["TFR"], "| LEx2024", v["2024"]["LEx"], "LEx2100", v["2100"]["LEx"])
