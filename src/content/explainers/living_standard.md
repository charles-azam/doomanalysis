---
factor: living_standard
title: "Living standard"
summary: "What the average person on Earth consumes in a year, with today's rich-world average set to 100; this site calls 500 abundance."
sources:
  - label: "World Bank, Households and NPISHs final consumption expenditure per capita, PPP, constant 2021 international $ (NE.CON.PCAP.PP.KD), world and high income, November 2026 update"
    url: https://api.worldbank.org/v2/country/WLD;HIC/indicator/NE.CON.PCAP.PP.KD?format=json&per_page=200&date=1990:2025
  - label: "Maddison Project Database 2023, GDP per capita, via Our World in Data"
    url: https://ourworldindata.org/grapher/gdp-per-capita-maddison-project-database
  - label: "Quote Investigator, Keynes, Economic Possibilities for our Grandchildren (1930)"
    url: https://quoteinvestigator.com/?p=448841
  - label: "Energy Institute, Statistical Review of World Energy 2026, energy use per person, via Our World in Data"
    url: https://ourworldindata.org/grapher/per-capita-energy-use
  - label: "UN DESA, World Population Prospects 2024, probabilistic total population"
    url: https://population.un.org/wpp/assets/Excel%20Files/2_Indicators%20(Probabilistic)/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx
  - label: "UN SDG indicator 12.2.1, material footprint per capita, via Our World in Data"
    url: https://ourworldindata.org/grapher/material-footprint-per-capita
  - label: "UNEP International Resource Panel, Global Resources Outlook 2024, press release"
    url: https://resourcepanel.org/news-events/global-resources-outlook-2024-press-release
  - label: "Christensen, Gillingham and Nordhaus, Uncertainty in forecasts of long-run economic growth, PNAS, 2018"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6003472
---

## Why it matters here

This card measures the distance to abundance, which this site defines as at least nine in ten people living five times better than today's rich-world average. Consumption is what households and charities spend on people, at prices adjusted so a dollar buys the same everywhere ([World Bank](https://api.worldbank.org/v2/country/WLD;HIC/indicator/NE.CON.PCAP.PP.KD?format=json&per_page=200&date=1990:2025)). It leaves out public services and how evenly it is shared.

## In numbers

- **Today.** The world consumed $11,301 per person in 2024, high-income countries $31,532 ([World Bank](https://api.worldbank.org/v2/country/WLD;HIC/indicator/NE.CON.PCAP.PP.KD?format=json&per_page=200&date=1990:2025)). 11,301 ÷ 31,532 = 0.36: the world stands at 36.
- **The last 75 years.** From 1950 to 2022, GDP per person grew 5.7 times in Western Europe and 3.8 times in the United States, Canada, Australia and New Zealand ([Maddison Project](https://ourworldindata.org/grapher/gdp-per-capita-maddison-project-database)): 2.4% and 1.9% a year. Keynes expected four to eight times in a century ([Quote Investigator](https://quoteinvestigator.com/?p=448841)). Reaching 500 from 36 by 2100 takes 14 times in 76 years, 3.5% a year for the whole world.
- **Energy.** Five times the rich world's 52,500 kWh per person ([Energy Institute](https://ourworldindata.org/grapher/per-capita-energy-use)), for 10.2 billion people ([UN](https://population.un.org/wpp/assets/Excel%20Files/2_Indicators%20(Probabilistic)/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx)), is 2.7 million TWh a year, 16 times today's 20,258 kWh × 8.23 billion. Rich countries used 1.9% less energy a year per dollar consumed from 2000 to 2024 (56,973 kWh for $21,634, then 52,236 for $31,532); kept up to 2100, that brings 500 down to about 60,000 kWh per person.
- **Materials.** Europe and North America use 20 tonnes per person a year ([UN via OWID](https://ourworldindata.org/grapher/material-footprint-per-capita)). Five times that for 10.2 billion people is 1,000 billion tonnes, ten times the 106 billion extracted today ([UNEP](https://resourcepanel.org/news-events/global-resources-outlook-2024-press-release)).

## The lines on the card

- **36:** the world today.
- **100:** the rich world today.
- **500:** abundance.

## Where the 2100 odds come from

Surveyed growth experts put world GDP per person growth from 2010 to 2100 at 2.03% a year (median), 0.60% at the 10th percentile and 3.47% at the 90th ([Christensen et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC6003472)). Assuming consumption grows as fast as GDP, the world's 26.6 in 2010 becomes 26.6 × 1.0203⁹⁰ = 162 in 2100, and 46 and 572 at those percentiles. Each percentile is a trimmed mean of the experts' own answers, given before 2018.

## What superintelligence can and cannot change

Automating work and invention could push growth far above 2% a year. The plants, mines and homes still have to be built, and who gets the output is a political choice.
