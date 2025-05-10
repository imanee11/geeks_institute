# Exercise 2 : Longest word without a specific character

#! store the sentence
best = ''

#! ask the user
while True :
    sentence = input('enter the longest sentence you can without the letter A or stop to quit : ').lower()

    # stop the while
    if sentence == 'stop' :
        break

    if 'a' in sentence :
        print ('oops !! a in the sentence')
    elif len(sentence) > len(best) :
        best = sentence
        print ('new longest sentence!!')
    else :
        print('not longer enough than the older ')
    
