import sys
from openpyxl import load_workbook

workbook = load_workbook(filename=sys.argv[1], read_only=True)
for sheet in workbook.worksheets:
    print("SHEET", sheet.title, sheet.max_row, sheet.max_column)
    for index, row in enumerate(sheet.iter_rows(values_only=True)):
        print("  ", row[:14])
        if index >= 4:
            break
