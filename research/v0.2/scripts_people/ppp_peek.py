import sys

import openpyxl

wb = openpyxl.load_workbook(filename=sys.argv[1], read_only=True)
print(wb.sheetnames)
for name in wb.sheetnames[:2]:
    ws = wb[name]
    ws.reset_dimensions()
    for i, row in enumerate(ws.iter_rows(values_only=True, max_row=20)):
        if i >= 9:
            print(name, i, [c for c in row][:16], "... len", len(row))
