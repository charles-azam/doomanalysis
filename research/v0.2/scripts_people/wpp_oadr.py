import json
import sys

import openpyxl

SPOT = ["FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS"]

wb = openpyxl.load_workbook(filename=sys.argv[1], read_only=True)
print(wb.sheetnames)
out: dict[str, dict[str, object]] = {}
for name in wb.sheetnames:
    ws = wb[name]
    ws.reset_dimensions()
    header: list[object] | None = None
    for i, row in enumerate(ws.iter_rows(values_only=True)):
        if header is None:
            if row and any(c == "ISO3 Alpha-code" for c in row):
                header = list(row)
                print(name, "header row", i, header)
            continue
        rec = dict(zip(header, row))
        iso = rec.get("ISO3 Alpha-code")
        loc = rec.get("Region, subregion, country or area *")
        key = iso if iso in SPOT else ("WLD" if loc == "World" else None)
        year = rec.get("Year")
        if key is None or year not in (2025, 2050, 2100) or name not in ("Estimates", "Medium variant", "High variant", "Low variant"):
            continue
        out.setdefault(name, {}).setdefault(key, {})[str(year)] = {k: v for k, v in rec.items() if k is not None and ("Old" in str(k) or "65" in str(k) or k in ("Variant",))}
json.dump(out, open(sys.argv[2], "w"), indent=1, default=str)
