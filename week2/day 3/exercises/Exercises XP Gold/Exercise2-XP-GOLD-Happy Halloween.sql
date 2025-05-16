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


-- How many stores there are, and in which city and country they are located.
select ci.city, co.country, count(s.store_id) as store_count from store s
join address a on s.address_id = a.address_id
join city ci on a.city_id = ci.city_id
join country co on ci.country_id = co.country_id
group by ci.city, co.country;

-- How many hours of viewing time there are in total in each store – in other words, the sum of the length of every 
-- inventory item in each store.
select store.store_id, sum(film.length) as total_minutes from store
join inventory on store.store_id = inventory.store_id
join rental on inventory.inventory_id = rental.inventory_id
join film on inventory.film_id = film.film_id
where rental.return_date is not null
group by store.store_id;


-- A list of all customers in the cities where the stores are located.
select DISTINCT customer.customer_id, customer.first_name, customer.last_name from customer
join address on customer.address_id = address.address_id
join city on address.city_id = city.city_id
where city.city_id in (
  select city.city_id from store
  join address on store.address_id = address.address_id
);

-- A list of all customers in the countries where the stores are located.
select DISTINCT customer.customer_id, customer.first_name, customer.last_name
from customer
join address on customer.address_id = address.address_id
join city on address.city_id = city.city_id
join country on city.country_id = country.country_id
where country.country_id in (
  select country.country_id from store
  join address on store.address_id = address.address_id
  join city on address.city_id = city.city_id
  join country on city.country_id = country.country_id
);

--  Safe movies list
select film.film_id, film.title, film.length from film
where film.film_id not in (
    select film_id from film_category
    join category on film_category.category_id = category.category_id
    where category.name = 'Horror'
)
and film.title not ilike '%beast%'
and film.title not ilike '%monster%'
and film.title not ilike '%ghost%'
and film.title not ilike '%dead%'
and film.title not ilike '%zombie%'
and film.title not ilike '%undead%';

-- For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).
select sum(length) as total_minutes,
  ROUND(sum(length) / 60.0, 2) as total_hours,
  ROUND(sum(length) / 1440.0, 2) as total_days
from film
where film.film_id not in (
    select film_id from film_category
    join category on film_category.category_id = category.category_id
    where category.name = 'Horror'
)
and film.title not ilike '%beast%'
and film.title not ilike '%monster%'
and film.title not ilike '%ghost%'
and film.title not ilike '%dead%'
and film.title not ilike '%zombie%'
and film.title not ilike '%undead%';

select 
  sum(length) as total_minutes,
  ROUND(sum(length) / 60.0, 2) as total_hours,
  ROUND(sum(length) / 1440.0, 2) as total_days
from film;



