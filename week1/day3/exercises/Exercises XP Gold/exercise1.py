# Exercise 1 : Geometry
import math

#! 
class Circle ():
    def __init__(self , radius = 1):
        self.raduis = radius
    
    def perimeter(self):
        # 2 * 3.14 * raduis
        return 2 * math.pi * self.raduis
    
    def area(self):
        # 3.14 * (raduis ** 2) 
        return math.pi  * (self.raduis ** 2)
    
    def definition (self) :
        print('A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre.')

mycircle = Circle(3)

print("perimeter :" , mycircle.perimeter())
print("area :" , mycircle.area())
mycircle.definition()