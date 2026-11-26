import json
import math
import sys
from datetime import datetime, timezone


def load(path: str) -> dict[str, object]:
    with open(path, encoding="utf-8") as handle:
        return json.load(handle)


def x_of(value: float, lo: float, hi: float, zero: float | None) -> float:
    if zero is None:
        return (value - lo) / (hi - lo)
    ratio = (hi - zero) / (lo - zero)
    return math.log((value - zero) / (lo - zero)) / math.log(ratio)


def cdf(value: float, vals: list[float], lo: float, hi: float, zero: float | None) -> float:
    if zero is not None and value <= zero:
        return 0.0
    x = x_of(value=value, lo=lo, hi=hi, zero=zero)
    if x <= 0:
        return vals[0]
    if x >= 1:
        return vals[-1]
    pos = x * (len(vals) - 1)
    i = int(pos)
    return vals[i] + (vals[i + 1] - vals[i]) * (pos - i)


def year_to_ts(year: float) -> float:
    whole = int(year)
    start = datetime(whole, 1, 1, tzinfo=timezone.utc).timestamp()
    end = datetime(whole + 1, 1, 1, tzinfo=timezone.utc).timestamp()
    return start + (year - whole) * (end - start)


agi = load(path=sys.argv[1])
gap = load(path=sys.argv[2])
agi_vals: list[float] = agi["forecast_values"]  # type: ignore[assignment]
gap_vals: list[float] = gap["forecast_values"]  # type: ignore[assignment]
a_s: dict[str, float] = agi["scaling"]  # type: ignore[assignment]
g_s: dict[str, float] = gap["scaling"]  # type: ignore[assignment]

now = 2026 + 327 / 365
cdf_now = cdf(value=year_to_ts(year=now), vals=agi_vals, lo=a_s["range_min"], hi=a_s["range_max"], zero=a_s["zero_point"])
print("weak-AGI CDF mass before today:", round(cdf_now, 4))

step = 1 / 24
mass_points: list[tuple[float, float]] = [(now, cdf_now)]
prev = cdf_now
y = now
while y < 2199.9:
    nxt = y + step
    c = cdf(value=year_to_ts(year=nxt), vals=agi_vals, lo=a_s["range_min"], hi=a_s["range_max"], zero=a_s["zero_point"])
    mass_points.append((y + step / 2, c - prev))
    prev = c
    y = nxt


def gap_cdf(months: float) -> float:
    if months <= 0:
        return gap_vals[0]
    return cdf(value=months, vals=gap_vals, lo=g_s["range_min"], hi=g_s["range_max"], zero=g_s["zero_point"])


for t in [2028, 2030, 2035, 2040, 2050, 2075, 2100]:
    p = sum(m * gap_cdf(months=(t - w) * 12) for w, m in mass_points if w < t)
    print(t, round(p, 3))

grid = [now + k / 12 for k in range(1, 12 * 74)]
for target in [0.25, 0.5, 0.75]:
    for t in grid:
        p = sum(m * gap_cdf(months=(t - w) * 12) for w, m in mass_points if w < t)
        if p >= target:
            print("quantile", target, "year", round(t, 2))
            break
