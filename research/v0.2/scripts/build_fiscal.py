import json
from pathlib import Path

ROOT = Path("/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad")
ENTITIES = ["FRA", "DEU", "GBR", "SWE", "NOR", "USA", "JPN", "CHN", "IND", "BRA", "NGA"]
WEO_URL = "https://www.imf.org/external/datamapper/GGXWDG_NGDP@WEO"
FM_URL = "https://www.imf.org/external/datamapper/GGR_G01_GDP_PT@FM"
EURLEX = "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1263"
DSM = "https://economy-finance.ec.europa.eu/publications/debt-sustainability-monitor-2025_en"
COUR_JUNE = "https://www.vie-publique.fr/files/rapport/pdf/303867.pdf"
TRESOR = "https://www.tresor.economie.gouv.fr/Articles/2026/10/06/le-rapport-sur-la-dette-des-administrations-publiques-2027-est-publie"
PGPF = "https://www.pgpf.org/article/national-debt-projected-to-hit-175-gdp-interest-totals-99-trillion/"
HOUSE = "https://budget.house.gov/press-release/03/03/2026/chairman-arrington-statement-on-cbo-long-term-budget-outlook"
UNCTAD = "https://unctad.org/system/files/official-document/osginf2026d11_en.pdf"
LICDSF = "https://www.imf.org/-/media/files/about/partners/cso/2026-lic-dsf-review-presentation-for-public-consultation.pdf"


def load(name: str, key: str) -> dict[str, dict[str, float]]:
    return json.loads((ROOT / "dl_imf" / name).read_text())["values"][key]


