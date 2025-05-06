# Exercise 3: While Loop

#! Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "imane"

user_name = input('enter ur name : ')

while user_name != my_name:
    print("we dont have the same name")
    user_name = input('enter ur name : ')
    break