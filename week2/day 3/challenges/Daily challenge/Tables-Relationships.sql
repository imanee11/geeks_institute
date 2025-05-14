-- Database: test

-- DROP DATABASE IF EXISTS test;

-- CREATE DATABASE test
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE customer(
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL
);

CREATE TABLE customer_profile(
id SERIAL PRIMARY KEY,
isLoggedIn BOOLEAN DEFAULT false,
customer_id INTEGER UNIQUE,
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
)

insert into customer(first_name , last_name) values ('John', 'Doe')
insert into customer(first_name , last_name) values ('Jerome', 'Lalu')
insert into customer(first_name , last_name) values ('Lea', 'Rive')
select * from customer

insert into customer_profile (isLoggedIn, customer_id) values (true, (select customer_id from customer where first_name = 'John'));
insert into customer_profile (isLoggedIn, customer_id) values (false, (select customer_id from customer where first_name = 'Jerome'));
select * from customer_profile

-- The first_name of the LoggedIn customers
select c.first_name from customer c
inner join customer_profile cp on c.customer_id = cp.customer_id and isLoggedIn = true

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select c.first_name , cp.isLoggedIn from customer c
left join customer_profile cp on c.customer_id = cp.customer_id

-- The number of customers that are not LoggedIn
select count(*) as not_logged_in_count from customer c
left join customer_profile cp on c.customer_id = cp.customer_id
where cp.isLoggedIn = false or cp.isLoggedIn is null


-- part 2

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
author VARCHAR (50) NOT NULL
)
insert into book(title , author) values ('Alice In Wonderland', 'Lewis Carroll')
insert into book(title , author) values ('Harry Potter', 'J.K Rowling')
insert into book(title , author) values ('To kill a mockingbird', 'Harper Lee')

select * from book

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
-- Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student(
student_id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE NOT NULL ,
age INTEGER CHECK (age <= 15)
)

insert into student(name , age) values ('John', 12)
insert into student(name , age) values ('Lera', 11)
insert into student(name , age) values ('Patrick', 10)
insert into student(name , age) values ('Bob', 14)

select * from student

-- Create a table named Library 
create table library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
insert into library(book_fk_id, student_fk_id, borrowed_date) values (
(select book_id from book where title='Alice In Wonderland') , (select student_id from student where name = 'John' ) , '2022/02/15'
)

-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
insert into library(book_fk_id, student_fk_id, borrowed_date) values (
(select book_id from book where title='To kill a mockingbird') , (select student_id from student where name = 'Bob' ) , '2021/03/03'
)

-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
insert into library(book_fk_id, student_fk_id, borrowed_date) values (
(select book_id from book where title='Alice In Wonderland') , (select student_id from student where name = 'Lera' ) , '2021/05/23'
)

-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
insert into library(book_fk_id, student_fk_id, borrowed_date) values (
(select book_id from book where title='Harry Potter') , (select student_id from student where name = 'Bob' ) , '2021/08/12'
)


-- Select all the columns from the junction table
select * from library


-- Select the name of the student and the title of the borrowed books
select s.name , b.title from student s , book b , library l
where s.student_id = l.student_fk_id and b.book_id = l.book_fk_id
-- or
select s.name, b.title from library l
inner join student s on s.student_id = l.student_fk_id
inner join book b on b.book_id = l.book_fk_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland
select AVG(s.age) as average_age from library l
inner join student s on s.student_id = l.student_fk_id
inner join book b on b.book_id = l.book_fk_id
where b.title = 'Alice In Wonderland'

-- Delete a student from the Student table, what happened in the junction table ?
delete from student where student_id = 1
select * from library
-- student with id 1 removed from the junction table without error






