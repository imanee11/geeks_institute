#  Exercise 3: From English to Morse

#morse code 
MORSE_CODE_DICT = { 'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}

def to_morse_code(text) :
    text = text.upper()
    # stor result
    morse = ''

    for i in text :
        if i in MORSE_CODE_DICT :
            morse += MORSE_CODE_DICT[i] + ' '
        elif i == ' ' :
            morse += '/ '
        else :
            continue #skip characters notin morse code
    return morse

text = "Hello World"
morse_code = to_morse_code(text)
print(f"original text: {text}")
print(f"morse code: {morse_code}")

def morse_to_text(morse):
    #splite morse code into words
    morse = morse.split(' / ')
    text = ''

    for i in morse:
        for letter in i.split():  #split word into letters
            for key, value in MORSE_CODE_DICT.items():
                if value == letter:
                    text += key 

        text += ' ' #add space between words
    
    return text.lower()

text = "i love cats"
morse_code = to_morse_code(text)
print(f"original text: {morse_code}")
decoded_text = morse_to_text(morse_code)
print(f"Decoded text: {decoded_text}")
