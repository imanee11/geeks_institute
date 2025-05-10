# Exercise 2: What’s your name?

def get_full_name(first_name, last_name, middle_name = "" ):
    if middle_name :
        full_name = first_name + " " + middle_name + " " + last_name
    else :
        full_name = first_name + " " + last_name
    return full_name

print(get_full_name('imane' , 'el ouannane'))
print(get_full_name('imane' , 'el' , 'ouananne'))

