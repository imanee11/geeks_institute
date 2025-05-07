# 
#! Ask a user for a word.
word = input("enter a word : ")

dictionary = {}

for i in range(len(word)) :
    # get the letter at this position for exe : in 0 there is i ... 
    letter = word[i]
    print (letter)

    if letter in dictionary :
        dictionary[letter].append(i)
    else :
        dictionary[letter] = [i]


print(dictionary)
