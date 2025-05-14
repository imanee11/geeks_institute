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

select * from items 
select * from customers
select * from purchases

-- Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
select first_name, last_name from customers order by last_name ASC, first_name ASC limit 2

-- Use SQL to delete all purchases made by Scott.
delete from purchases where customer_id = (select customer_id from customers where first_name = 'Scott' limit 1)

-- Does Scott still exist in the customers table, even though he has been deleted? Try and find him.
select * from customers where first_name = 'Scott'

-- Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order will 
-- appear, although instead of the customer’s first and last name, you should only see empty/blank.
select p.purchase_id,  p.customer_id, c.first_name, c.last_name from purchases p
left join customers c on p.customer_id = c.customer_id

-- Use SQL to find all purchases. Join purchases with the customers table, so that Scott’s order 
-- will NOT appear. (Which kind of join should you use?)
select p.purchase_id, c.first_name, c.last_name from purchases p
inner join customers c on p.customer_id = c.customer_id;


