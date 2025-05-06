
#* Exercise 1
name = "Alice"

age = 30

city = "New York"

# Hello, Alice! You are 30 years old and live in New York.
print(f"hello, {name}! you are {age} years old and live in {city}")

#* Exercise 2

user_age = int(input("Enter your age: "))

years_until_100 = 100 - user_age
print(f"You will be 100 years old in {years_until_100} years.")


#* Exercise 3
# 1. ask the user to enter his/her name
user_name = input("what's ur name?")


# 2. use the len() function to check the lenght of the name. 
# if it is less than 5 letter print('You have a short name )

if len(user_name) < 5:
    print ("u have a short name")


#* exercise 4
# Accept a number from the user and print its multiplication table
user_number = int(input("Enter a number: "))
for i in range(1,11) :
    print(f"{user_number} x {i} = {user_number * i}")


#! test
active = True

while active: 
    city = input("Please enter the name of a city you have visited (enter 'quit' when you are finished): ")
    if city == 'quit':
        active = False
    elif city == 'leave me alone':
        active = False
    elif city == 'stop':
        active = False
    else:
        print("I'd love to go to", city)

print("Goodbye !")
