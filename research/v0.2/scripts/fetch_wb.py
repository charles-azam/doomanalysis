import json
import subprocess
from pathlib import Path

OUT = Path("/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad/dl_wb")
OUT.mkdir(exist_ok=True)
ENTITIES = ["FRA", "DEU", "GBR", "SWE", "NOR", "USA", "JPN", "CHN", "IND", "BRA", "NGA", "WLD"]
WDI = [
    "EG.IMP.CONS.ZS", "GC.XPN.INTP.RV.ZS", "SH.XPD.CHEX.GD.ZS", "MS.MIL.XPND.GD.ZS", "NE.CON.PRVT.ZS",
    "NY.GDP.PCAP.PP.KD", "NY.GDP.PCAP.PP.CD", "GC.REV.XGRT.GD.ZS", "GC.XPN.INTP.ZS", "SH.XPD.OOPC.CH.ZS",
    "GC.DOD.TOTL.GD.ZS", "SH.XPD.GHED.GD.ZS", "NY.GNP.PCAP.PP.CD", "NE.CON.GOVT.ZS",
]
ICP_SERIES = ["1000000", "1101000", "1101100", "9100000", "9080000", "9060000", "1400000", "1300000", "1111000", "1107000", "9270000", "9020000"]


def get(url: str) -> object:
    return json.loads(subprocess.run(["curl", "-s", "-m", "90", url], capture_output=True, check=True).stdout)



def fetch_wdi() -> dict[str, dict[str, dict[str, float | None]]]:
    result: dict[str, dict[str, dict[str, float | None]]] = {}
    for indicator in WDI:
        url = f"https://api.worldbank.org/v2/country/{';'.join(ENTITIES)}/indicator/{indicator}?format=json&date=2010:2025&per_page=1000"
        payload = get(url=url)
        rows = payload[1] or []
        table: dict[str, dict[str, float | None]] = {}
        for row in rows:
            table.setdefault(row["countryiso3code"], {})[row["date"]] = row["value"]
        result[indicator] = table
    return result


def fetch_icp() -> dict[str, dict[str, float]]:
    url = (
        f"https://api.worldbank.org/v2/sources/90/country/{';'.join(ENTITIES)}/series/{';'.join(ICP_SERIES)}"
        f"/Classification/ZS/time/YR2021?format=json&per_page=2000"
    )
    payload = get(url=url)
    result: dict[str, dict[str, float]] = {}
    for row in payload["source"]["data"]:
        variables = {v["concept"]: v for v in row["variable"]}
        result.setdefault(variables["Series"]["value"], {})[variables["Country"]["id"]] = row["value"]
    return result


(OUT / "wdi.json").write_text(json.dumps(fetch_wdi(), indent=1))
(OUT / "icp2021_share_gdp.json").write_text(json.dumps(fetch_icp(), indent=1))
print("ok")
