from doom_pipeline.models import IndicatorSpec, Region

WORLD_BANK = "https://data.worldbank.org/indicator/{code}?locations={iso2}"


def world_bank(*, factor_id: str, code: str, source: str, decimals: int) -> IndicatorSpec:
    return IndicatorSpec(
        factor_id=factor_id,
        source=source,
        url_template=WORLD_BANK.replace("{code}", code),
        decimals=decimals,
    )


# World Bank API codes for each factor. Source 3 is the Worldwide Governance Indicators.
WORLD_BANK_CODES: dict[str, tuple[str, int | None]] = {
    "electricity_access": ("EG.ELC.ACCS.ZS", None),
    "water_access": ("SH.H2O.SMDW.ZS", None),
    "undernourishment": ("SN.ITK.DEFC.ZS", None),
    "life_expectancy": ("SP.DYN.LE00.IN", None),
    "aging": ("SP.POP.DPND.OL", None),
    "fertility": ("SP.DYN.TFRT.IN", None),
    "wealth": ("NY.GDP.PCAP.PP.CD", None),
    "migrant_share": ("SM.POP.TOTL.ZS", None),
    "food_insecurity": ("SN.ITK.MSFI.ZS", None),
    "homicide_rate": ("VC.IHR.PSRC.P5", None),
    "energy_imports": ("EG.IMP.CONS.ZS", None),
    "interest_burden": ("GC.XPN.INTP.RV.ZS", None),
    "health_spending": ("SH.XPD.CHEX.GD.ZS", None),
    "military_spending": ("MS.MIL.XPND.GD.ZS", None),
    "political_stability": ("GOV_WGI_PV.EST", 3),
    "government_effectiveness": ("GOV_WGI_GE.EST", 3),
}

# Household consumption per person in 2021 international dollars, and the UHC service coverage index
# (SH.UHC.SRVS.CV.XD until the World Bank archived that code).
CONSUMPTION_CODE = "NE.CON.PCAP.PP.KD"
HEALTH_COVERAGE_CODE = "SH_UHC_SCI"
# The World Bank aggregate whose consumption per person is the living standard's 100.
HIGH_INCOME = "HIC"

# How people live (v0.3). They do not count toward MIN_FACTORS, so the set of published countries stays the judged one.
LIVING_FACTORS: tuple[str, ...] = (
    "consumption_per_person",
    "living_standard",
    "energy_per_person",
    "healthy_life_years",
    "health_coverage",
    "hours_worked",
    "feel_safe",
)

# AI access (v0.4): proxies for how much AI a country's people use. Like the living factors, they do not
# count toward MIN_FACTORS.
AI_FACTORS: tuple[str, ...] = ("ai_use", "ai_usage_index")

