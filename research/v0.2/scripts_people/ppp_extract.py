import json
import sys
from pathlib import Path

import openpyxl

SPOT = ["FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS"]
YEARS = [2025, 2050, 2100]
SHEETS = ["Lower 95", "Lower 80", "Median", "Upper 80", "Upper 95"]


def key_for(rec: dict[object, object]) -> str | None:
    iso = rec.get("ISO3 Alpha-code")
    loc = rec.get("Region, subregion, country or area *")
    if iso in SPOT:
        return str(iso)
    if loc == "World":
        return "WLD"
    return None


def extract(path: Path) -> dict[str, dict[str, dict[str, object]]]:
    wb = openpyxl.load_workbook(filename=path, read_only=True)
    out: dict[str, dict[str, dict[str, object]]] = {}
    for name in SHEETS:
        if name not in wb.sheetnames:
            continue
        ws = wb[name]
        ws.reset_dimensions()
        header: list[object] | None = None
        for row in ws.iter_rows(values_only=True):
            if header is None:
                if row and "ISO3 Alpha-code" in row:
                    header = list(row)
                    print(path.name, name, "header tail", header[10:16], "len", len(header))
                continue
            rec = dict(zip(header, row))
            k = key_for(rec=rec)
            if k is None:
                continue
            if "Year" in rec:
                if rec["Year"] in YEARS and rec.get("Sex") == "Total":
                    out.setdefault(name, {}).setdefault(k, {})[str(rec["Year"])] = rec["15-64"]
            else:
                for y in YEARS:
                    if y in rec:
                        out.setdefault(name, {}).setdefault(k, {})[str(y)] = rec[y]
                    elif str(y) in rec:
                        out.setdefault(name, {}).setdefault(k, {})[str(y)] = rec[str(y)]
    return out


result = {p.name: extract(path=p) for p in sorted(Path(sys.argv[1]).glob("*.xlsx"))}
Path(sys.argv[2]).write_text(json.dumps(result, indent=1, default=str))
