/** Published or derived cumulative chances that superintelligence (or the nearest defined equivalent) arrives by each year. */
export type ArrivalSeries = { id: string; label: string; url: string; points: { year: number; probability: number }[] }

export const arrivalSeries: ArrivalSeries[] = [
  { id: "metaculus", label: "Metaculus forecasters (derived)", url: "https://www.metaculus.com/questions/9062/how-many-months-from-weak-agi-to-first-superintelligence/", points: [{ year: 2030, probability: 0.405 }, { year: 2035, probability: 0.631 }, { year: 2040, probability: 0.718 }, { year: 2050, probability: 0.795 }, { year: 2075, probability: 0.868 }, { year: 2100, probability: 0.881 }] },
  { id: "manifold", label: "Manifold traders (no catastrophe first)", url: "https://manifold.markets/IsaacKing/will-there-be-a-superintelligence-b", points: [{ year: 2030, probability: 0.39 }, { year: 2040, probability: 0.75 }, { year: 2050, probability: 0.764 }, { year: 2075, probability: 0.85 }, { year: 2100, probability: 0.863 }] },
  { id: "espai2024", label: "AI researchers, 2024 survey", url: "https://aiimpacts.org/wp-content/uploads/2026/09/ESPAI2024.pdf", points: [{ year: 2027, probability: 0.1 }, { year: 2042, probability: 0.5 }] },
  { id: "xpt_super", label: "Superforecasters, 2022 tournament", url: "https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf", points: [{ year: 2030, probability: 0.01 }, { year: 2050, probability: 0.205 }, { year: 2100, probability: 0.7475 }] },
  { id: "xpt_expert", label: "Domain experts, 2022 tournament", url: "https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf", points: [{ year: 2030, probability: 0.09 }, { year: 2050, probability: 0.46 }, { year: 2100, probability: 0.87 }] },
  { id: "leap", label: "Experts, 2026 LEAP panel", url: "https://forecastingresearch.substack.com/p/leap-wave-8-ai-timelines", points: [{ year: 2039, probability: 0.2 }, { year: 2050, probability: 0.4 }, { year: 2065, probability: 0.6 }, { year: 2100, probability: 0.8 }] },
]
