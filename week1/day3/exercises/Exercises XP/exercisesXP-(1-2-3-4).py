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


# 🌟 Exercise 2 : Dogs

#! Create a Dog class with methods for barking and jumping.
class Dog :
    def __init__(self , name, height):
        self.name = name
        self.height = height

    #* baking method
    def bark(self):
        print(f"{self.name} goes woof!")

    #* jumping
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog('billy' , 50)
sarahs_dog = Dog('woody' , 30)
# print (dog.name)

print (f"name : {davids_dog.name} , height : {davids_dog.height}")
print (f"name : {sarahs_dog.name} , height : {sarahs_dog.height}")

davids_dog.bark()
davids_dog.jump()

sarahs_dog.bark()
davids_dog.jump()

#! compare Dog Sizes
if davids_dog.height > sarahs_dog.height :
    print("david's dog is taller than sarah's dog")
else :
    print("sarah's dog is taller than david's dog")



# 🌟 Exercise 3 : Who’s the song producer?

#! Create a class called Song.
class Song :
    def __init__(self , lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in self.lyrics :
            print (i)

song1 = Song([
    'Oh my God, I feel it in the air',
    'Telephone wires above are sizzlin like a snare'
])

song1.sing_me_a_song()

# 🌟 Exercise 4 : Afternoon at the Zoo

#! 1. Create a class called Zoo.
class Zoo :
    def __init__(self , zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals :
            self.animals.append(new_animal)
    
    def get_animals(self) :
        for i in self.animals:
            print(i)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals :
            self.animals.remove(animal_sold)

    def sort_animals(self) :
        self.animals.sort() 

        grouped_animals = {}

        for animal in self.animals :
            # took the first letter
            first_ltr = animal[0]

            # if the letter doesnt exist add it to the list
            if first_ltr not in grouped_animals :
                grouped_animals[first_ltr] = []
            
            # add animal to the list
            grouped_animals[first_ltr].append(animal)
        
        return grouped_animals
    
    def get_groups(self):
        print(self.sort_animals())


#! Create an instance of the Zoo class and pass a name for the zoo
myzoo = Zoo('neko Zoo')

myzoo.add_animal('neko')
myzoo.add_animal('fox')
myzoo.add_animal('lion')

# print(myzoo.name)
# print(myzoo.animals)

#! sell animals
# myzoo.get_animals()
myzoo.sell_animal('lion')

#! prints all animals currently in the zoo.
myzoo.get_animals()

#! prints the grouped animals
myzoo.get_groups()

