-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- In the dvdrental database write a query to select all the columns from the “customer” table.
select * from customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select CONCAT(first_name, ' ', last_name) as full_name from customer;

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select DISTINCT create_date from customer

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer order by first_name DESC

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select * from film
select film_id , title , description ,release_year , rental_rate from film order by rental_rate ASC 

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select * from address
select address , phone from address where district = 'Texas'

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
select * from film
select * from film where film_id in (15, 150)

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id , title , description, length , rental_rate from film where title = 'train to busan'

-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the 
-- film ID, title, description, length and the rental rate of all the movies starting with the two first 
-- letters of your favorite movie.
select film_id , title , description, length , rental_rate from film where title like 'Tr%'

-- Write a query which will find the 10 cheapest movies.
select * from film order by rental_rate ASC limit 10

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
select * from film order by rental_rate ASC limit 10 offset 10

-- Write a query which will join the data in the customer table and the payment table. You want to 
-- get the first name and last name from the curstomer table, as well as the amount and the date of 
-- every payment made by a customer, ordered by their id (from 1 to…).
select * from payment
select customer.first_name , customer.last_name , payment.amount , payment.payment_date from customer join 
payment on customer.customer_id = payment.customer_id order by customer.customer_id; 

--You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from inventory
select f.film_id , f.title from film f where not exists (select * from inventory i where f.film_id = i.film_id)

-- Write a query to find which city is in which country.
select * from city
select city.city, country.country from city inner join country on city.country_id = country.country_id;

-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last),
-- the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
select c.customer_id , c.first_name , c.last_name , p.amount , p.payment_date , p.staff_id  from payment p 
inner join customer c on p.customer_id = c.customer_id order by p.staff_id;

