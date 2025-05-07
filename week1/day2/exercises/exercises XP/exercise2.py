# 🌟 Exercise 2 : Cinemax #2
 
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {}
total = 0

while True :
    name = input('enter a name or (done) to finish ')
    if name == 'done':
        break
    age = int(input("enter age:"))

    #* name the key age the value
    family[name] = age

# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

for name, age in family.items():
    if age < 3 :
        price = 0
    elif age <= 12 :
        price = 10
    else :
        price = 15
    print(name, "pays", price)
    total += price

#! Print out the family’s total cost for the movies.
print("total cost:", total)




    