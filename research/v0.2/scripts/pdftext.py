import re
import sys
import zlib
from pathlib import Path


def streams(data: bytes) -> list[bytes]:
    out: list[bytes] = []
    for match in re.finditer(rb"stream\r?\n", data):
        start = match.end()
        end = data.find(b"endstream", start)
        if end == -1:
            continue
        raw = data[start:end]
        try:
            out.append(zlib.decompress(raw))
        except zlib.error:
            try:
                out.append(zlib.decompressobj().decompress(raw))
            except zlib.error:
                continue
    return out


def main(path: Path) -> None:
    data = path.read_bytes()
    decoded = streams(data=data)
    cmap_count = sum(1 for s in decoded if b"beginbfchar" in s or b"beginbfrange" in s)
    text_count = sum(1 for s in decoded if b"Tj" in s or b"TJ" in s)
    objstm = sum(1 for s in decoded if b"/Type/ObjStm" in s)
    print(len(decoded), "streams; cmaps", cmap_count, "text streams", text_count, "objstm", objstm)
    for s in decoded[:400]:
        if b"TJ" in s or b"Tj" in s:
            print(s[:600])
            break


if __name__ == "__main__":
    main(path=Path(sys.argv[1]))
