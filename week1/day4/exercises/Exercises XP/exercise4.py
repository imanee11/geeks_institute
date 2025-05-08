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


