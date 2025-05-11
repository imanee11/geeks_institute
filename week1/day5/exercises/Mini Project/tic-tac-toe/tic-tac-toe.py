# Mini-Project - Tic Tac Toe

#! 
# create a list with 9 empty spaces / this tells Python to repeat that list 9 times
board = [" "] * 9

def display_board() :
    print("\n")
    print('Welcome To TIC TAC TOE!!')
    print("\n")
    print('TIC TAC TOE')
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

def player_input(player) :
    while True :
        row = input(f"Player {player}, enter row (0, 1, 2): ")
        col = input(f"Player {player}, enter column (0, 1, 2): ")
        if row == "0" or row == "1" or row == "2":
            if col == "0" or col == "1" or col == "2":
                row = int(row)
                col = int(col)

                #calculate index
                index = row * 3 + col

                #if the place is empty mark it with the player symbol
                if board[index] == " ":
                    board[index] = player
                    break
                else :
                    print('this place is already taken try agaiin!!')
            else :
                print("invalid column please enter 0, 1 or 2 for the column.")
        else : 
            print("invalid row please enter 0, 1 or 2 for the row.")

    

def check_win() :
    win_conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],  
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ]
    for i in win_conditions:
        a = i[0]
        b = i[1]
        c = i[2]

        # Check if all three spots are the same and not empty
        if board[a] == board[b] == board[c] and board[a] != " ":
            return True

    return False

def play() :
    player = "X"  #stat with x
    moves = 0 
    while moves < 9:
        display_board()
        player_input(player)

        if check_win():
            display_board()
            print("player", player, "wins!!!!")
            return

        #change player
        if player == "X":
            player = "O"
        else:
            player = "X"
        
        moves += 1
    display_board()
    print("it's a tie!")

play()
