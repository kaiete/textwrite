print("App name:")
appname = "textwrite"
print(appname)
print("Getting version - please wait...")
version = open("version.txt")
if version != "1.0.0":
  print("Version supported, please enter name of file to open or help for help")
  filename = input("Filename: ")
  if filename == "help":
    print("Filename can be either /example.txt, which would look for example.txt in root directory, or example.txt, which will look for example.txt in this directory.")
  elif filename == "":
    print("Filename can be either /example.txt, which would look for example.txt in root directory, or example.txt, which will look for example.txt in this directory.")
  else:
    filecontents = open(filename)
else:
  print("Version not supported, please upgrade.")
    

