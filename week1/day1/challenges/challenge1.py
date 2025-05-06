# Challenge 1

#! Ask the user for a number and a length.
number = int(input('enter a number:'))
length = int(input('enter a length:'))

#! Create a program that prints a list of multiples of the number until the list length reaches length.
for i in range(1, length + 1):
    print(number * i)