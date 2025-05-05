# 🌟 Exercise 7: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

#! Remove Banana from the list.
basket.remove("Banana")

#! Remove Blueberries from the list.
basket.remove("Blueberries")

#! add kiwi to the end
basket.append('Kiwi')

#! Add Apples to the beginning of the list.
basket.insert(0, 'Apples')

#! Count how many apples are in the basket.
apple_count = basket.count('Apples')
print(apple_count)

#! Empty the basket.
basket.clear()


print(basket)