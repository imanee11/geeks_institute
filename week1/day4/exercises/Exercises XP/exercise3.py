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
