-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item_name VARCHAR (50) NOT NULL,
 price INTEGER NOT NULL
)

CREATE TABLE customers(
 customer_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
)

insert into items (item_name , price) VALUES ('Small Desk' , 100)
insert into items (item_name , price) VALUES ('Large desk' , 300)
insert into items (item_name , price) VALUES ('fan' , 80)

insert into customers (first_name , last_name) VALUES ('Greg' , 'Jones')
insert into customers (first_name , last_name) VALUES ('Sandra' , 'Jones')
insert into customers (first_name , last_name) VALUES ('Scott' , 'Scott')
insert into customers (first_name , last_name) VALUES ('Trevor' , 'Green')
insert into customers (first_name , last_name) VALUES ('Melanie' , 'Johnson')

-- All the items.
select * from items

--All the items with a price above 80
select * from items where price > 80

-- All the items with a price below 300
select * from items where price < 300

--All customers whose last name is ‘Smith’ 
select * from customers where last_name = 'Smith'

-- All customers whose last name is ‘Jones’.
select * from customers where last_name = 'Jones'

-- All customers whose firstname is not ‘Scott’
select * from customers where last_name !='Scott'


select * from customers