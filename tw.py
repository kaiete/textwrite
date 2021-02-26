print("App name:")
appname = "textwrite"
print(appname)
print("Getting version - please wait...")
version = open("version.txt")
if version != "1.0.0":
  print("Version supported, please enter name of file to open or help for help")
  filename = input("Filename wrapped in quotes: ")
  filecontents = open(filename)
  print(filecontents.read())
else:
  print("Version not supported, please upgrade.")
