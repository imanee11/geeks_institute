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

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- select * from film where film_id = 1
-- select l.name , f.title from language l
-- inner join film f on  l.language_id = f.language_id where film_id = 1
update film set language_id = (select language_id from language where name = 'French') 
where title = (select title from film where film_id = 1)

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which 
-- we INSERT into the customer table?
-- The customer table links to store and address so we must insert existing store_id and address_id.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
-- 

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet)
select * from rental
select count(*) as outstanding_rentals
from rental where return_date is null;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select f.title, f.replacement_cost from rental r
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
where r.return_date is null
order by f.replacement_cost DESC limit 30;

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select f.title from film f
join film_actor fa on f.film_id = fa.film_id
join actor a on fa.actor_id = a.actor_id
where a.first_name = 'Penelope' and a.last_name = 'Monroe' and (f.description ilike '%sumo%' or f.title ilike '%sumo%');

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select title from film  where length < 60 and rating = 'R' AND description ilike '%documentary%';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between 
-- the 28th of July and the 1st of August, 2005.
select * from film
select f.title from customer c
join rental r on c.customer_id = r.customer_id
join payment p on r.rental_id = p.rental_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
where c.first_name = 'Matthew' AND c.last_name = 'Mahan' and p.amount > 4.00 and r.return_date between '2005-07-28' and '2005-08-01'

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description,
-- and it looked like it was a very expensive DVD to replace.

select f.title, f.replacement_cost from customer c
join rental r on c.customer_id = r.customer_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
where c.first_name = 'Matthew' and c.last_name = 'Mahan' and (f.title ilike '%boat%' or f.description ilike '%boat%')
ORDER BY f.replacement_cost DESC;

