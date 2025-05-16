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

-- Retrieve all films with a rating of G or PG, which are are not currently rented (they have been returned/have never been borrowed).
select DISTINCT film.film_id, film.title, film.rating from film
join inventory on film.film_id = inventory.film_id
left join rental on inventory.inventory_id = rental.inventory_id
where film.rating in ('G', 'PG') and (rental.return_date is not null or rental.rental_id is null);

-- Create a table for the children's movie waiting list
create table waiting_list (
    id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT NOT NULL,
    request_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (film_id) REFERENCES film(film_id)
)
insert into waiting_list (child_name, film_id) values
('Alice', 10),
('Bob', 10),
('Charlie', 12)

select * from waiting_list


-- Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.
select f.title, count(w.id) as waiting_count from waiting_list w
join film f on w.film_id = f.film_id group by f.title