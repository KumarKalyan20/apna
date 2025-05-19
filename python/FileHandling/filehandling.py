#File Handling Syntax
f = open("demofile.txt")

f = open("demofile.txt")
print(f.read())

f = open("D:\\myfiles\welcome.txt")
print(f.read())

with open("demofile.txt") as f:
  print(f.read())

#Python File Write
with open("demofile.txt", "a") as f:
  f.write("Now the file has more content!")

#open and read the file after the appending:
with open("demofile.txt") as f:
  print(f.read())

with open("demofile.txt", "w") as f:
  f.write("Woops! I have deleted the content!")

#open and read the file after the overwriting:
with open("demofile.txt") as f:
  print(f.read())

#Python Delete File

import os
os.remove("demofile.txt")

import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")


