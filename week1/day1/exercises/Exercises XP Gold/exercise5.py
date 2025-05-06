# Exercise 5: Greatest Number

#! Ask the user for 3 numbers and print the greatest number.

num1 = int(input("give me the first number:"))
num2 = int(input("give me the second number:"))
num3 = int(input("give me the third number:"))

if num1 > num2 and num1 > num3:
    print(f"{num1} is the greatest number")
elif num2 > num1 and num2 > num3:
    print(f"{num2} is the greatest number")
elif num3 > num1 and num3 > num2:
    print(f"{num3} is the greatest number")
else:
    print("all numbers ar equal")



