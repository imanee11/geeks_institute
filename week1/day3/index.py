# class Dog():

#     # Initializer / Instance Attributes
#     def __init__(self):
#         print("A new dog has been initialized !")

# shelter_dog = Dog()

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog , age):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog , 'he is', age)

# shelter_dog = Dog(name_of_the_dog="Rex")
# or
# shelter_dog = Dog("Rex" , 32)

# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

## create an instance of the class
# p = Point(3,4)

## access the attributes
# print("p.x is:", p.x)
# print("p.y is:", p.y)


# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)

# first_person = Person("John", 36)
# first_person.show_details()


# class Computer():

#     def description(self, name):

#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)

# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)

# dell_computer = Computer()

# # Computer.description(dell_computer, "Mark")
# # # IS THE SAME AS:
# dell_computer.description("Mark")

#^ test
class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

my_acc = BankAccount(456, 8)
# print (my_acc.account_number)
# print(my_acc.balance)


my_acc.deposit(200)

my_acc.withdraw(8)

# my_acc.view_balance()
my_acc.view_transactions()




