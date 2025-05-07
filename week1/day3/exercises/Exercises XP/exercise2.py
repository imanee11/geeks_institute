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



