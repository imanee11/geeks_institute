# Exercise 1: Cars

strr = 'Volkswagen,Toyota,Ford Motor,Honda,Chevrolet'

#! Convert it into a list using Python (don’t do it by hand!).
word = strr.split(',')
# print(word)

#! Print out a message saying how many manufacturers/companies are in the list.
print (f'number of Companies : {len(word)} ')
# for i in word :
#     print(i)

#! Print the list of manufacturers in reverse/descending order (Z-A).
sorted_word = sorted(word)
reverse_word = sorted_word[::-1]
print(reverse_word)

#& Using loops or list comprehension:
#! Find out how many manufacturers’ names have the letter o in them.
manufacturers_with_o = 0

for i in word :
    if 'o' in i :
        manufacturers_with_o += 1
print(f'{manufacturers_with_o} manufacturers have the letter o')

#! Find out how many manufacturers’ names do not have the letter i in them.
manufacturers_with_no_i = 0
for i in word :
    if 'i' not in i :
        manufacturers_with_no_i += 1
print(f'{manufacturers_with_no_i} manufacturers have no letter i')

#? BONUS
companies = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

#! Remove duplicates
unique_companies = list(set(companies)) 
# print(unique_companies)

result = ", ".join(unique_companies)
print(f'companies without duplicates : {result}')
print(f'unique companies : {len(unique_companies)}')

#? BONUS 2
# sorted_word = sorted(word)
reversed_list = []
for i in sorted_word :
    reversed_list.append(i[::-1])
print(reversed_list)

