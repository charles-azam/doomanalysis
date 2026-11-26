export const meta = {
  name: 'doom-cards-research',
  description: 'Research every Doom Analysis card in 13 groups, check each against its sources, then calibrate the danger bands across cards',
  phases: [
    { title: 'Research', detail: 'one agent per group writes its card file and explainers' },
    { title: 'Check', detail: 'an independent agent re-opens every source and fixes errors' },
    { title: 'Calibrate', detail: 'one agent compares the bands across all cards' },
  ],
}

// Absolute path of your checkout of this repository, passed as args.root.
const ROOT = args.root

const GROUPS = [
  {
    key: 'climate-core',
    title: 'Climate core',
    cards: [
      "`co2` (group climate, scale danger, no parent): atmospheric CO₂ in 2100, in ppm. It is the top of the climate tree, so its bands cover everything CO₂ does, through warming and through ocean acidification. In the explainer, state plainly what CO₂ does to human health directly: find the concentrations at which effects on thinking and health are reported, compare them with what is expected outdoors this century, and say whether the direct effect matters. Also cover the loss of nutrients in crops grown under high CO₂.",
      "`warming` (climate, danger, parent co2): warming in 2100 above 1850–1900. Use the IPCC AR6 ranges and the current-policies estimates of Climate Action Tracker and the UNEP Emissions Gap Report (2026 editions). The realistic case is current policies, with the Paris goals missed. Check and explain the claim that about 5 °C separates today from the last ice age, as an order of magnitude.",
      "`humid_heat` (climate, danger, parent warming): the share of humanity living where heat and humidity fall outside the range people have always lived in (the human climate niche, wet-bulb limits). Cover which regions are most exposed, such as India.",
      "`harvests` (climate, danger, parent warming): the change in world yields of the main crops caused by warming.",
      "`extreme_weather` (climate, parent warming, scale danger or none, your choice): how much more often extreme heat, rain and drought occur as the world warms (IPCC AR6 gives multipliers), and what disasters cost in lives and money today.",
    ],
    extra: '',
  },
  {
    key: 'ice-ocean',
    title: 'Ice and ocean',
    cards: [
      "`sea_level` (climate, danger, parent warming): global mean sea-level rise by 2100, with the IPCC likely ranges and its low-likelihood high-impact case. Count the people living on land that would flood.",
      "`ice_sheets` (climate, danger, parent warming): the Greenland and West Antarctic ice sheets. Choose a metric that reads well in 2100 (for example the long-term sea-level rise already committed), and give the tipping thresholds from the literature.",
      "`arctic_sea_ice` (climate, parent warming, scale danger or none): September Arctic sea-ice extent.",
      "`permafrost` (climate, danger, parent warming): carbon released by thawing permafrost by 2100, and the extra warming it adds.",
      "`amoc` (climate, danger, parent warming): the Atlantic overturning circulation, in sverdrups. Explain what a sverdrup is with an order-of-magnitude comparison to the flow of all the world's rivers, and what a collapse would do to Europe, the tropics' rain belts and harvests.",
      "`ocean_heat` (climate, none, parent warming): ocean heat content, and how much of the extra heat the ocean takes up.",
      "`ocean_acidification` (climate, danger, parent co2, not warming: it comes from CO₂ directly): surface ocean pH or aragonite saturation. Find out whether there is a threshold beyond which shellfish, plankton or fish stocks fail, and how many people depend on the sea for protein.",
      "`corals` (climate, danger, parent warming): the share of warm-water coral reefs lost. Be honest about how far up the scale losing every reef would go.",
    ],
    extra: '',
  },
  {
    key: 'living-world',
    title: 'Living world, soil and water',
    cards: [
      "`biodiversity` (climate, danger, no parent): the decline of wild populations or species (pick the most meaningful measure and explain what the Living Planet Index does and does not say). What would the loss of pollinators or of ecosystems do to people?",
      "`planetary_boundaries` (climate, none): the number of planetary boundaries crossed.",
      "`soil` (resources, danger): degraded farmland or topsoil loss, and what it does to food.",
      "`fish` (resources, danger): overfished stocks and the wild catch, and how many people rely on fish for protein.",
      "`fresh_water` (resources, danger): the share of humanity living under high or extreme water stress, today and projected (WRI Aqueduct gives 2050 and 2080 figures).",
    ],
    extra: '',
  },
  {
    key: 'natural',
    title: 'Natural disasters',
    cards: [
      "`asteroid` (natural, danger, statistic worst-by-2100): the largest asteroid or comet impact before 2100. Use published impact frequencies by size and turn them into chances over 75 years, showing the arithmetic.",
      "`supervolcano` (natural, danger, worst-by-2100): the largest volcanic eruption before 2100, by magnitude or erupted volume, with published recurrence rates for the largest classes and what a volcanic winter does to harvests.",
      "`solar_storm` (natural, danger, worst-by-2100): the strongest geomagnetic storm before 2100, with the chance of a Carrington-class event and what it would do to power grids.",
    ],
    extra: 'These risks do not depend on warming. The honest result for some of them is a very small chance of a very high level: state both clearly.',
  },
  {
    key: 'war',
    title: 'War between states',
    cards: [
      "`war` (group war, danger, no parent, statistic worst-by-2100): the deadliest war before 2100, as the share of humanity it kills (log axis). It is the top card of this cause and covers nuclear, biological and conventional war together. Use the forecasts that exist (Metaculus, the Forecasting Research Institute's tournament, expert surveys) for the curve, and the nuclear-winter famine studies for how high the scale goes.",
      "`armed_conflicts` (war, none, parent war): the number of state-based armed conflicts a year (UCDP).",
      "`battle_deaths` (war, none, parent war): battle deaths a year, or per 100,000 people.",
      "`world_military_spending` (war, none, parent war): world military spending as a share of world GDP (SIPRI).",
      "`conflict_exposure` (war, none or danger, parent war): the share of humanity living in or near active conflict (ACLED, PRIO or UCDP).",
      "`nuclear_warheads` (war, none, parent war): the number of nuclear warheads. Explain what the stockpile changes: how bad a war can get, more than how likely it is.",
      "`bioweapons` (war, danger, parent war, worst-by-2100): the deadliest deliberate use of a biological weapon before 2100, as the share of humanity killed. Stay at the level of published risk estimates and history. Do not describe methods.",
    ],
    extra: 'The owner of the site wants this group to measure how aggressive the world is, not to count warheads. The measures of conflict come first.',
  },
  {
    key: 'civil',
    title: 'Civil war and state breakdown',
    cards: [
      "`state_breakdown` (group civil, danger, no parent, worst-by-2100): the share of humanity living in countries at civil war or whose state has collapsed, at the worst moment before 2100. It is the top card of this cause.",
      "`internal_conflicts` (civil, none, parent state_breakdown): the number of civil (intrastate) conflicts a year (UCDP), including internationalised ones.",
      "`polarisation` (civil, none, parent state_breakdown): political polarisation in democracies (V-Dem), and what research finds about the predictors of civil war (weak, half-democratic states and politics organised around identity).",
      "`forced_displacement` (civil, danger, parent state_breakdown): the share of humanity forcibly displaced (UNHCR).",
      "`immigration_pressure` (civil, none, parent state_breakdown): migration into rich countries, measured: yearly inflows or the foreign-born share in high-income countries, and the employment gap between immigrants and natives (OECD). Report what the research literature finds on links between immigration, social cohesion and conflict, in both directions, in a measured and factual tone, with sources. State what is established and what is not.",
    ],
    extra: '',
  },
  {
    key: 'disease',
    title: 'Pandemics and disease',
    cards: [
      "`pandemic` (group disease, danger, no parent, worst-by-2100): the deadliest pandemic before 2100, as the share of humanity it kills (log axis). Cover how often pandemics of each size have occurred (for example Marani et al. 2021), up to the scale of the 1918 flu and beyond.",
      "`engineered_pandemic` (disease, danger, parent pandemic, worst-by-2100): the deadliest pandemic from an accident or a non-state release before 2100. Use published expert and forecaster estimates. Do not describe methods.",
      "`amr_deaths` (disease, danger, no parent): deaths a year attributable to drug-resistant bacteria, as a share of humanity or per 100,000, with the published forecasts to 2050.",
    ],
    extra: '',
  },
  {
    key: 'fuels',
    title: 'Energy and fuels',
    cards: [
      "`energy_supply` (group resources, danger, no parent): world energy use per person in 2100, against today. It is the top card of this cause. Present the link between energy and living standards the way Jancovici and the Shift Project argue it, attributed to them, and what a sustained fall in energy per person would mean.",
      "`oil` (resources, danger, parent energy_supply): world oil production. Check when conventional crude peaked according to the IEA (the owner cites 2008), what has filled the gap since, and the falling energy return of harder oil. Give reserves over production as years, with the arithmetic.",
      "`gas` (resources, danger or none, parent energy_supply): natural gas, including how concentrated exports are and Europe's dependence.",
      "`coal` (resources, none, parent energy_supply): coal, where scarcity is not the issue and climate is.",
      "`uranium` (resources, none, parent energy_supply): uranium resources against demand, including what fast reactors or seawater extraction would change.",
    ],
    extra: 'For each fuel, say why it matters, how many years of reserves remain at current production (show the division), and how exposed importers are to being cut off.',
  },
  {
    key: 'minerals',
    title: 'Metals and minerals',
    cards: [
      "`copper` (group resources, danger or none): copper.",
      "`lithium` (resources, danger or none): lithium.",
      "`nickel` (resources, danger or none): nickel.",
      "`cobalt` (resources, danger or none): cobalt.",
      "`rare_earths` (resources, danger or none): rare earth elements.",
      "`phosphate` (resources, danger): phosphate rock, which feeds the fertiliser that feeds people.",
      "`mineral_concentration` (resources, none): how concentrated the refining of critical minerals is in the top three countries.",
    ],
    extra: 'For each material: why it matters and what depends on it, years of reserves at current production (show the division, from the USGS Mineral Commodity Summaries), the share of the top three producers or refiners (the risk of being cut off), the demand outlook to 2040 or 2050 (IEA Global Critical Minerals Outlook), and how far recycling and substitution can go. A suggested metric is the worst sustained shortfall of supply against demand before 2100, as a percentage of demand (statistic worst-by-2100); choose a better one if you find it. Be honest about the scale: a metal shortage slows the energy transition and raises prices, which is rarely more than level 1 on its own, while phosphate touches food.',
  },
  {
    key: 'energy-tech',
    title: 'Energy technologies',
    cards: [
      "`solar_storage` (group technology, scale potential, no parent): solar and wind with storage, measured by their share of world electricity or energy in 2100.",
      "`solar_price` (technology, none, parent solar_storage): the cost of solar electricity.",
      "`battery_price` (technology, none, parent solar_storage): the price of battery packs.",
      "`clean_investment` (technology, none, parent solar_storage): yearly investment in clean energy against fossil fuels.",
      "`fission` (technology, potential): nuclear fission, including small and fast reactors, by its share of world electricity or energy in 2100.",
      "`fusion` (technology, potential): fusion power, by its share of world electricity in 2100. Cover where the science stands (records, ITER and private projects) and what remains between a net-energy shot and a power plant.",
      "`geothermal` (technology, potential): enhanced and deep geothermal.",
    ],
    extra: 'These cards use the potential scale. For each, write the explainer section on superintelligence as a short scenario: suppose superintelligence arrives; what does it unlock quickly (design, materials, control), and what still takes years (building plants, mining, grids, permits)? Give `counters` (the root causes it pushes against, usually resources and climate).',
  },
  {
    key: 'other-tech',
    title: 'Other technologies',
    cards: [
      "`desalination` (group technology, potential): making fresh water from the sea, by cost or by the share of humanity it supplies.",
      "`food_tech` (technology, potential): precision fermentation, cultivated meat and higher-yield crops.",
      "`medicine` (technology, potential): drug discovery and medicine. Cover why clinical trials and regulation limit how fast even a perfect drug designer changes health.",
      "`robots` (technology, potential): robots that do physical work, by number or by share of physical labour done.",
      "`carbon_removal` (technology, potential): removing CO₂ from the air, in gigatonnes a year, against what the IPCC pathways need. Show the energy this takes as an order of magnitude.",
      "`materials` (technology, potential): AI-driven discovery of materials (batteries, catalysts, superconductors).",
    ],
    extra: 'These cards use the potential scale. For each, write the explainer section on superintelligence as a short scenario: suppose superintelligence arrives; what does it unlock quickly, and what still takes years (factories, trials, regulation, energy)? Give `counters` (the root causes it pushes against).',
  },
  {
    key: 'superintelligence',
    title: 'Superintelligence',
    cards: [
      "`ai_takeover` (group ai, danger, no parent, worst-by-2100): the worst harm done by AI systems acting on their own before 2100, as the share of humanity killed or permanently disempowered. It is the top card of this cause. AI used as a weapon by people belongs to war or disease, not here. The existing explainer `ai_loss_of_control.md` holds verified estimates (expert surveys, forecasting tournaments, Metaculus); re-check them and use them for the curve. Write your explainer as `ai_takeover.md`.",
      "`ai_progress_index` (ai, none, parent ai_takeover): the Artificial Analysis Progress Index of the best model. Read https://artificialanalysis.ai/methodology/progress-index and https://artificialanalysis.ai/trends. Known facts to verify: it is an item-response-theory scale on which a fixed gap multiplies a model's odds of solving a task by the same factor; o3-mini (high) is anchored at 220 and GPT-5.5 (xhigh) at 320; the best model scored about 125 in November 2022 and about 355 in November 2026, close to a straight line. The key research question is which index level would count as superintelligence (AI that outperforms the best humans at virtually every cognitive task). Work it out from how the scale is built and from comparable work (the Epoch Capabilities Index, METR's task horizons), give it as a range with your reasoning, and put the low, middle and high values as `marks`. Explain plainly why this is the uncertain step.",
      "`ai_horizon` (ai, none, parent ai_takeover): the length of tasks the best AI completes on its own (METR), and its doubling time.",
    ],
    extra: '',
  },
  {
    key: 'living',
    title: 'How people live',
    cards: [
      "`living_standard` (group living, none): real household consumption per person, as an index where today's rich-world (high-income countries) average is 100. Give the world average today. Marks: the world today, the rich world today (100), and abundance (500). In the explainer, work out what five times the rich world's consumption would mean physically, as orders of magnitude (energy per person, materials), and how much rich countries' living standards grew over the last 75 years and at what yearly rate.",
      "`energy_per_person` (living, none): primary energy use per person, world and rich-world.",
      "`healthy_life_years` (living, none): healthy life expectancy at birth (WHO).",
      "`floor_area` (living, none): home floor area per person, for the countries that measure it.",
      "`free_time` (living, none): hours worked a year per worker.",
      "`essentials_cost_world` (living, none): the cost of the five essentials as a share of world income (existing estimate: re-check and explain how it is built).",
      "`electricity_access_world` (living, none): the share of humanity with electricity.",
      "`water_access_world` (living, none): the share of humanity with safely managed drinking water.",
      "`undernourishment_world` (living, none): the share of humanity that is undernourished.",
      "`life_expectancy_world` (living, none): life expectancy at birth, with the UN projection to 2100.",
      "`population` (living, none): world population, with the UN probabilistic projection to 2100 (its percentiles are published curve points).",
      "`aging_world` (living, none): people aged 65 and over per 100 of working age, world, with the UN projection.",
    ],
    extra: 'These are plain measures (scale none). The UN World Population Prospects publish percentiles for 2100: use them as published curve points wherever they exist.',
  },
]

