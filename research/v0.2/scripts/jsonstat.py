import itertools
import json
import sys
from pathlib import Path


def flatten(path: Path) -> list[tuple[dict[str, str], float]]:
    data = json.loads(path.read_text())
    ids: list[str] = data["id"]
    sizes: list[int] = data["size"]
    dims = data["dimension"]
    index_lists: list[list[str]] = []
    for dim_id in ids:
        cat_index = dims[dim_id]["category"]["index"]
        ordered = sorted(cat_index, key=lambda key: cat_index[key])
        index_lists.append(ordered)
    rows: list[tuple[dict[str, str], float]] = []
    values = data["value"]
    for flat, combo in enumerate(itertools.product(*index_lists)):
        if str(flat) in values:
            rows.append((dict(zip(ids, combo)), values[str(flat)]))
    _ = sizes
    return rows


if __name__ == "__main__":
    for row, value in flatten(path=Path(sys.argv[1])):
        keep = {k: v for k, v in row.items() if k not in ("freq",)}
        print("\t".join(f"{k}={v}" for k, v in keep.items()), value, sep="\t")
