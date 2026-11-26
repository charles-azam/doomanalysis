import json
import math
import sys
from datetime import datetime, timezone


def load(path: str) -> dict[str, object]:
    with open(path, encoding="utf-8") as handle:
        return json.load(handle)


def value_at(x: float, lo: float, hi: float, zero: float | None) -> float:
    if zero is None:
        return lo + x * (hi - lo)
    ratio = (hi - zero) / (lo - zero)
    return zero + (lo - zero) * ratio**x


def x_of(value: float, lo: float, hi: float, zero: float | None) -> float:
    if zero is None:
        return (value - lo) / (hi - lo)
    ratio = (hi - zero) / (lo - zero)
    return math.log((value - zero) / (lo - zero)) / math.log(ratio)


def cdf(value: float, vals: list[float], lo: float, hi: float, zero: float | None) -> float:
    if zero is not None and value <= zero:
        return vals[0] if value > zero else 0.0
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


def ts_to_year(ts: float) -> float:
    dt = datetime.fromtimestamp(ts, tz=timezone.utc)
    start = datetime(dt.year, 1, 1, tzinfo=timezone.utc).timestamp()
    end = datetime(dt.year + 1, 1, 1, tzinfo=timezone.utc).timestamp()
    return dt.year + (ts - start) / (end - start)


agi = load(path=sys.argv[1])
gap = load(path=sys.argv[2])
agi_vals: list[float] = agi["forecast_values"]  # type: ignore[assignment]
gap_vals: list[float] = gap["forecast_values"]  # type: ignore[assignment]
a_lo, a_hi, a_z = agi["scaling"]["range_min"], agi["scaling"]["range_max"], agi["scaling"]["zero_point"]  # type: ignore[index]
g_lo, g_hi, g_z = gap["scaling"]["range_min"], gap["scaling"]["range_max"], gap["scaling"]["zero_point"]  # type: ignore[index]

print("weak AGI CDF by year:")
for y in [2027, 2028, 2030, 2035, 2040, 2050, 2075, 2100]:
    print(y, round(cdf(value=year_to_ts(year=y), vals=agi_vals, lo=a_lo, hi=a_hi, zero=a_z), 3))
print("gap CDF:", {m: round(cdf(value=m, vals=gap_vals, lo=g_lo, hi=g_hi, zero=g_z), 3) for m in [1, 6, 12, 24, 60, 120, 300, 600]})

# Discretise weak-AGI arrival on a monthly grid from 2020 to 2200; mass beyond range_max treated as "never/after 2200".
now_year = 2026 + 328 / 365
grid_start = 2020.0
step = 1 / 12
targets = [2027, 2028, 2030, 2035, 2040, 2050, 2075, 2100]
results: dict[int, float] = {t: 0.0 for t in targets}
prev_cdf = cdf(value=year_to_ts(year=grid_start), vals=agi_vals, lo=a_lo, hi=a_hi, zero=a_z)
# mass below grid start (open lower bound) is assigned to grid_start
mass_points: list[tuple[float, float]] = [(grid_start, prev_cdf)]
y = grid_start
while y < 2199.99:
    y_next = y + step
    c_next = cdf(value=year_to_ts(year=y_next), vals=agi_vals, lo=a_lo, hi=a_hi, zero=a_z)
    mass_points.append((y + step / 2, c_next - prev_cdf))
    prev_cdf = c_next
    y = y_next
total_agi = sum(m for _, m in mass_points)
print("total weak-AGI mass by 2200:", round(total_agi, 4))
for t in targets:
    p = 0.0
    for when, mass in mass_points:
        if when >= t:
            break
        months = (t - when) * 12
        p += mass * cdf(value=months, vals=gap_vals, lo=g_lo, hi=g_hi, zero=g_z)
    results[t] = p
print("derived P(SI by year), independence assumed:")
for t in targets:
    print(t, round(results[t], 3))
