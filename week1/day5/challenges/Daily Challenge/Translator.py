import asyncio
from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

translator = Translator()

#dict to store the translations
translated_words = {}

async def translate_words():
    for word in french_words:
        translation = await translator.translate(word, src='fr', dest='en') 
        translated_words[word] = translation.text

    print(translated_words)

asyncio.run(translate_words())
