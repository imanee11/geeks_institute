# Exercise 1: Bank Account

#! BankAccount class
class BankAccount :
    def __init__(self , balance , username , password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate (self , username , password) :
        if self.username == username and self.password == password:
            self.authenticate = True
        else: 
            raise ValueError('Authentication failed')
        
    def deposit(self , amount):
        if not self.authenticate :
            raise ValueError ('u have to be be authenticated to deposit')
        if amount <= 0 :
            raise ValueError('the amount must be positive')

        self.balance = self.balance + amount

    def withdraw (self , amount) :
        if not self.authenticate :
            raise ValueError('u have to be be authenticated to withdraw')
        if amount <= 0 :
            raise ValueError('amount must be positive')
        if amount > self.balance :
            raise ValueError('hehe u dont have enough mony')
        self.balance = self.balance - amount




#!
class MinimumBalanceAccount(BankAccount) :
    def __init__(self, balance , minimum_balance = 0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance

    def withdraw (self , amount) :
        # minimum_balance : the user has to leave it in there acc 
        # for exe : minimum_balance = 100 and balance = 100 
        # if the user want to withdaw 50 he cant 
        if amount <= 0 :
            raise ValueError('the amount must be positive')
        if self.balance - amount < self.minimum_balance :
            raise ValueError ('Cannot withdraw')
        
        self.balance = self.balance - amount


# myacc = BankAccount(500)

# myacc.deposit(200)
# myacc.withdraw(100)
# print(myacc.balance)

# myacc = MinimumBalanceAccount(500 , 100)
# myacc.withdraw(400)
# myacc.withdraw(50)
# print(myacc.balance)

myacc = BankAccount(500 , 'imane', 1234 )
myacc.authenticate('imane', 1234)
myacc.deposit(200)
myacc.withdraw(500)

print(myacc.balance)