import sys
import yaml

for path in sys.argv[1:]:
    text = open(path).read()
    front = text.split("---")[1]
    try:
        data = yaml.safe_load(front)
        print(path.split("/")[-1], "OK", data["factor"], len(data["sources"]))
    except yaml.YAMLError as error:
        print(path.split("/")[-1], "ERROR", str(error).splitlines()[0])
