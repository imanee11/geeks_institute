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



