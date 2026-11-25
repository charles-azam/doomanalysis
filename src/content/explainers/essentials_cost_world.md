---
factor: essentials_cost_world
title: "Cost of the essentials"
summary: "What food, household energy, water, health care and security cost the world as a share of its income; this site counts the essentials as nearly free under 10%."
sources:
  - label: "World Bank, International Comparison Program 2021, expenditure shares of GDP, world and income groups, 2024"
    url: https://api.worldbank.org/v2/sources/90/country/WLD;HIB;LIB;LMB;UMB/series/1000000;1101000;9080000;9060000;9100000;1111000;1400000;1107000/classification/ZS;PP.CD;PCAP.PP/time/YR2021?format=json&per_page=500
  - label: "World Bank, ICP 2021 databank"
    url: https://databank.worldbank.org/source/icp-2021
  - label: "WHO Global Health Expenditure Database via World Bank, current health expenditure, % of GDP (SH.XPD.CHEX.GD.ZS), November 2026 update"
    url: https://api.worldbank.org/v2/country/WLD;HIC/indicator/SH.XPD.CHEX.GD.ZS?format=json&per_page=200&date=2015:2025
  - label: "SIPRI via World Bank, military expenditure, % of GDP (MS.MIL.XPND.GD.ZS), November 2026 update"
    url: https://api.worldbank.org/v2/country/WLD;HIC/indicator/MS.MIL.XPND.GD.ZS?format=json&per_page=200&date=2015:2025
  - label: "Eurostat, Government expenditure on public order and safety, Statistics Explained"
    url: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Government_expenditure_on_public_order_and_safety
  - label: "US Bureau of Economic Analysis via FRED, personal consumption expenditures on energy goods and services, and GDP"
    url: https://fred.stlouisfed.org/graph/fredgraph.csv?id=DNRGRC1A027NBEA,GDPA
  - label: "World Bank, Funding a Water-Secure Future, 2024"
    url: https://www.worldbank.org/en/topic/water/publication/funding-a-water-secure-future
  - label: "SolarQuarter, IEA report: global energy spending nears 10% of GDP, February 2026"
    url: https://solarquarter.com/2026/02/18/iea-2025-report-batteries-account-for-40-of-energy-patents-as-global-energy-spending-nears-10-of-gdp-report/
  - label: "World Bank, GDP per capita, PPP, constant 2021 international $ (NY.GDP.PCAP.PP.KD), November 2026 update"
    url: https://api.worldbank.org/v2/country/WLD;HIC/indicator/NY.GDP.PCAP.PP.KD?format=json&per_page=200&date=2015:2025
---

## Why it matters here

This is the abundance test in money. If superintelligence or anything else made the five essentials nearly free, their cost would shrink to a small slice of income; this site draws that line at 10%, our judgment. We found no agency that publishes the total, so we add up the parts, public and private, starting from the World Bank's price comparison of 2021 ([ICP 2021](https://databank.worldbank.org/source/icp-2021)).

## In numbers

How the 26% is built, as shares of world GDP:

- **Food: 8.6%**, household spending on food and soft drinks in 2021 ([ICP](https://api.worldbank.org/v2/sources/90/country/WLD;HIB;LIB;LMB;UMB/series/1000000;1101000;9080000;9060000;9100000;1111000;1400000;1107000/classification/ZS;PP.CD;PCAP.PP/time/YR2021?format=json&per_page=500)).
- **Health: 10.1%**, all health spending in 2023 ([WHO](https://api.worldbank.org/v2/country/WLD;HIC/indicator/SH.XPD.CHEX.GD.ZS?format=json&per_page=200&date=2015:2025)). **Military: 2.5%** in 2025 ([SIPRI](https://api.worldbank.org/v2/country/WLD;HIC/indicator/MS.MIL.XPND.GD.ZS?format=json&per_page=200&date=2015:2025)).
- **Police, courts, prisons and fire: 1.7%**, the EU figure for 2024 ([Eurostat](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Government_expenditure_on_public_order_and_safety)), used for the world: our judgment. **Home and car energy: 2.5%**, the US figure for 2025, $767 billion of $30,861 billion ([BEA via FRED](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DNRGRC1A027NBEA,GDPA)), used for the world: our judgment. **Water: 0.5%**, what developing countries spend ([World Bank](https://www.worldbank.org/en/topic/water/publication/funding-a-water-secure-future)).
- **Total.** 8.6 + 10.1 + 2.5 + 1.7 + 2.5 + 0.5 = 25.9, about 26%. Counting health as the price survey does (8.9%) gives 25%. Adding restaurant meals (3.4%) and the energy businesses buy (all energy spending is nearly 10% of world GDP, [IEA via SolarQuarter](https://solarquarter.com/2026/02/18/iea-2025-report-batteries-account-for-40-of-energy-patents-as-global-energy-spending-nears-10-of-gdp-report/)) gives 26 + 3.4 + 7.5 = 37%.
- **The parts move apart.** Food takes 34.7% of GDP in low-income countries and 5.9% in rich ones ([ICP](https://api.worldbank.org/v2/sources/90/country/WLD;HIB;LIB;LMB;UMB/series/1000000;1101000;9080000;9060000;9100000;1111000;1400000;1107000/classification/ZS;PP.CD;PCAP.PP/time/YR2021?format=json&per_page=500)); health takes 12.5% in rich countries against 10.1% worldwide ([WHO](https://api.worldbank.org/v2/country/WLD;HIC/indicator/SH.XPD.CHEX.GD.ZS?format=json&per_page=200&date=2015:2025)).

## The lines on the card

- **10%: essentials nearly free.** At $21,914 of output per person in 2025 ([World Bank](https://api.worldbank.org/v2/country/WLD;HIC/indicator/NY.GDP.PCAP.PP.KD?format=json&per_page=200&date=2015:2025)), 10% is about $2,190 a year for food, power, water, care and protection.
- **20%:** a fifth of world output.
- **50%:** half of world output, when little is left to invest or absorb shocks: our judgment.

## Where the 2100 odds come from

We found no projection of this total. The curve is judged.

## What superintelligence can and cannot change

Cheaper energy, food and care would shrink the share. Health spending rises with income, an arms race would raise security costs, and land and water stay finite.
