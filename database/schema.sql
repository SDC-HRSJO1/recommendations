DROP DATABASE IF EXISTS recommendations;

CREATE DATABASE recommendations;

USE recommendations;

CREATE TABLE products (
  id int not null serial PRIMARY KEY,
  brand varchar(150) not null,
  title varchar(150) not null,
  description varchar(750) not null,
  tag int(1) not null,
  price decimal(10, 2) not null,
  rating decimal(3, 2) not null,
  review_count int(5) not null,
  category_1 varchar(150),
  category_2 varchar(150),
  category_3 varchar(150),
);
