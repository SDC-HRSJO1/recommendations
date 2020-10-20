drop database if exists recommendations;

create database recommendations;

\c recommendations;

create table products (
  id serial PRIMARY KEY,
  department varchar(150),
  category varchar(150),
  subcategory varchar(150),
  brand varchar(150) not null,
  price decimal(10, 2) not null,
  title varchar(150) not null,
  description varchar(750) not null,
  image varchar(150) not null,
  tag int not null,
  rating decimal(3, 2) not null,
  review_count int not null
);

copy products (id, department, category, subcategory, brand, price, title, description, image, tag, rating, review_count)
from '/Users/eric/Documents/projects/SDC/recommendations/database/10Mproducts.csv'
DELIMITER ';'
CSV HEADER;
