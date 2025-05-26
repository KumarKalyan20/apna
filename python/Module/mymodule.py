#Create a Module
def greeting(name):
  print("Hello, " + name)

#Use a Module
import mymodule

mymodule.greeting("Jonathan")

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}

import mymodule
a = mymodule.person1["age"]
print(a)

def greeting(name):
  print("Hello, " + name)

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}

