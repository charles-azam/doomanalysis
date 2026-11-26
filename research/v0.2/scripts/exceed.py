from statistics import NormalDist

STANDARD = NormalDist()


def two_piece(median: float, low: float, low_q: float, high: float, high_q: float):
    sigma_low = (median - low) / -STANDARD.inv_cdf(low_q)
    sigma_high = (high - median) / STANDARD.inv_cdf(high_q)

    def exceed(threshold: float) -> float:
        if threshold <= median:
            return 1 - STANDARD.cdf((threshold - median) / sigma_low) * 1.0 if False else 1 - 0.5 * 2 * STANDARD.cdf((threshold - median) / sigma_low)
        return 1 - (0.5 + (STANDARD.cdf((threshold - median) / sigma_high) - 0.5))

    return exceed, sigma_low, sigma_high


sources = {
    "CAT 2026 (P16 2.2, P50 2.7, P84 3.4)": two_piece(median=2.7, low=2.2, low_q=0.16, high=3.4, high_q=0.84),
    "Liu&Raftery 2021 (P5 2.1, P50 2.8, P95 3.9)": two_piece(median=2.8, low=2.1, low_q=0.05, high=3.9, high_q=0.95),
    "IPCC SSP2-4.5 (P5 2.1, P50 2.7, P95 3.5)": two_piece(median=2.7, low=2.1, low_q=0.05, high=3.5, high_q=0.95),
    "Raftery 2017 (P5 2.0, P50 3.2, P95 4.9)": two_piece(median=3.2, low=2.0, low_q=0.05, high=4.9, high_q=0.95),
}
thresholds = [1.2, 1.5, 2.0, 2.5, 3.0, 3.4, 3.5, 4.0]
for name, (exceed, sigma_low, sigma_high) in sources.items():
    print(name, f"sl={sigma_low:.3f} sh={sigma_high:.3f}", " ".join(f">{t}:{exceed(t):.3f}" for t in thresholds))

# UNEP 2026: P66 = 2.8, P90 = 3.4, assume normal upper tail
sigma = (3.4 - 2.8) / (STANDARD.inv_cdf(0.90) - STANDARD.inv_cdf(0.66))
median = 2.8 - STANDARD.inv_cdf(0.66) * sigma
print(f"UNEP implied median={median:.2f} sigma={sigma:.3f}", " ".join(f">{t}:{1 - NormalDist(median, sigma).cdf(t):.3f}" for t in thresholds))

# Sea level SSP2-4.5 (cm, rel 1995-2014): median 56, likely (17-83) 44-76
exceed, sl, sh = two_piece(median=56, low=44, low_q=0.17, high=76, high_q=0.83)
print("Sea level SSP2-4.5", f"sl={sl:.1f} sh={sh:.1f}", " ".join(f">{t}:{exceed(t):.3f}" for t in [50, 100]))
exceed, sl, sh = two_piece(median=44, low=32, low_q=0.17, high=62, high_q=0.83)
print("Sea level SSP1-2.6", " ".join(f">{t}:{exceed(t):.3f}" for t in [50, 100]))
exceed, sl, sh = two_piece(median=68, low=55, low_q=0.17, high=90, high_q=0.83)
print("Sea level SSP3-7.0", " ".join(f">{t}:{exceed(t):.3f}" for t in [50, 100]))
