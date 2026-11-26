import re
import sys

path: str = sys.argv[1]
rows: list[tuple[str, str, float, float, float, float, str]] = []
current: dict[str, str] = {}
section: str = ""
name: str = ""
for line in open(path, encoding="utf-8"):
    m = re.match(r"^  ([a-z0-9_.\-]+):\s*$", line)
    if m:
        if name and current:
            rows.append((current.get("release_date", ""), name, float(current.get("p50_horizon_length.estimate", "0")) / 60, float(current.get("p50_horizon_length.ci_low", "0")) / 60, float(current.get("p50_horizon_length.ci_high", "0")) / 60, float(current.get("p80_horizon_length.estimate", "0")) / 60, current.get("is_sota", "")))
        name = m.group(1)
        current = {}
        continue
    s = re.match(r"^\s{6}(p50_horizon_length|p80_horizon_length|average_score):", line)
    if s:
        section = s.group(1)
        continue
    kv = re.match(r"^\s+(estimate|ci_low|ci_high):\s*([0-9.]+)", line)
    if kv and name:
        current[f"{section}.{kv.group(1)}"] = kv.group(2)
    rd = re.match(r"^\s+release_date:\s*(\S+)", line)
    if rd:
        current["release_date"] = rd.group(1)
    so = re.match(r"^\s+is_sota:\s*(\S+)", line)
    if so:
        current["is_sota"] = so.group(1)
if name and current:
    rows.append((current.get("release_date", ""), name, float(current.get("p50_horizon_length.estimate", "0")) / 60, float(current.get("p50_horizon_length.ci_low", "0")) / 60, float(current.get("p50_horizon_length.ci_high", "0")) / 60, float(current.get("p80_horizon_length.estimate", "0")) / 60, current.get("is_sota", "")))
for r in sorted(rows):
    print(f"{r[0]}  {r[1]:45s} p50={r[2]:.2f}h [{r[3]:.2f}-{r[4]:.2f}] p80={r[5]:.2f}h sota={r[6]}")
