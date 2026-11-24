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
]

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
