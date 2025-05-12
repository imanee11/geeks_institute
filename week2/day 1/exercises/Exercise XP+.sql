-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE students(
 student_id SERIAL PRIMARY KEY,
 last_name VARCHAR (100) NOT NULL,
 first_name VARCHAR (50) NOT NULL,
 birth_date DATE NOT NULL
)

insert into students (first_name, last_name, birth_date) VALUES ('Yoan' , 'Cohen' , '03/12/2010' );
insert into students (first_name, last_name, birth_date) VALUES ('Marc' , 'Benichou' , '02/11/1998' );
insert into students (first_name, last_name, birth_date) VALUES ('Lea' , 'Benichou' , '1987-07-27' );
insert into students (first_name, last_name, birth_date) VALUES ('Amelia' , 'Dux' , '07/04/1996' );
insert into students (first_name, last_name, birth_date) VALUES ('David' , 'Grez' , '2003-06-14' );
insert into students (first_name, last_name, birth_date) VALUES ('Omer' , 'Simpson' , '03/10/1980' );
insert into students (first_name, last_name, birth_date) VALUES ('imane' , 'el ouannane' , '11/11/2003' );

-- Fetch all of the data from the table.
select * from students

--Fetch all of the students first_names and last_names.
select first_name, last_name from students

-- Fetch the student which id is equal to 2.
select first_name, last_name from students where student_id = 2

--Fetch the student whose last_name is Benichou AND first_name is Marc.
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc'

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc'

-- Fetch the students whose first_names contain the letter a.
select first_name, last_name from students where first_name LIKE '%a%'

-- Fetch the students whose first_names start with the letter a.
select first_name, last_name from students where first_name LIKE 'a%'

-- Fetch the students whose first_names end with the letter a.
select first_name, last_name from students where first_name LIKE '%a'

--Fetch the students whose second to last letter of their first_names are a (Example: Leah).
select first_name, last_name from students where first_name LIKE '%a_'

-- Fetch the students whose id’s are equal to 1 AND 3
select first_name, last_name from students where student_id IN (1, 3)

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
select * from students where birth_date >= '01/01/2000'



