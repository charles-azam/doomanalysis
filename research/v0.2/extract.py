import sys
from pypdf import PdfReader
r = PdfReader(sys.argv[1])
with open(sys.argv[2], 'w') as out:
    for i, p in enumerate(r.pages):
        out.write(f'\n=== PAGE {i+1} ===\n' + (p.extract_text() or ''))
print(len(r.pages))
