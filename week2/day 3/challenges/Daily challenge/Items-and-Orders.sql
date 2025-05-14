-- Database: test2

-- DROP DATABASE IF EXISTS test2;

-- CREATE DATABASE test2
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- create user table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

insert into users (name, email) values ('imane', 'imane@imane.com'), ('salma', 'salma@salma.com');
select * from users

-- Create a table product_orders 
CREATE TABLE product_orders (
    product_id SERIAL PRIMARY KEY,
    user_id INT,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)
insert into product_orders (user_id, order_date) values (1, '2025-05-14'), (2, '2025-05-13')
select * from product_orders

-- create item table
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT,
    name VARCHAR(100),
    quantity INT,
    price INT,
    FOREIGN KEY (order_id) REFERENCES product_orders(product_id)
);

insert into items (order_id, name, quantity, price) values 
(1, 'Laptop', 1, 1000),
(1, 'Mouse', 2, 25),
(2, 'Keyboard', 1, 50)
select * from items

-- Create a function that returns the total price for a given order.
create function get_order_total(orderId INT)
returns NUMERIC as $$
declare
  total NUMERIC;
begin
  select sum(price * quantity) into total from items where order_id = orderId;
  return total;
end;
$$ LANGUAGE plpgsql;

select get_order_total(1);

-- Create a function that returns the total price for a given order of a given user.
create or replace function get_user_order_total(orderId INT , userId INT)
returns NUMERIC as $$
declare
  total NUMERIC;
begin
  select sum(i.price * i.quantity) into total from items i
  join product_orders o on i.order_id = o.product_id
  where o.user_id = userId and o.product_id = orderId;
  return total;
end;
$$ LANGUAGE plpgsql;

select get_user_order_total(1, 1);


	