# challenge 2

#! Write a program that asks a string to the user, and display
#! a new string with any duplicate consecutive letters removed.

word = input("Enter a string: ")

# to store the new word
new_word = ""

# this loop goes through every letter in the word, using its index
for i in range(len(word)):
    if i == 0 or word[i] != word[i-1]:
        new_word += word[i]

# i == 0 → It's the first letter, always keep it.
# word[i] != word[i-1] → If current letter is different from the one before it, then it's not a duplicate → keep it.

print(new_word)