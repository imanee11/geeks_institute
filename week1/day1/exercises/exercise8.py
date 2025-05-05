# 🌟 Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]


#& The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich") 

# print(sandwich_orders)


#& Create an empty list called finished_sandwiches.
finished_sandwiches = []

#& One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
while sandwich_orders:
    
    sandwich = sandwich_orders.pop(0) # every time while looping it will remove the fist one
    finished_sandwiches.append(sandwich) # every time while looping it will add the first one to the finished_sandwiches list
# print(finished_sandwiches)
# print(sandwich_orders)

#& After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

for i in finished_sandwiches:
    print("I made your", i, "sandwich.")