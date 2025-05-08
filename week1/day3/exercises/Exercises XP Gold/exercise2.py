# Exercise 2 : Custom List Class

class MyList():

    def __init__(self , letters):
        self.letters = letters

    def reversed(self):
        # create a copy for the list
        reversed_list = self.letters.copy()
        reversed_list.reverse()
        return reversed_list
    
    def sorted(self) :
        sorted_list = self.letters.copy()
        sort = sorted(sorted_list)
        return sort


imanes_list = MyList(['i' , 'm' , 'a' , 'n' , 'e'])
# print(imanes_list.letters)
print(imanes_list.reversed())
print(imanes_list.sorted())