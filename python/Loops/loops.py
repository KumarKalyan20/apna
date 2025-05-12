# While loop
i = 1
while i < 6:
  print(i)
  i += 1

 #break Statement
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1

#continue Statement
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)

i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")

#For Loops
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)


#Looping Through a String

for x in "banana":
  print(x)

#break Statement

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break
  
#continue Statement
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)

# range() Function

for x in range(6):
  print(x)

for x in range(2, 6):
  print(x)

for x in range(6):
  print(x)
else:
  print("Finally finished!")

#Nested Loops

adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)


