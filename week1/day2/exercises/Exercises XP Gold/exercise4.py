# Exercise 4: Double Dice
import random

def  throw_dice ():
    return random.randint(1, 6)

# print(throw_dice())


#& Create a function called throw_until_doubles.

def throw_until_doubles():

    count = 0

    # keep throwing untile they match 
    while True :
        dice1 = throw_dice()
        dice2 = throw_dice()

        # every throw add 1 to count
        count += 1

        print (dice1,dice2)

        if dice2 == dice1 :
            # print (f'It took {count} throws to get doubles')
            return count

throw_until_doubles()

def main() :
    # to store the number of rolls
    results = []

    total_rolls = 0

    for i in range (100) :
        rolls = throw_until_doubles()
        results.append(rolls)

        # all the total of rolls
        total_rolls += rolls
        print (f"Total throws to get 100 doubles: {total_rolls}")

        # average
        average = total_rolls / 100
        print(f'Average throws to reach doubles: {average}')

    # print(results)

main()
    
