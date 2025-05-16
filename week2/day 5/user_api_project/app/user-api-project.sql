CREATE USER myuser WITH PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE user_db TO myuser;

GRANT USAGE, CREATE ON SCHEMA public TO myuser;
ALTER ROLE myuser SET search_path TO public;

SHOW search_path;

select * from users
SELECT * FROM users WHERE id = 9;


SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users';



