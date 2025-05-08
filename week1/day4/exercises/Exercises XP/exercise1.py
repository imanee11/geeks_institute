# 🌟 Exercise 1: Pets

#! pets class
class Pets ():
    def __init__(self , animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

#! cat class
class Cat():
    is_lazy = True
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


#! Siamese class
class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)


# mypet = Pets(['cat'])
# # print(mypet.animals)
# mypet.walk()

# mycat = Cat('neko' , 4)
# print(mycat.name)
# print(mycat.age)

bengal = Cat('neko' , 5)
chartreux = Chartreux("luna", 3)  
siamese = Siamese("snowy", 1)

all_cats = [bengal , chartreux , siamese]

#! Create an instance of the Pets class called 
#! sara_pets, passing the all_cats list as an argument.
sara_pets = Pets(all_cats)

sara_pets.walk()