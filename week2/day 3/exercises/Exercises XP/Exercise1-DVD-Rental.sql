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

-- Get a list of all the languages, from the language table.
select * from language
select * from film


-- Get a list of all films joined with their languages – select the following details : film title, 
-- description, and language name.
select f.title, f.description , l.name as language_name
from film f inner join language l on f.language_id = l.language_id

-- Get all languages, even if there are no films in those languages – select the following details :
-- film title, description, and language name.
select f.title, f.description , l.name as language_name
from language l left join film f on l.language_id = f.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

select * from new_film

insert into new_film (name)
values 
    ('Spirited Away'),
    ('Grave of the Fireflies'),
    ('The Secret World of Arrietty'),
    ('My Neighbor Totoro'),
    ('Howls Moving Castle');


--
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update date DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

insert into customer_review (film_id, language_id, title, score, review_text)
values
(
  (select id from new_film where id = 1),
  (select language_id from language where name = 'Japanese'),
  'SO Great!!',
  9,
  'one of my fav'
),
(
  (select id from new_film where id = 5),
  (select language_id from language where name = 'Japanese'),
  'Just wow!!',
  10,
  'the besttt one'
);

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_film where id = 1
select * from customer_review






