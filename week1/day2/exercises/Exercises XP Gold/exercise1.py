# Exercise 1: Birthday Look-up

birthdays = {
    "dounia": "1995/05/06",
    "faty": "1998/06/12",
    "imane": "2003/11/11",
    "ayman": "2001/11/17",
    "yassmine": "2010/10/11"
}

print('welcome!!')
print('You can look up the birthdays of the people in the list!')

for name in birthdays:
    print(name)

name = input('give me a name: ')

if name in birthdays :
    print(f"{name}'s birthday is on {birthdays[name]}")
else :
    print(f'sorry we dont have a birthday for {name}')
