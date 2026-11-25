from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    """One measured value and the year it refers to."""

    value: float
    year: int


@dataclass(frozen=True)
class Country:
    iso3: str
    iso2: str
    name: str
    sub_region: str


@dataclass(frozen=True)
class Region:
    id: str
    name: str
    sub_regions: tuple[str, ...]


@dataclass(frozen=True)
class IndicatorSpec:
    """How one factor is sourced: where its values come from and how to cite them per country."""

    factor_id: str
    source: str
    url_template: str
    decimals: int


@dataclass(frozen=True)
class Observation:
    factor_id: str
    entity: str
    value: float
    year: int
    source: str
    url: str
    note: str | None


@dataclass(frozen=True)
class Projection:
    factor_id: str
    entity: str
    value: float
    year: int
    scenario: str
    source: str
    url: str


@dataclass(frozen=True)
class Entity:
    id: str
    kind: str
    name: str
    slug: str
    iso2: str | None
    region: str | None
    population: float
    spotlight: bool


@dataclass(frozen=True)
class RawInputs:
    """Everything fetched or parsed from the sources, before any aggregation."""

    countries: list[Country]
    population: dict[str, Point]
    indicators: dict[str, dict[str, Point]]
    projections: dict[str, dict[str, Point]]
    # Consumption per person of the World Bank high-income aggregate: the living standard's 100.
    high_income_consumption: Point
    # People in 2100 by ISO3 code, plus the world total under "WLD".
    population_2100: dict[str, int]


@dataclass(frozen=True)
class Dataset:
    entities: list[Entity]
    observations: list[Observation]
    projections: list[Projection]
    # World ("WLD") and high-income ("HIC") values of the living-standard and AI-access measures: printed by the run, not written.
    benchmarks: list[Observation]
    # People in 2100 for the world, every region and every published country.
    population_2100: dict[str, int]
