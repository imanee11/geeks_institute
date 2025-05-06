# Exercise 4: Check the index

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']


#! Ask a user for their name, if their name is in the names 
#! list print out the index of the first occurrence of the name.

user_name = input ('enter ur name: ')



if user_name in names:
    index = names.index(user_name)
    print(f"ur name is in the list at index {index}")
else: 
    print("ur name is not in the list")