def build() -> dict[str, list[dict[str, object]] | list[str]]:
    debt = load(name="dm_debt.json", key="GGXWDG_NGDP")
    world = load(name="dm_wld.json", key="GGXWDG_NGDP")
    overall = load(name="fm_GGXCNL_G01_GDP_PT.json", key="GGXCNL_G01_GDP_PT")
    primary = load(name="fm_GGXONLB_G01_GDP_PT.json", key="GGXONLB_G01_GDP_PT")
    revenue = load(name="fm_GGR_G01_GDP_PT.json", key="GGR_G01_GDP_PT")
    projections: list[dict[str, object]] = []
    for entity in ENTITIES:
        projections.append({
            "factorId": "public_debt", "entity": entity, "value": debt[entity]["2031"], "low": None, "high": None, "year": 2031,
            "scenario": "IMF WEO October 2026 baseline, furthest published year (2031)",
            "source": "IMF World Economic Outlook, October 2026 (DataMapper GGXWDG_NGDP)", "url": WEO_URL,
            "note": f"General government gross debt, % of GDP; 2025 value {debt[entity]['2025']}",
        })
    projections.append({
        "factorId": "public_debt", "entity": "WLD", "value": world["WEOWORLD"]["2031"], "low": None, "high": None, "year": 2031,
        "scenario": "IMF WEO October 2026 baseline, furthest published year (2031)",
        "source": "IMF World Economic Outlook, October 2026 (DataMapper GGXWDG_NGDP, World)", "url": WEO_URL,
        "note": f"2025 value {world['WEOWORLD']['2025']}; IMF Fiscal Monitor April 2026: about 94% in 2025, 100% by 2029",
    })
    projections += [
        {"factorId": "public_debt", "entity": "FRA", "value": 120.9, "low": None, "high": None, "year": 2030,
         "scenario": "French government trajectory under the 2027 budget bill (PLF 2027)",
         "source": "French Treasury, Rapport sur la dette des administrations publiques, annex to PLF 2027 (6 Oct 2026)", "url": TRESOR,
         "note": "Maastricht debt: 115.7 (2025), 119.3 (2026), 121.7 (2027), 122.4 peak (2028), 121.9 (2029), 120.9 (2030)"},
        {"factorId": "public_debt", "entity": "FRA", "value": 116.6, "low": 116.6, "high": 134.6, "year": 2031,
         "scenario": "Cour des comptes reference path (government PSMT targets); high = Cour 'cumulative' risk scenario",
         "source": "Cour des comptes, La situation et les perspectives des finances publiques, June 2026, Table 20-21", "url": COUR_JUNE,
         "note": "Other Cour 2031 scenarios: spending drift 129.4, macro shock 120.3, +100 bp rates 119.2. Reference path peaks at 119.5 in 2027-2028"},
        {"factorId": "public_debt", "entity": "FRA", "value": None, "low": 95.3, "high": 130.9, "year": 2050,
         "scenario": "Cour des comptes long-run illustrations to 2050; no central scenario",
         "source": "Cour des comptes, June 2026, Graphique 17", "url": COUR_JUNE,
         "note": "95.3 = 1.8% primary surplus kept to 2050; 110.2 = 1.1% surplus; 115.9 = 1.8% surplus with a recession each decade; 130.9 = 1.1% surplus with recessions"},
        {"factorId": "public_debt", "entity": "FRA", "value": 144.0, "low": None, "high": 155.6, "year": 2036,
         "scenario": "European Commission no-fiscal-policy-change baseline (DSA); high = adverse interest-growth scenario",
         "source": "European Commission, Debt Sustainability Monitor 2025 (Institutional Paper 332, Feb 2026), France fiche", "url": DSM,
         "note": "Medium-term risk HIGH, long-term MEDIUM; 95% probability debt in 2030 exceeds its 2025 level (stochastic). Other stress tests 146.1-148.9"},
        {"factorId": "public_debt", "entity": "DEU", "value": 91.0, "low": None, "high": 97.9, "year": 2036,
         "scenario": "European Commission no-fiscal-policy-change baseline (DSA); high = highest deterministic stress test",
         "source": "European Commission, Debt Sustainability Monitor 2025, Germany fiche", "url": DSM,
         "note": "Baseline path 63.5 (2025) to 91.0 (2036)"},
        {"factorId": "public_debt", "entity": "SWE", "value": 43.6, "low": None, "high": 48.6, "year": 2036,
         "scenario": "European Commission no-fiscal-policy-change baseline (DSA); high = highest deterministic stress test",
         "source": "European Commission, Debt Sustainability Monitor 2025, Sweden fiche", "url": DSM,
         "note": "Baseline path 34.5 (2025) to 43.6 (2036)"},
        {"factorId": "public_debt", "entity": "USA", "value": 175.0, "low": None, "high": None, "year": 2056,
         "scenario": "CBO extended baseline, current law (Long-Term Budget Outlook, early 2026)",
         "source": "CBO Long-Term Budget Outlook 2026-2056, as summarised by the Peter G. Peterson Foundation and CRFB (cbo.gov blocks automated reading)", "url": PGPF,
         "note": "Federal debt held by the public, narrower than IMF general government gross debt (124.4% in 2025). CBO 10-year baseline: 120% in 2036"},
    ]
    for entity in ENTITIES:
        net_interest = primary[entity]["2031"] - overall[entity]["2031"]
        share = round(100 * net_interest / revenue[entity]["2031"], 1)
        now = round(100 * (primary[entity]["2025"] - overall[entity]["2025"]) / revenue[entity]["2025"], 1)
        projections.append({
            "factorId": "interest_burden", "entity": entity, "value": share, "low": None, "high": None, "year": 2031,
            "scenario": "Derived from IMF Fiscal Monitor October 2026 projections, furthest published year (2031)",
            "source": "IMF Fiscal Monitor October 2026 (DataMapper): (primary balance - overall balance) / revenue", "url": FM_URL,
            "note": f"DERIVED general-government NET interest, % of revenue; same method gives {now} in 2025. Not the same basis as World Bank GC.XPN.INTP.RV.ZS (central government, gross)",
        })
    groups = {}
    for group in ["ADVEC", "FM_EMG", "FM_LIDC"]:
        groups[group] = round(100 * (primary[group]["2031"] - overall[group]["2031"]) / revenue[group]["2031"], 1)
    projections += [
        {"factorId": "interest_burden", "entity": "WLD", "value": 9.3, "low": groups["ADVEC"], "high": groups["FM_EMG"], "year": 2031,
         "scenario": "Judged world central, bounded by IMF group aggregates derived from Fiscal Monitor October 2026",
         "source": "IMF Fiscal Monitor October 2026 group aggregates (advanced, emerging market) via DataMapper; central value judged", "url": FM_URL,
         "note": f"IMF publishes no world aggregate for these series. Derived 2031 net interest/revenue: advanced {groups['ADVEC']}, emerging {groups['FM_EMG']}, low-income developing {groups['FM_LIDC']}"},
        {"factorId": "interest_burden", "entity": "USA", "value": 37.0, "low": None, "high": None, "year": 2056,
         "scenario": "CBO extended baseline, current law (Long-Term Budget Outlook, early 2026)",
         "source": "CBO Long-Term Budget Outlook, as reported by the House Budget Committee and the Peter G. Peterson Foundation", "url": HOUSE,
         "note": "Federal net interest / federal revenues: 19% in 2026, 37% in 2056; net interest 6.9% of GDP in 2056"},
        {"factorId": "interest_burden", "entity": "FRA", "value": 3.7, "low": None, "high": None, "year": 2030,
         "scenario": "French government trajectory, PLF 2027 (unit: % of GDP, not % of revenue)",
         "source": "French Treasury, Rapport sur la dette des administrations publiques (PLF 2027)", "url": TRESOR,
         "note": "UNIT IS % OF GDP. General government interest 2.0 (2024), 2.2 (2025), 2.6 (2026), 2.9 (2027), 3.2 (2028), 3.5 (2029), 3.7 (2030). With revenue near 52-53% of GDP (IMF) this is about 7% of revenue"},
    ]
    thresholds = [
        {"factorId": "public_debt", "value": 60, "label": "EU 60% reference", "severity": "limit", "basis": "published",
         "consequence": "EU sets the country a binding path to bring debt down.",
         "source": "TFEU Protocol 12 reference value, applied in Regulation (EU) 2024/1263 Art. 5", "url": EURLEX},
        {"factorId": "public_debt", "value": 90, "label": "EU 90% safeguard", "severity": "danger", "basis": "published",
         "consequence": "EU requires debt to fall 1 point of GDP yearly; Commission rates it red.",
         "source": "Regulation (EU) 2024/1263 Art. 7 debt sustainability safeguard; EC Debt Sustainability Monitor 2025 colour bands", "url": EURLEX},
        {"factorId": "interest_burden", "value": 10, "label": "UNCTAD 10% line", "severity": "limit", "basis": "published",
         "consequence": "A tenth of revenue to interest: acute fiscal pressure, less room for shocks.",
         "source": "UNCTAD, A World of Debt 2026, Figure 21 threshold measure", "url": UNCTAD},
        {"factorId": "interest_burden", "value": 18, "label": "IMF-WB LIC 18%", "severity": "danger", "basis": "published",
         "consequence": "Debt-distress signal for low-income countries (external debt service, medium capacity).",
         "source": "IMF-World Bank LIC Debt Sustainability Framework, external debt service-to-revenue thresholds 14/18/23", "url": LICDSF},
    ]
    debt_judgments = {
        "FRA": (0.8, 0.6, "France starts at 115.5% with an EC no-change path to 144% in 2036; Cour scenarios still give 95-131% in 2050."),
        "DEU": (0.65, 0.35, "Germany is near 63% but the EC no-policy-change baseline reaches 91% by 2036."),
        "GBR": (0.75, 0.5, "UK debt is near 100% and IMF projects it flat to 2031; big post-war reductions show decline is possible but slow."),
        "SWE": (0.2, 0.05, "Sweden is at 34.5% with strong fiscal rules; the EC baseline only reaches 43.6% by 2036."),
        "NOR": (0.1, 0.03, "Norway's gross debt falls toward 26% by 2031 on IMF projections and it earns more interest than it pays."),
        "USA": (0.8, 0.65, "CBO current law puts federal debt held by the public at 175% in 2056; history shows ratios can fall, but no plan exists."),
        "JPN": (0.85, 0.7, "Japan is above 200% and IMF sees only a slow decline to 189% by 2031; halving it again would take decades."),
        "CHN": (0.75, 0.55, "IMF projects Chinese general government debt rising from 98.6% in 2025 to 122.1% by 2031."),
        "IND": (0.55, 0.25, "India is at 84% and IMF projects a gradual decline to 75% by 2031 on fast nominal growth."),
        "BRA": (0.75, 0.5, "Brazil is at 93% and rising to 105% by 2031 under IMF projections."),
        "NGA": (0.25, 0.08, "Nigeria's debt is low relative to GDP (36%) but its tiny revenue base limits how much it can borrow."),
        "WLD": (0.75, 0.5, "World debt is about 94% and projected above 100% by 2029-2031; nothing published goes to 2100."),
    }
    exceedance: list[dict[str, object]] = []
    for entity, (p60, p90, reason) in debt_judgments.items():
        for threshold, probability in ((60, p60), (90, p90)):
            exceedance.append({
                "factorId": "public_debt", "entity": entity, "threshold": threshold, "direction": "above", "year": 2100,
                "probability": probability, "basis": "judged",
                "source": "Judgment from IMF WEO Oct 2026, EC DSM 2025, CBO 2026 and Cour des comptes 2026 projections",
                "url": WEO_URL, "reasoning": reason,
            })
    interest_judgments = {
        "FRA": (0.35, 0.1, "France's burden is about 4% of revenue but official paths put interest at 3.7% of GDP (about 7% of revenue) by 2030."),
        "DEU": (0.15, 0.04, "German interest is about 2-3% of revenue; even with debt near 90% by 2036 it would stay well below 10%."),
        "GBR": (0.45, 0.12, "UK interest is about 7-8% of revenue (World Bank, IMF-derived) and IMF projects about 7% in 2031."),
        "SWE": (0.04, 0.01, "Swedish interest is about 1% of revenue with low and stable debt."),
        "NOR": (0.03, 0.01, "Norway earns more interest than it pays; a crossing would need a collapse of its fund."),
        "USA": (0.75, 0.5, "World Bank puts US federal interest at 20% of revenue already and CBO projects 37% by 2056 under current law."),
        "JPN": (0.35, 0.12, "Japan's gross interest is only about 4% of revenue, but with debt near 200% of GDP any rise in rates feeds through."),
        "CHN": (0.35, 0.1, "Chinese net interest is about 4% of revenue, rising to about 6% by 2031 on IMF-derived projections as debt climbs."),
        "IND": (0.75, 0.45, "India already spends about a quarter of general-government revenue on net interest (IMF-derived)."),
        "BRA": (0.75, 0.45, "Brazil already spends about 18-19% of revenue on net interest (IMF-derived) and 30% on World Bank's central-government measure."),
        "NGA": (0.75, 0.5, "Nigeria's revenue is about 10% of GDP, so modest debt already costs about a fifth to a quarter of revenue."),
        "WLD": (0.35, 0.08, "The world average is 6.5% of revenue (World Bank 2024) and rising, but advanced economies stay below 10% to 2031."),
    }
    for entity, (p10, p18, reason) in interest_judgments.items():
        for threshold, probability in ((10, p10), (18, p18)):
            exceedance.append({
                "factorId": "interest_burden", "entity": entity, "threshold": threshold, "direction": "above", "year": 2100,
                "probability": probability, "basis": "judged",
                "source": "Judgment from World Bank GC.XPN.INTP.RV.ZS, IMF Fiscal Monitor Oct 2026 and CBO 2026",
                "url": FM_URL, "reasoning": reason,
            })
    notes = [
        "IMF DataMapper GGXWDG_NGDP is the World Economic Outlook October 2026 vintage (metadata last-modified 2026-10-08). The Fiscal Monitor series used for interest (GGXCNL_G01_GDP_PT, GGXONLB_G01_GDP_PT, GGR_G01_GDP_PT) are also October 2026.",
        "Exceedance semantics used here: probability that the ratio is above the threshold in 2100 (read as the 2096-2100 average), not 'ever above before 2100'. Many countries are already above 60/90% debt, so 'ever crosses' would be 1. All exceedance values are judged: no institution publishes debt or interest projections to 2100. Probabilities are not split by superintelligence; they blend SI and no-SI worlds.",
        "Measures differ: IMF general government gross debt (France 115.5% in 2025) vs national Maastricht debt (France 115.7%, Cour des comptes/Treasury) vs CBO federal debt held by the public (USA about 100% in 2026 vs IMF 124.4% in 2025). Do not mix them on one axis without a label.",
        "World Bank GC.XPN.INTP.RV.ZS is central government, gross interest. The interest_burden projections are DERIVED from IMF general-government data as net interest (primary balance minus overall balance) over revenue. Net interest understates the burden where governments hold large financial assets (Japan net 0.5% of revenue in 2025 vs gross interest of 1.49% of GDP in 2024, about 4.2% of revenue, from the IMF Public Finances in Modern History series 'ie'; Norway net is negative). World Bank has no Japan or Nigeria values.",
        "The EU 90% line is a policy rule (Regulation 2024/1263 Art. 7: debt above 90% must fall by at least 1 point of GDP a year on average; 0.5 point between 60% and 90%). The academic 90% line (Reinhart and Rogoff 2010: median growth about 1 point lower above 90%) is contested: Herndon, Ash and Pollin (2013) found coding errors, selective exclusions and unconventional weighting; corrected average growth above 90% was 2.2%, not -0.1%. Present 90% as a convention, not a cliff.",
        "Other published debt benchmarks not used as card thresholds: IMF market-access DSA benchmarks of 70% (emerging) and 85% (advanced) of GDP, from the 2013 framework as cited in the IMF How-to Note 'How to Calibrate Fiscal Rules' (Dec 2017); the IMF replaced that framework in 2021-2022 (MAC SRDSF). LIC-DSF PV of total public debt benchmarks 35/55/70% of GDP. EC DSM long-term S1/S2 risk bands: high if required fiscal effort exceeds 6% of GDP, medium 2-6%.",
        "The 18% interest_burden threshold is the LIC-DSF medium-capacity EXTERNAL debt service-to-revenue threshold (weak 14, strong 23). It includes principal and covers only external debt of low-income countries, so applying it to total interest of any country is an approximation. The LIC-DSF is under review; the IMF says the revised framework rolls out in 2027.",
        "EC DSM 2025 published probability (not a card threshold): France's debt ratio exceeds its 2025 level in 2030 with 95% probability (stochastic projections; 10th-90th percentile spread 18 points of GDP).",
        "Could not verify: Moody's, S&P and Fitch numeric scoring bands for interest/revenue (ratings.moodys.com blocks automated reading); CBO primary pages (cbo.gov serves a bot challenge), so CBO figures come from PGPF, CRFB and House Budget Committee summaries; CBO's alternative high-rate scenario (222% in 2056) seen only in a search snippet, not used; HCFP's own debt figures for 2027 (vie-publique page empty; Public Sénat only reports HCFP calling the 1% growth forecast optimistic); Japan Cabinet Office long-run fiscal projections not checked.",
        "French interest: Cour des comptes (June 2026) gives general-government interest of 65.7 bn euros (2.2% of GDP) in 2025 and 77.4 bn euros (2.5% of GDP) in 2026; its February 2026 report expects more than 100 bn euros by 2029. State-only interest (AFT, general accounting): 51.8 bn (2025), 64.9 (2026), 74.9 (2027), 86.8 (2028), 97.1 (2029).",
        "UNCTAD A World of Debt 2026: median developing-country net interest 8.1% of revenue in 2025; 57 developing countries at or above 10% in 2025 (29 in 2010); 3.7 billion people live where interest exceeds health or education spending. IMF Fiscal Monitor April 2026: global interest rose from 2% to nearly 3% of GDP in four years; global debt nearly 94% of GDP in 2025, 100% by 2029; global debt-at-risk near 117% of GDP three years ahead.",
    ]
    return {"projections": projections, "thresholds": thresholds, "exceedance": exceedance, "notes": notes}


if __name__ == "__main__":
    out = ROOT / "work_resources" / "fragment_fiscal.json"
    out.write_text(json.dumps(build(), indent=1, ensure_ascii=False))
    data = json.loads(out.read_text())
    print({k: len(v) for k, v in data.items()})
    for t in data["thresholds"]:
        assert len(t["label"]) <= 16, t["label"]
        assert len(t["consequence"].split()) <= 15, t["consequence"]
    for p in data["projections"]:
        print(p["factorId"], p["entity"], p["year"], p["value"], p["low"], p["high"])
