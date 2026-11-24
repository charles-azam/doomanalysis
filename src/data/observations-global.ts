import type { Observation } from '../model/types.ts'

const wmo = 'https://library.wmo.int/records/item/69807-state-of-the-global-climate-2025'
const phc = 'https://publications.pik-potsdam.de/pubman/item/item_35009/component/file_35022/PlanetaryHealthCheck2026.pdf'
const wb = (code: string) => `https://data.worldbank.org/indicator/${code}?locations=1W`

/** Global values from the November 2026 research pass. Each one was read on its source page or data file. */
export const globalObservations: Observation[] = [
  // The cost of the five essentials, public and private, as a share of GDP (the abundance baseline)
  { factorId: 'essentials_cost', entity: 'FRA', value: 27.1, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 26.5\u201334.3%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'DEU', value: 26.6, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 25.9\u201332.7%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'GBR', value: 24.4, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 23.9\u201330.8%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'SWE', value: 25.1, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 24.4\u201331.8%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'NOR', value: 19.7, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 19.3\u201324.1%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'USA', value: 28.8, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 28.3\u201334.3%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'JPN', value: 25.0, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 24.2\u201330.4%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'CHN', value: 18.5, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 17.5\u201322.8%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'IND', value: 31.2, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 28.7\u201339.1%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'BRA', value: 30.7, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 28.4\u201338.0%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost', entity: 'NGA', value: 38.3, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 35.2\u201348.4%); food, household energy, water, all health care, military, police and courts" },
  { factorId: 'essentials_cost_world', entity: 'WLD', value: 26.1, year: 2025, source: 'Doom Analysis estimate from World Bank ICP, Eurostat, OECD and IMF data', url: 'https://databank.worldbank.org/source/icp-2021', note: "our estimate (range 23.8\u201335.8%); food, household energy, water, all health care, military, police and courts" },
  // Earth limits
  { factorId: 'warming', entity: 'WLD', value: 1.43, year: 2025, source: 'WMO State of the Global Climate 2025', url: wmo, note: '±0.13 °C; Copernicus ERA5 gives 1.47 °C; 2024 was 1.55 °C' },
  { factorId: 'co2', entity: 'WLD', value: 427.35, year: 2025, source: 'NOAA GML, Mauna Loa', url: 'https://gml.noaa.gov/ccgg/trends/' },
  { factorId: 'ocean_acidification', entity: 'WLD', value: 2.85, year: 2024, source: 'Planetary Health Check 2026', url: phc, note: 'just past the 2.86 boundary' },
  { factorId: 'permafrost', entity: 'WLD', value: 62.5, year: 2025, source: 'BAMS State of the Climate in 2025', url: 'https://doi.org/10.1175/BAMS-D-26-0123.1', note: '15 of 24 sites at a record high' },
  { factorId: 'arctic_sea_ice', entity: 'WLD', value: 4.6, year: 2026, source: 'NSIDC via NASA', url: 'https://science.nasa.gov/earth/earth-observatory/arctic-sea-ice-shrinks-to-its-2026-minimum/', note: 'same as 2025' },
  { factorId: 'biodiversity', entity: 'WLD', value: 73, year: 2026, source: 'WWF/ZSL Living Planet Report 2026', url: 'https://ourworldindata.org/data-insights/the-living-planet-index-reports-a-73-average-decline-in-studied-wildlife-populations', note: 'decline 1970–2022' },
  { factorId: 'planetary_boundaries', entity: 'WLD', value: 7, year: 2026, source: 'Planetary Health Check 2026', url: 'https://www.planetaryhealthcheck.org/' },
  { factorId: 'sea_level', entity: 'WLD', value: 11, year: 2025, source: 'WMO State of the Global Climate 2025', url: wmo, note: 'rising 4.75 mm a year in 2012–2025, against 2.65 mm in 1993–2011' },
  { factorId: 'amoc', entity: 'WLD', value: 17.1, year: 2024, source: 'RAPID-MOCHA', url: 'https://rapid.ac.uk/data/integrated-transports', note: 'trend −0.9 ± 0.7 Sv per decade' },
  // Resources
  { factorId: 'mineral_concentration', entity: 'WLD', value: 72, year: 2025, source: 'IEA Global Critical Minerals Outlook 2026, via Anadolu Agency', url: 'https://aa.com.tr/en/economy/explainer-why-the-iea-says-critical-minerals-have-become-a-65-trillion-economic-security-risk/4000476', note: 'excludes rare earths; IEA pages block automated reading, so confirmed via a news report' },
  { factorId: 'copper_gap', entity: 'WLD', value: 25, year: 2035, source: 'IEA Global Critical Minerals Outlook 2026, via Anadolu Agency', url: 'https://aa.com.tr/en/economy/explainer-why-the-iea-says-critical-minerals-have-become-a-65-trillion-economic-security-risk/4000476', note: 'projection; 30% in the 2025 edition' },
  // War and displacement
  { factorId: 'nuclear_warheads', entity: 'WLD', value: 12187, year: 2026, source: 'SIPRI Yearbook 2026', url: 'https://www.sipri.org/sites/default/files/2026-06/yb26_summary_en_1.pdf', note: '4,012 deployed' },
  { factorId: 'armed_conflicts', entity: 'WLD', value: 65, year: 2025, source: 'UCDP, Uppsala University', url: 'https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states', note: 'record since 1946' },
  { factorId: 'forced_displacement', entity: 'WLD', value: 117.8, year: 2025, source: 'UNHCR Global Trends 2026, via AFP', url: 'https://www.geo.tv/latest/668187-number-of-forcibly-displaced-people-dips-to-118-million-un', note: 'down 5.4 million from the end-2024 record' },
  // Disease
  { factorId: 'amr_deaths', entity: 'WLD', value: 1.14, year: 2021, source: 'GRAM study, The Lancet 2024', url: 'https://www.eurekalert.org/news-releases/1057804', note: '39 million projected for 2025–2050' },
  { factorId: 'pandemic', entity: 'WLD', value: 0.19, year: 2021, source: 'WHO excess-death estimate for COVID-19', url: 'https://www.who.int/news/item/05-05-2022-14.9-million-excess-deaths-were-associated-with-the-COVID-19-pandemic-in-2020-and-2021', note: '14.9 million excess deaths in 2020–2021, out of 7.9 billion people' },
  // Clean-energy counterforces
  { factorId: 'solar_price', entity: 'WLD', value: 0.114, year: 2026, source: 'InfoLink module spot price', url: 'https://www.infolink-group.com/spot-price/', note: 'TOPCon modules, mid-November 2026' },
  { factorId: 'battery_price', entity: 'WLD', value: 108, year: 2025, source: 'BloombergNEF battery price survey', url: 'https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour', note: '$115 in 2024' },
  { factorId: 'clean_investment', entity: 'WLD', value: 64.7, year: 2026, source: 'IEA World Energy Investment 2026, via Down To Earth', url: 'https://www.downtoearth.org.in/energy/clean-energy-investment-saved-fuel-importers-260-billion-in-2025-iea', note: '$2.2 trillion clean vs $1.2 trillion fossil, IEA estimate' },
  // AI
  { factorId: 'ai_horizon', entity: 'WLD', value: 40, year: 2026, source: 'METR capability update, November 2026', url: 'https://metr.org/blog/2026-11-20-q4-2026-capability-update/', note: 'best model on METR’s harder combined task set; 95% interval 13–2,645 h' },
  // The five essentials, world averages
  { factorId: 'electricity_access_world', entity: 'WLD', value: 91.9, year: 2024, source: 'World Bank (SDG 7.1.1)', url: wb('EG.ELC.ACCS.ZS') },
  { factorId: 'water_access_world', entity: 'WLD', value: 73.7, year: 2024, source: 'WHO/UNICEF JMP via World Bank', url: wb('SH.H2O.SMDW.ZS') },
  { factorId: 'undernourishment_world', entity: 'WLD', value: 7.8, year: 2025, source: 'FAO SOFI 2026', url: 'https://www.fao.org/newsroom/detail/un-report--global-hunger-levels-ease-for-third-consecutive-year-as-regional-disparities-persist/en', note: '645 million people' },
  { factorId: 'life_expectancy_world', entity: 'WLD', value: 73.5, year: 2024, source: 'World Bank', url: wb('SP.DYN.LE00.IN') },
]