SPECS: list[IndicatorSpec] = [
    world_bank(factor_id="electricity_access", code="EG.ELC.ACCS.ZS", source="World Bank (SDG 7.1.1)", decimals=1),
    world_bank(factor_id="water_access", code="SH.H2O.SMDW.ZS", source="WHO/UNICEF JMP via World Bank", decimals=1),
    world_bank(factor_id="undernourishment", code="SN.ITK.DEFC.ZS", source="FAO via World Bank", decimals=1),
    world_bank(factor_id="life_expectancy", code="SP.DYN.LE00.IN", source="World Bank", decimals=1),
    world_bank(factor_id="aging", code="SP.POP.DPND.OL", source="UN WPP via World Bank", decimals=1),
    world_bank(factor_id="fertility", code="SP.DYN.TFRT.IN", source="World Bank", decimals=2),
    world_bank(factor_id="wealth", code="NY.GDP.PCAP.PP.CD", source="World Bank (ICP)", decimals=0),
    world_bank(factor_id="migrant_share", code="SM.POP.TOTL.ZS", source="UN DESA via World Bank", decimals=1),
    world_bank(factor_id="food_insecurity", code="SN.ITK.MSFI.ZS", source="FAO via World Bank", decimals=1),
    world_bank(factor_id="homicide_rate", code="VC.IHR.PSRC.P5", source="UNODC via World Bank", decimals=1),
    world_bank(factor_id="energy_imports", code="EG.IMP.CONS.ZS", source="IEA via World Bank", decimals=0),
    world_bank(factor_id="interest_burden", code="GC.XPN.INTP.RV.ZS", source="IMF GFS via World Bank", decimals=1),
    world_bank(factor_id="health_spending", code="SH.XPD.CHEX.GD.ZS", source="WHO via World Bank", decimals=1),
    world_bank(factor_id="military_spending", code="MS.MIL.XPND.GD.ZS", source="SIPRI via World Bank", decimals=1),
    IndicatorSpec(
        factor_id="political_stability",
        source="Worldwide Governance Indicators",
        url_template="https://www.worldbank.org/en/publication/worldwide-governance-indicators",
        decimals=2,
    ),
    IndicatorSpec(
        factor_id="government_effectiveness",
        source="Worldwide Governance Indicators",
        url_template="https://www.worldbank.org/en/publication/worldwide-governance-indicators",
        decimals=2,
    ),
    IndicatorSpec(
        factor_id="public_debt",
        source="IMF World Economic Outlook",
        url_template="https://www.imf.org/external/datamapper/GGXWDG_NGDP@WEO/{iso3}",
        decimals=1,
    ),
    IndicatorSpec(factor_id="peace", source="Global Peace Index 2026", url_template="https://gpi.economicsandpeace.org/", decimals=3),
    IndicatorSpec(
        factor_id="climate_vulnerability",
        source="ND-GAIN 2026 release",
        url_template="https://gain.nd.edu/our-work/country-index/",
        decimals=3,
    ),
    IndicatorSpec(factor_id="readiness", source="ND-GAIN 2026 release", url_template="https://gain.nd.edu/our-work/country-index/", decimals=3),
    IndicatorSpec(
        factor_id="water_stress",
        source="WRI Aqueduct 4.0",
        url_template="https://www.wri.org/data/aqueduct-40-country-rankings",
        decimals=2,
    ),
    world_bank(factor_id="consumption_per_person", code=CONSUMPTION_CODE, source="World Bank (ICP)", decimals=0),
    world_bank(factor_id="living_standard", code=CONSUMPTION_CODE, source="Doom Analysis index from World Bank (ICP) data", decimals=1),
    IndicatorSpec(
        factor_id="energy_per_person",
        source="Energy Institute and EIA via Our World in Data",
        url_template="https://ourworldindata.org/grapher/per-capita-energy-use",
        decimals=0,
    ),
    IndicatorSpec(
        factor_id="healthy_life_years",
        source="WHO Global Health Estimates",
        url_template="https://www.who.int/data/gho/data/indicators/indicator-details/GHO/gho-ghe-hale-healthy-life-expectancy-at-birth",
        decimals=1,
    ),
    world_bank(factor_id="health_coverage", code=HEALTH_COVERAGE_CODE, source="WHO via World Bank (SDG 3.8.1)", decimals=0),
    IndicatorSpec(
        factor_id="hours_worked",
        source="Penn World Table 11.0 via Our World in Data",
        url_template="https://ourworldindata.org/grapher/annual-working-hours-per-worker",
        decimals=0,
    ),
    IndicatorSpec(
        factor_id="feel_safe",
        source="Gallup Global Safety Report 2026",
        url_template="https://www.gallup.com/analytics/356996/gallup-global-safety-report.aspx",
        decimals=0,
    ),
    IndicatorSpec(
        factor_id="ai_use",
        source="Microsoft AI Economy Institute, AI Diffusion Report Q2 2026",
        url_template="https://github.com/microsoft/ai-diffusion-report/blob/507c31611c2af77abf44de43036f3ea1d599c248/data/AI_Diffusion_Q22026_Update.csv",
        decimals=1,
    ),
    IndicatorSpec(
        factor_id="ai_usage_index",
        source="Anthropic Economic Index, release of 26 June 2026 (Claude.ai, May 2026)",
        url_template="https://huggingface.co/datasets/Anthropic/EconomicIndex/tree/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/release_2026_06_26",
        decimals=2,
    ),
]

