---
factor: political_stability
title: "Political stability"
summary: "Governments that may be toppled by force cannot plan, invest or keep essential services running for decades."
sources:
  - label: "World Bank, Worldwide Governance Indicators, 2026 release"
    url: https://www.worldbank.org/en/publication/worldwide-governance-indicators
  - label: "World Bank, WGI documentation, 2026"
    url: https://www.worldbank.org/en/publication/worldwide-governance-indicators/documentation
  - label: "World Bank, WGI Political Stability sources and indicators (PV-2026), 2026"
    url: https://www.worldbank.org/content/dam/sites/govindicators/doc/PV-2026.pdf
  - label: "World Bank API, Political Stability estimate (GOV_WGI_PV.EST), accessed 2026-11-24"
    url: https://api.worldbank.org/v2/country/all/indicator/GOV_WGI_PV.EST?source=3
---

## What it is

One of the World Bank's six Worldwide Governance Indicators (WGI). Its full name is "Political Stability and Absence of Violence/Terrorism". It captures perceptions of how likely it is that a government will be destabilized or overthrown by violent, coercive or unconstitutional means ([PV-2026](https://www.worldbank.org/content/dam/sites/govindicators/doc/PV-2026.pdf)). It blends questions from surveys and expert ratings about armed conflict, orderly transfers of power, social unrest, violent protests, terrorism, ethnic tensions and political terror. The WGI draw on 35 sources and cover more than 200 economies from 1996 to 2025 ([WGI](https://www.worldbank.org/en/publication/worldwide-governance-indicators)).

The estimate is a standardized score that typically runs from about −2.5 to +2.5. Higher is more stable ([documentation](https://www.worldbank.org/en/publication/worldwide-governance-indicators/documentation)). Because it is standardized across countries, 0 means roughly the middle of the world.

## Why it matters

The abundance test needs essentials delivered reliably for decades. That takes grids, water systems and clinics that are built, paid for and maintained. Coups, insurgencies and street violence interrupt all of this. Collapse in the site's sense, a majority losing an essential for five years, is most likely where the state itself breaks down.

## Where it stands

Scores for 2025 ([World Bank API](https://api.worldbank.org/v2/country/all/indicator/GOV_WGI_PV.EST?source=3)):
- **Stable:** Iceland 1.32, Japan 1.26, Norway 1.08, Sweden 0.85.
- **Middling:** Germany 0.21, China 0.02, France −0.09, United States −0.30, Ukraine −0.33, Brazil −0.38, India −0.61, Russia −0.94.
- **Unstable:** Nigeria −1.74, Pakistan −1.95, Afghanistan −2.04, Sudan −2.07, Somalia −2.17, Syria −2.32, Yemen −2.51.

Several rich democracies have slipped. Germany fell from 1.30 in 1996 to 0.21 in 2025, the United States from 0.97 to −0.30, and France from 0.85 to −0.09. Sweden dropped from 1.56 to 0.85. Because the WGI were recalculated back to 1996 under a revised method, these figures may differ from older releases.

Two cautions. First, this is a perception index: it reflects what survey respondents and analysts think, not a count of events. Second, most year-to-year changes are smaller than the margin of error. The World Bank advises looking at trends over a decade or more. No one forecasts these scores to 2100.

## The lines that matter

The World Bank sets no thresholds. The site uses two judgment lines:
- **0 (world middle).** Below 0, a country is less stable than the typical country. The risk of disruption to services becomes a real planning concern.
- **−1.0 (fragile).** About one standard unit below the middle. Countries here, such as Nigeria and Pakistan, face insurgency, terrorism or the threat of unconstitutional change. Many countries far below it, such as Sudan, Syria and Yemen, are at war or just emerging from one.

## What superintelligence can and cannot change

SI could make public services cheaper and better, and growth faster, which tends to steady governments. It could also flood politics with targeted propaganda. It could make surveillance and repression cheap, or concentrate power in whoever controls it. Repression can raise stability in the short run while hiding the risk of a violent break. Legitimacy, peaceful transfer of power and trust are political goods that SI cannot simply supply.
