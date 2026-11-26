import PyCO2SYS as pyco2

for fco2 in [420.0, 440.0, 460.0, 480.0, 500.0, 520.0, 540.0, 560.0]:
    result = pyco2.sys(par1=2300.0, par2=fco2, par1_type=1, par2_type=5, salinity=35.0, temperature=19.3)
    box = float(result["saturation_aragonite"])
    print(f"fCO2={fco2:.0f} box={box:.2f} scaled_x1.08={box * 1.08:.2f}")
