import PyCO2SYS as pyco2

# Simple single-box surface ocean: total alkalinity, salinity held fixed; temperature varied.
cases: list[tuple[str, float, float, float]] = [
    ("1750 (278 ppm)", 278.0, 17.5, 3.6),
    ("2010 (389 ppm)", 380.0, 18.2, 3.0),
    ("2024 (~422 ppm)", 410.0, 18.5, 2.85),
    ("2100 SSP1-1.9 (393 ppm)", 385.0, 18.7, 2.9),
    ("2100 SSP2-4.5 (fCO2 573)", 573.0, 19.6, None),
    ("2100 SSP5-8.5 (1135 ppm)", 1080.0, 21.0, 1.6),
]
for label, fco2, temperature, published in cases:
    result = pyco2.sys(
        par1=2300.0,
        par2=fco2,
        par1_type=1,
        par2_type=5,
        salinity=35.0,
        temperature=temperature,
    )
    print(f"{label:30s} omega_arag={float(result['saturation_aragonite']):.2f} published={published}")
