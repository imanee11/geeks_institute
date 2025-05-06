# lst = [1, 2, 3, 4, "a", "b", "c", 38.5, "56.7"]
# print(lst)
# print(type(lst))
# print(type(lst[-1])) 

# l1 = [1, 2, 3, 4, 5, 6]
# l1.append(3)
# l1.append([7, 8, 9])
# l1.extend([6, 7, 8])
# print(l1)

# l1=[1, 2, 3, 4, 5, 6]
# l1.insert(2, 6)
# print(l1)

# l2 = [1, 2, 3, 4, 5, "a", "a", "b", 1, 2, 4]
# s = l2.count(3)
# print(s)

# lst = [1, 2, 3, 4, 5, 6, 7]
# print(lst[0:4])
# print(lst[::])
# print(lst[::-1])

# t = (1, 2, 3, 4, 5, "a", "b", "c")
# t1 = 1, 2, 3, 4, "g", "l"
# print(t)
# print(t1)
# print(len(t))


# t1 = (1, 2, 3, 4, 5)
# t2 = (6, 7, 8, 9)
# t3 = t1 + t2 
# print(t3)


# t = (1, 2, 3, 4, 5)
# print("Minimum element in the tuple",min(t))
# print("Maximum element in the tuple",max(t))

# dict = {1:'a', 2:'b', 5:'c', 4:'d'}
# print(dict)
# print(dict[5])

# cubes = {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
# print(cubes.pop(4))
# print(cubes)
# print(cubes.popitem())
# print(cubes)
# cubes.clear()
# print(cubes)


# d = {1:'10', 2:'20', 3:'30', 4:'40', 5:'50'}
# l1 =list(d.keys())
# print("the key values are:")
# print(l1)
# l2 = list(d.values())
# print("The values are of dictionary is")
# print(l2)
# l3 = list(d.items())
# print("the list items are")
# print(l3)


# set1 = {1, 2, 3, 4, "hi", "world", "python"}
# print("python" in set1) # true : check if "python" is in set1

# set1.remove(4) # remove 4 from set1
# print(set1)

a = {1, 2, 3, 4, 5}
b = {2, 3, 6, 7, 5}
c = a^b 
print(c)
d = a - b
print(d)
e = b - a 
print(e)