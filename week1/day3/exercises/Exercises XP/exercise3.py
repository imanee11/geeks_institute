# 🌟 Exercise 3 : Who’s the song producer?

#! Create a class called Song.
class Song :
    def __init__(self , lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in self.lyrics :
            print (i)

song1 = Song([
    'Oh my God, I feel it in the air',
    'Telephone wires above are sizzlin like a snare'
])

song1.sing_me_a_song()