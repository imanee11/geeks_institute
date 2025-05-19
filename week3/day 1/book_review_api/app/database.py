import psycopg2

def get_db_connection():
    conn = psycopg2.connect(
        dbname="book_review_db",
        user="postgres",
        password="azer",
        host="localhost",
        port="5432"
    )
    return conn

def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user'
        );

        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            owner_id INTEGER REFERENCES users(id) ON DELETE SET NULL
        );

        CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY,
            content TEXT NOT NULL,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            book_id INTEGER REFERENCES books(id) ON DELETE CASCADE
        );
    ''')
    conn.commit()
    cur.close()
    conn.close()

# Run this to create tables
if __name__ == "__main__":
    init_db()

