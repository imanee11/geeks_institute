# Exercise 1 : Call History

class Phone :
    def __init__(self , phone_number ):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self , other_phone) :
        call = f'{self.phone_number} called {other_phone}'
        # print (call)
        self.call_history.append(call)

    def show_call_history(self) :
        print('call history : ')
        for i in self.call_history :
            print(i)

    def send_message(self , other_phone , content):
        message = {
            'to' : other_phone,
            'from' : self.phone_number,
            'centent' : content
        }
        self.messages.append(message)
    
    def show_outgoing_messages(self):
        print("outgoing messages:")
        for i in self.messages :
            print(i)

    
    def show_incoming_messages(self):
        print("incoming messages:")
        for i in self.messages :
            if i['to'] == self.phone_number :
                print(i)
    
    def show_messages_from(self , number) :
        print(f'messages from {number}')
        for i in self.messages :
            if i['from'] == number :
                print(i)



myphone = Phone("123456789")
# print(myphone.phone_number) 
myphone.call(987654321)

myphone.show_call_history()

myphone.send_message("987654321", 'hi cutie')
print(myphone.messages)

myphone.show_incoming_messages()
myphone.show_outgoing_messages()
myphone.show_messages_from('987654321')

