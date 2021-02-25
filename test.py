
print("App name:")
appname = "textwrite"
print(appname)
print("Getting version - please wait...")
version = open("version.txt")
if version != "1.0.0":
  print("Opening textwrite.tw...")
  filename = open("textwrite.tw","r")
  print("-----------")
  print(filename.read())
else:
  print("Version not supported, please upgrade.")
