import psycopg2

# 1. Connection Details
DB_NAME = "Hollywood"
USER = "postgres"
PASSWORD = "azer"  # Use the correct password you set earlier
HOST = "localhost"
PORT = "5432"  # Default is usually 5432

# 3. Write an SQL query
def create_table(table_name: str): 
    """create new table with id, num"""

    query = f'''
    create table {table_name}(
        id serial primary key,
        num integer not null
    );
    '''
    cursor.execute(query) # execute the query
    connection.commit() # make changes in the database