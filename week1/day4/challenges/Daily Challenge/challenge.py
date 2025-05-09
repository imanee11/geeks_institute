# Daily Challenge : Pagination

import math

class Pagination :
    def __init__(self , items = None , size = 10):
        if items is None :
            self.items = []
        else:
            self.items = items

        # how many items should go on each page
        # page_size is 2 then each page shows 2 items
        self.size = size

        self.current_idx = 0

        # len list : len(self.items)
        self.total_pages = math.ceil(len(self.items) / self.size)

    def get_visible_items(self) :
        


mypage = Pagination(['a' , 'b' , 'c'] , 2)
# 3 items / 2 per page / ceil(2.3) = 2 p

print(mypage.total_pages)