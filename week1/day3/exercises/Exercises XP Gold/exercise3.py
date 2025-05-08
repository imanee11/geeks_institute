# Exercise 3 : Restaurant Menu Manager

#!
class MenuManager() :
    def __init__(self ):
        self.menu = [
            {"name" : "Soup", "price" : 10, "spice" : "B", "gluten" : False},
            {"name" : "Hamburger", "price" : 15, "spice" : "A", "gluten" : True},
            {"name" : "Salad", "price" : 18, "spice" : "A", "gluten" : False},
            {"name" : "French Fries", "price" : 5, "spice" : "C", "gluten" : False},
            {"name" : "Beef bourguignon", "price" : 25, "spice" : "B", "gluten" : True},
        ]
    
    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name" : name,
            "price" : price,
            "spice" : spice,
            "gluten" : gluten,
        }
        self.menu.append(new_dish)

    def update_item(self, name, price, spice, gluten):
        for i in self.menu :
            if i["name"] == name :
                i["price"] = price
                i["spice"] = spice 
                i["gluten"] = gluten
                print(f'{name} has been updated')
                return
        print (f'{name} is not in the menu.')

    def remove_item(self ,name):
        for i in self.menu :
            if i['name'] == name:
                self.menu.remove(i)
                print (f'{name} has been removed.')
                print('updated menu : ')
                for e in self.menu :
                    print(e)
                return
            

        print (f'{name} is not in the menu.')

        

mymenu = MenuManager()
# 
mymenu.add_item('pizaa', 3 , 'A' ,True )

mymenu.update_item('Soup' , 15, 'A' , False)
mymenu.update_item('tacos' , 15, 'A' , False)

mymenu.remove_item('Salad')
mymenu.remove_item('tacos')



# print(mymenu.menu)