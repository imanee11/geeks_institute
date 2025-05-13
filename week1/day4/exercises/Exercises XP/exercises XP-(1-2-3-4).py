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


# 🌟 Exercise 2: Dogs

#! class dog

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is baking'


    def run_speed(self):
        # weight / age * 10
        speed = self.weight / self.age * 10
        return f'{self.name} run speed is {speed} : '

    def fight(self, other_dog):
        # run_speed * weight
        power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if power > other_power :
            return f'{self.name} wins!!'
        elif power < other_dog :
            return f'{other_dog} wins!!'
        else :
            return f'its a tie!!'



dog1 = Dog('woody' , 8 , 50)
dog2 = Dog('bob' , 10 , 60)
dog3 = Dog('idk' , 6 , 45)



print(dog1.bark())
print(dog1.run_speed())
print(dog2.run_speed())

print(dog1.fight(dog2))
print(dog3.fight(dog2))


# 🌟 Exercise 3: Dogs Domesticated

import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is baking'


    def run_speed(self):
        # weight / age * 10
        speed = self.weight / self.age * 10
        return f'{self.name} run speed is {speed} : '

    def fight(self, other_dog):
        # run_speed * weight
        power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if power > other_power :
            return f'{self.name} wins!!'
        elif power < other_dog :
            return f'{other_dog} wins!!'
        else :
            return f'its a tie!!'

class PetDog(Dog) :
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self) :
        print(self.bark())
        # means set the dod as trained
        self.trained = True

    def play(self , *args) :
        dogs =  ', '.join(args)
        print (f'{self.name} and {dogs} all play together')

    def do_a_trick(self):
        if self.trained :
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")
            return

dog1 = PetDog('woody' , 8 , 50)
dog2 = PetDog('bob' , 10 , 60)
dog3 = PetDog('idk' , 6 , 45)

dog1.play("Buddy", "Max")
# we cant call this if the dog doesnt train
dog1.train()
dog1.do_a_trick()


#  🌟 Exercise 4: Family and Person Classes

#! class Person
class Person :
    def __init__(self , first_name , age , last_name):
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    
    def is_18(self):
        if self.age >= 18 :
            return True
        else :
            return False
        
#! family class
class Family :
    def __init__(self , last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age) :
        new_person = Person(first_name , age , self.last_name)
        # put the last name of the class person the same as one on the family
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self ,first_name):
        for person in self.members :
            if person.first_name == first_name:
                if person.is_18() :
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else :
                    print('Sorry, you are not allowed to go out with your friends.')
                # return Person.is_18()
        print('no one with that fis name')

    def family_presentation(self) :
        for i in self.members :
            print(f'first name : {i.first_name} , age : {i.age}')


# prs1 = Person('imane' , 21 , "el ouannane")
# print(prs1.age)

#! create fml
fml1 = Family('el ouannane')
fml2 = Family('idk')

#! add mmb
fml1.born('imane' , 21)
fml1.born('yassmine' , 14)


fml1.check_majority('imane')
fml1.check_majority('yassmine')
fml2.check_majority('ayman')

#! print fml members
fml1.family_presentation()


