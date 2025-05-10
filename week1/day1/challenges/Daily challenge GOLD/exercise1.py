# Happy birthday

#! Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
birthdate = input("enter ur birthdate (DD/MM/YYYY): ")


#! split the date 
day, month, year = birthdate.split("/")
# turn it into int
year = int(year)
# print (year)

#! get today's date
from datetime import datetime
current_year = datetime.now().year
# print(current_year)

#! age
age = current_year - year
# print(age)

#! get the last digit
last_digit = age % 10

#! make candles
candles = 'i' * last_digit


print ('   ____'+ candles + '____')
print ('  | :H:a:p:p:y: |  ')
print ('__|_____________|__')
print ('|^^^^^^^^^^^^^^^^^|')
print ('|:B:i:r:t:h:d:a:y:|')
print ('|                 |')
print (' ~~~~~~~~~~~~~~~~~')




