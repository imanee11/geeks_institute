matrix = [
    "7ii",
    "Tsx",
    "h%?",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

message = ""

for col in range(3):
    for row in matrix :
        message += row[col]

final_message = ""
temp = ""

for i in message :
    if i.isalpha():
        if temp :
            final_message += " "
            temp = ""
        final_message += i
    else :
        temp += i

print("Secret message:", final_message)
