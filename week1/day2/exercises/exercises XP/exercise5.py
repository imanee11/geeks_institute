# 🌟 Exercise 5 : Random
import random

def guess_number(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number :
        print('u guessed the number')
    else :
        print('try again')
        print (f"ur number: {user_number}")
        print(f"the random number: {random_number}")
        
guess_number(3)