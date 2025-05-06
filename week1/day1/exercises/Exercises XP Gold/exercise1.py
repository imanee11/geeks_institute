# Exercise 1: What is the Season?

#! Ask the user to input a month (1 to 12).
month = int(input("enter a month (1-12): "))

#! Display the season of the month received:
#& 1, 2, 3: Winter
#& 4, 5, 6: Spring
#& 7, 8, 9: Summer
#& 10, 11, 12: Fall

if month == 1 or month == 2 or month == 3:
    print("Winter")
elif month == 4 or month == 5 or month == 6:
    print("Spring")
elif month == 7 or month == 8 or month == 9:
    print("Summer")
elif month == 10 or month == 11 or month == 12:
    print("Fall")
else:
    print('invalide month')