# Country names on Gallup's safety map that differ from the World Bank's.
GALLUP_NAMES: dict[str, str] = {
    "Hong Kong (S.A.R. of China)": "HKG",
    "Vietnam": "VNM",
    "South Korea": "KOR",
    "Egypt": "EGY",
    "United States of America": "USA",
    "Kyrgyzstan": "KGZ",
    "Somalia": "SOM",
    "Czech Republic": "CZE",
    "United Kingdom of Great Britain and Northern Ireland": "GBR",
    "Republic of Moldova": "MDA",
    "The Comoros": "COM",
    "Slovakia": "SVK",
    "Venezuela": "VEN",
    "Türkiye": "TUR",
    "State of Palestine": "PSE",
    "Côte d'Ivoire": "CIV",
    "Gambia": "GMB",
    "Lao People's Democratic Republic": "LAO",
    "THE DOMINICAN REPUBLIC": "DOM",
    "The Democratic Republic of the Congo": "COD",
    "The Republic of the Congo": "COG",
}
# Places Gallup surveys that the pipeline has no country for.
GALLUP_UNPUBLISHED: tuple[str, ...] = ("Kosovo", "Northern Cyprus", "Taiwan, Province of China")
# The Global Safety Report 2026 map shows the Gallup World Poll surveys of 2025.
GALLUP_SURVEY_YEAR = 2025

# Economy names in Microsoft's AI diffusion table that differ from the World Bank's.
MS_AI_NAMES: dict[str, str] = {
    "South Korea": "KOR",
    "Czech Republic": "CZE",
    "Vietnam": "VNM",
    "Slovakia": "SVK",
    "Bosnia And Herzegovina": "BIH",
    "Türkiye": "TUR",
    "Egypt": "EGY",
    "Cote D'Ivoire": "CIV",
    "Iran": "IRN",
    "Gambia": "GMB",
    "Venezuela": "VEN",
    "Kyrgyzstan": "KGZ",
    "Russia": "RUS",
    "Congo": "COG",
    "Congo (DRC)": "COD",
    "Laos": "LAO",
    "Somalia": "SOM",
    "Syria": "SYR",
}
# Economies in the table that the pipeline has no country for (French Guiana is part of France).
MS_AI_UNPUBLISHED: tuple[str, ...] = ("Taiwan", "French Guiana")
# The table's column for the latest period, and the year it falls in.
MS_AI_COLUMN = "Q2 2026 AI Diffusion"
MS_AI_YEAR = 2026
# The month of Claude.ai use the Anthropic AI Usage Index is read for: the latest in the release of 26 June 2026.
AEI_MONTH = "2026-05-01"

# UN M49 sub-regions grouped into the site's twelve regions.
REGIONS: list[Region] = [
    Region(id="europe-north", name="Northern Europe", sub_regions=("Northern Europe",)),
    Region(id="europe-west", name="Western Europe", sub_regions=("Western Europe",)),
    Region(id="europe-south", name="Southern Europe", sub_regions=("Southern Europe",)),
    Region(id="europe-east", name="Eastern Europe", sub_regions=("Eastern Europe",)),
    Region(id="north-america", name="North America", sub_regions=("Northern America",)),
    Region(id="latin-america", name="Latin America & Caribbean", sub_regions=("Latin America and the Caribbean",)),
    Region(id="mena", name="Middle East & North Africa", sub_regions=("Northern Africa", "Western Asia")),
    Region(id="sub-saharan-africa", name="Sub-Saharan Africa", sub_regions=("Sub-Saharan Africa",)),
    Region(id="central-south-asia", name="Central & South Asia", sub_regions=("Southern Asia", "Central Asia")),
    Region(id="east-asia", name="East Asia", sub_regions=("Eastern Asia",)),
    Region(id="southeast-asia", name="Southeast Asia", sub_regions=("South-eastern Asia",)),
    Region(id="oceania", name="Oceania", sub_regions=("Australia and New Zealand", "Melanesia", "Micronesia", "Polynesia")),
]

# Judged with three runs instead of one: the most populous countries plus Europe's majors.
SPOTLIGHT: tuple[str, ...] = (
    "FRA", "DEU", "GBR", "ITA", "ESP", "POL", "NLD", "SWE", "NOR", "UKR", "RUS", "TUR",
    "USA", "CAN", "MEX", "BRA", "ARG", "COL", "CHN", "JPN", "KOR", "IND", "PAK", "BGD",
    "IDN", "PHL", "VNM", "THA", "IRN", "SAU", "EGY", "NGA", "ETH", "COD", "KEN", "ZAF", "AUS",
)

# A country is published when it has a population and at least this many factor values.
MIN_FACTORS = 10
# A region gets a value for a factor only when countries with data hold this share of its people.
MIN_COVERAGE = 0.5
