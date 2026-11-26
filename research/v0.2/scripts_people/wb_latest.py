import json
import sys
from pathlib import Path

RAW = Path(sys.argv[1])
SPOT = ["FRA","DEU","GBR","ITA","ESP","POL","SWE","NOR","USA","CAN","MEX","BRA","ARG","CHN","JPN","KOR","IND","PAK","BGD","IDN","PHL","VNM","NGA","ETH","COD","EGY","ZAF","KEN","TUR","IRN","SAU","RUS","AUS","WLD"]

def latest(path: Path) -> dict[str, tuple[str, float]]:
    data = json.loads(path.read_text())
    meta = data[0]
    out: dict[str, tuple[str, float]] = {}
    for row in data[1]:
        iso = row["countryiso3code"]
        if row["value"] is None or not iso:
            continue
        if iso not in out or row["date"] > out[iso][0]:
            out[iso] = (row["date"], row["value"])
    print(path.stem, "lastupdated", meta.get("lastupdated"), "n_countries", len(out))
    return out

for f in sorted(RAW.glob("*.json")):
    d = latest(path=f)
    print("  " + "; ".join(f"{c}:{d[c][1]:.3g}({d[c][0]})" if c in d else f"{c}:NA" for c in SPOT))