const RESEARCH_SCHEMA = {
  type: 'object',
  properties: {
    cards: { type: 'array', items: { type: 'string' } },
    unverified: { type: 'array', items: { type: 'string' } },
    earlierDataErrors: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['cards', 'unverified', 'earlierDataErrors'],
}

const CHECK_SCHEMA = {
  type: 'object',
  properties: {
    corrections: { type: 'array', items: { type: 'string' } },
    remainingDoubts: { type: 'array', items: { type: 'string' } },
    checkerPasses: { type: 'boolean' },
  },
  required: ['corrections', 'remainingDoubts', 'checkerPasses'],
}

const CALIBRATION_SCHEMA = {
  type: 'object',
  properties: {
    changes: { type: 'array', items: { type: 'string' } },
    concerns: { type: 'array', items: { type: 'string' } },
  },
  required: ['changes', 'concerns'],
}

const intro = `You are working on Doom Analysis, in the repository at ${ROOT}. First read research/v0.3/brief.md in full, then the types Card, Band, CurvePoint and Mark in src/model/types.ts. The brief is your contract.`

const researchPrompt = (g) => `${intro}

Your group: ${g.title}.
Your card file: src/data/cards/${g.key}.ts
Your cards, with the ids you must use:
${g.cards.map((c) => '- ' + c).join('\n')}
${g.extra ? '\n' + g.extra + '\n' : ''}
An earlier attempt at this group was interrupted. If your card file or some explainers already exist, read them first and continue from there: keep what you can verify, fix or replace the rest.

Research each card on the web, write the card file and one explainer per card, and run the checker from the brief until it reports no problems. Write only those files. Return the card ids you wrote, anything you could not verify, and anything in the earlier data you found to be wrong.`

const checkPrompt = (g) => `${intro}

You are the independent checker for the group "${g.title}". Another agent has just written src/data/cards/${g.key}.ts and the explainers src/content/explainers/<id>.md for these cards: ${g.cards.map((c) => c.split('`')[1]).join(', ')}.

Assume nothing in those files is right until you have seen it yourself. The research may have been interrupted: if a card listed in the brief for this group is missing, or a card has no explainer, research and write it yourself following the brief.

The cards this group must contain:
${g.cards.map((c) => '- ' + c).join('\n')}
${g.extra ? '\n' + g.extra + '\n' : ''}
1. For every number, every curve point, every band that is marked published or derived, and every source link in the card file and the explainers: open the source and confirm it says that. Re-do every calculation shown.
2. Fix what is wrong, directly in those files. Remove a claim you cannot verify. Correct a basis that is overstated (a band marked published that the source does not state becomes derived or judged).
3. Judge each band against the danger scale (or the potential scale) in the brief. Would this value really cost that share of humanity its life or its decent living conditions, through this factor alone? Fix levels that are inflated or too low, and say why in the explainer. A sub-card must never mean more danger than its parent at the equivalent value.
4. Check that each \`wikipedia\` title exists and that the opening section of that article is about the card's subject. Check that no sentence in the explainers is copied from a source.
5. Check the explainers follow the structure and length in the brief, in plain English, with every claim linked and every link listed in the front matter.
6. Run: node --experimental-strip-types scripts/check-cards.ts src/data/cards/${g.key}.ts  — until it reports no problems.

Edit only that card file and those explainers. Do not commit. Return the corrections you made, the doubts that remain, and whether the checker script passes.`

phase('Research')
const results = await pipeline(
  GROUPS,
  (g) =>
    (args?.written ?? []).includes(g.key)
      ? { cards: [], unverified: [], earlierDataErrors: [], notes: 'Card file written by an interrupted run; checked in the next stage.' }
      : agent(researchPrompt(g), { label: `research:${g.key}`, phase: 'Research', schema: RESEARCH_SCHEMA, agentType: 'general-purpose', model: 'opus' }),
  (research, g) =>
    agent(checkPrompt(g), { label: `check:${g.key}`, phase: 'Check', schema: CHECK_SCHEMA, agentType: 'general-purpose', model: 'opus' }).then((check) => ({ group: g.key, research: research, check: check })),
)

const done = results.filter(Boolean)
log(`${done.length} of ${GROUPS.length} groups researched and checked`)

phase('Calibrate')
const calibration = await agent(
  `${intro}

You are the calibration reviewer. Thirteen groups of cards have been written and checked separately, in src/data/cards/*.ts, so their danger bands were set by different people. Your job is to make them comparable, because the whole point of the common scale is that a level 3 on one card means the same as a level 3 on another.

1. Read every card file. Build a table of every band of every card with scale danger or potential: card, range, level, basis.
2. Compare them against the scale definition in the brief and against each other. Look for: the same real-world harm given different levels on different cards; a sub-card that means more danger than its parent at the equivalent value (for example a sea-level band above what the matching warming band says); levels that are too high for hazards that are local or slow; levels that are too low for hazards that the evidence says could harm billions; potential levels that are generous for technologies that cannot scale by 2100.
3. Fix clear inconsistencies in the card files, and adjust the matching "What each level looks like" bullets in src/content/explainers/<id>.md. Change a level only when you can say why in one sentence. A band you change becomes basis judged unless a source states it. Leave everything else alone: numbers, sources and curve points are not your job.
4. After your edits, run for each file you changed: node --experimental-strip-types scripts/check-cards.ts src/data/cards/<file>.ts

Do not commit. Return the list of changes (card, band, old level, new level, reason) and any concern you could not resolve.`,
  { label: 'calibrate', phase: 'Calibrate', schema: CALIBRATION_SCHEMA, agentType: 'general-purpose', model: 'opus' },
)

return { groups: done, missing: GROUPS.filter((g) => !done.some((d) => d.group === g.key)).map((g) => g.key), calibration: calibration }
