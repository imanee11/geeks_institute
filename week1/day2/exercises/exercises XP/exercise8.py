# 🌟 Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

#! Create a function that informs the user of his number of correct/incorrect answers.
def result(correct , incorrect , wrong_answers):
    print('u got' , correct, 'right')
    print ('u got' , incorrect, 'wrong')
    for i in wrong_answers :
        print(i)

def quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    #! ask the user
    for i in data :
        user = input(i["question"])
        if user.lower() == i['answer'].lower() :
            print('correct!!')
            correct += 1
        else :
            print('incorrect :( its :' , i["answer"])
            incorrect += 1
            wrong_answers.append(i["question"])
            # print(wrong_answers)

    result(correct, incorrect, wrong_answers)
        

quiz()