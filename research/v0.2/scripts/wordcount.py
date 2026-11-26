import re
import sys

for path in sys.argv[1:]:
    text = open(path).read()
    parts = text.split("---")
    body = "---".join(parts[2:])
    body = re.sub(r"\]\([^)]*\)", "]", body)
    body = re.sub(r"[#*\[\]]", " ", body)
    print(path.split("/")[-1], len(body.split()))
