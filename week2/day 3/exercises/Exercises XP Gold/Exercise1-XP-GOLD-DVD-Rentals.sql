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

-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
select * from rental where return_date is nulL;

-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
select c.customer_id, c.first_name, c.last_name, count(r.rental_id) as unreturned_rentals
from customer c
join rental r on c.customer_id = r.customer_id
where r.return_date is null
group by c.customer_id, c.first_name, c.last_name
order by unreturned_rentals DESC;

-- Get a list of all the Action films with Joe Swank.
-- Before you start, could there be a shortcut to getting this information? Maybe a view?
select f.title from film f
inner join film_actor fa on f.film_id = fa.film_id
inner join actor a on fa.actor_id = a.actor_id
inner join film_category fc on f.film_id = fc.film_id
inner join category c on fc.category_id = c.category_id
where a.first_name = 'Joe' and a.last_name = 'Swank' and c.name = 'Action';

