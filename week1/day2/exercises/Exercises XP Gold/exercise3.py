# Exercise 2: Sum

def number(x):

    # turn number into str
    into_str = str(x)

    # after add 2 number to each other '22' '222' we turn them into number
    num1 = int(into_str)
    num2 = int(into_str * 2)
    num3 = int(into_str * 3)
    num4 = int(into_str * 4)

    
    result = num1 + num2 + num3 + num4

    return result

print(number(1))

