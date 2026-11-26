import sys
from pathlib import Path

from pypdf import PdfReader

reader = PdfReader(sys.argv[1])
parts = [f"\n=== PAGE {i + 1} ===\n" + (page.extract_text() or "") for i, page in enumerate(reader.pages)]
Path(sys.argv[2]).write_text("".join(parts))
print(len(reader.pages))
