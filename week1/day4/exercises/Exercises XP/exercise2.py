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