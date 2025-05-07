# 🌟 Exercise 1: Cats

#! Step 1: Create Cat Objects

class Cat:
    def __init__(self , cat_name , cat_age):
        # name / age attributes of the object
        # cat name / cat_age : parameters passed to the constructor 
        self.name = cat_name
        self.age = cat_age


#! create 3 cat objects with different names and ages.
neko = Cat('lola' , 3)
neko2 = Cat('snowy' , 5)
neko3 = Cat('luna' , 2)



# print(neko.name)

#! Create a function that takes the three cat objects as input.

def oldest(neko , neko2, neko3):
    oldest_cat = neko

    if neko2.age > oldest_cat.age :
        oldest_cat = neko2
    elif neko3.age > oldest_cat.age :
        oldest_cat = neko3
    
    # use return bc we will use the result later
    return oldest_cat


oldest_cat = oldest(neko, neko2, neko3)
print(f"the oldest cat is {oldest_cat.name} and is {oldest_cat.age} years old.")
