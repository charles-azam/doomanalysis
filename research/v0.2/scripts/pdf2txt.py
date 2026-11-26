import sys
from pypdf import PdfReader

reader = PdfReader(sys.argv[1])
with open(sys.argv[2], "w") as out:
    for index, page in enumerate(reader.pages):
        out.write(f"\n=== PAGE {index + 1} ===\n")
        out.write(page.extract_text() or "")
print(len(reader.pages))
