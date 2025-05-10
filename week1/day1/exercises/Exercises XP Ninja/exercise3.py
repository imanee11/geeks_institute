#  Exercise 3: Working on a paragraph

paragraph = 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. It was created by Guido van Rossum and first released in 1991 Pythons design philosophy emphasizes code readability and simplicity, making it an excellent choice for both beginners and experienced developers.'

#! How many characters it contains
characters  = len(paragraph)
print (f'it contains {characters} characters')

#! How many sentences it contains.
sentences = paragraph.count('.')
# count who many times . apears 
print (f'it contains {sentences} sentences')

#! How many words it contains.
words = paragraph.split()
# splits at every space
words_num = len(words)
print(f'it contains {words_num} words')

#! How many unique words it contains.
unique = []
for i in words :
    if i not in unique : 
        unique.append(i)

unique_num = len(unique)
print(f'it contains {unique_num} unique words')