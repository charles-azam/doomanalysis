import sys

import openpyxl

wb = openpyxl.load_workbook(filename=sys.argv[1], read_only=True)
ws = wb["Median"]
ws.reset_dimensions()
for i, row in enumerate(ws.iter_rows(values_only=True, max_row=22)):
    if i >= 8:
        print(i, row)
