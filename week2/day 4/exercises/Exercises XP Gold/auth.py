import psycopg2
import hashlib


# create a dict with 3 users
# users = {
#     "imane": "azer1234",
#     "faty": "azer",
#     "salma": "1234"
# }

def encrypt_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

conn = psycopg2.connect(
    dbname="auth_db",
    user="postgres",    
    password="azer",  
    host="localhost",
    port="5432"
)
cur = conn.cursor()

logged_in = None

while True:
    command = input("choose 'login' or 'exit': ").lower()

    if command == "exit":
        print("bye!!!")
        break

    elif command == "login":
        username = input("enter ur username: ")
        password = input("enter ur password: ")
        encrypted = encrypt_password(password)

        cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, encrypted))
        result = cur.fetchone()

        if result:
            print("u ar now logged in")
            logged_in = username

        else:
            cur.execute("SELECT * FROM users WHERE username = %s", (username,))
            user_exists = cur.fetchone()

            if not user_exists:
                print("username not found")
                choice = input("do u want to sign up? (yes/no): ").lower()

                if choice == "yes":
                    while True:
                        new_username = input("choose a username: ")
                        cur.execute("SELECT * FROM users WHERE username = %s", (new_username,))
                        if cur.fetchone():
                            print("username taken choose  another one")
                        else:
                            break

                    new_password = input("choose a password: ")
                    encrypted_new = encrypt_password(new_password)
                    cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (new_username, encrypted_new))
                    conn.commit()
                    print("sign up successful! u can now login")

                else:
                    print("returning to main menu")

            else:
                print("incorrect password")

    else:
        print("please choose 'login' or 'exit'")
