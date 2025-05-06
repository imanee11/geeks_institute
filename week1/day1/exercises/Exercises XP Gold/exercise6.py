# Exercise 6: Random number
import random

#! Ask the user to input a number from 1 to 9 (including).
number = int(input("enter a number from 1 to 9: "))

#! Get a random number between 1 and 9. Hint: random module.
random_number = random.randint(1, 9)  
# randint : means including 1 and 9 and whant between them

# print(random_number)

#! If the user guesses the correct number print a message 
#! that says “Winner”.
#! If the user guesses the wrong number print a message 
#! that says “Better luck next time.”

if number == random_number:
    print('winner')
else: 
    print('better luck next time')


