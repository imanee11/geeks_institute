# 🌟 Exercise 7 : Temperature Advice
import random

def get_random_temp(season):
    if season == 'winter':
        return random.randint(-10 , 16)
    elif season == 'spring' :
        return random.randint(10 , 22)
    elif season == 'summer' :
        return random.randint(24 , 40)
    elif season == 'fall' :
        return random.randint(10, 20)
    else :
        return random.randint(-10, 40)

# print("random temperature is:", get_random_temp(), "°C")

def main():
    season = input ('enter the name of the season : ').lower()

    temperature = get_random_temp(season)
    print('The temperature right now is:', temperature, 'degrees Celsius.')
    if temperature < 0 :
        print('Brrr, that’s freezing! Wear some extra layers today')
    elif 0 <= temperature <= 16 :
        print('Quite chilly! Don’t forget your coat')
    elif 17 <= temperature <= 23 :
        print('its cool')
    elif 24 <= temperature <= 32 :
        print('nice and warm')
    elif 33 <= temperature <= 40:
        print ('its really hot')
    
main()

