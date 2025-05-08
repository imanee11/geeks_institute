# Daily challenge: Old MacDonald’s Farm

#! Create a class called Farm.
class Farm :
    def __init__(self , farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self , animal_type, count = 1):
        # count = 1

        if animal_type in self.animals :
            # if already exist add a new one
            self.animals[animal_type] += count
        else :
            # if not add it for the first time / by default count is 1
            self.animals[animal_type] = count

    def get_info(self):
        print(f"farm name : {self.name}")

        for animal, count in self.animals.items():
            print (f'{animal} : {count}')

        print("E-I-E-I-O!")

    #? BONUS

    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        #convert dict into list 
        # animal_list = list(self.animals.keys())
        animal_list = self.get_animal_types()

        if len(animal_list) == 0 :
            print(f"{self.name} has no animals")
            
        elif len(animal_list) > 0 :
            # to store the keys 
            animal_types = []

            for i in animal_list :
                count = self.animals[i]
                if count > 1 :
                    animal_types.append(i + 's')
                else :
                    animal_types.append(i)
            

            print(f"{self.name} has {','.join(animal_types)}")



myfarm = Farm('MacDonald’s Farm')

myfarm.add_animal('cow')
myfarm.add_animal('cat', 10) 
myfarm.add_animal('cat')
myfarm.add_animal('goat', 12)


# print(myfarm.animals)
myfarm.get_info()

print(myfarm.get_animal_types())
# print(myfarm.get_short_info())

myfarm.get_short_info()
