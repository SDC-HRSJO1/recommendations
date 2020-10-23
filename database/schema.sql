drop database if exists recommendations;

create database recommendations;

\c recommendations;

create table recommendations (
  id serial PRIMARY KEY,
  department varchar(150),
  category varchar(150),
  subcategory varchar(150),
  brand varchar(150) not null
);

create table info (
  id serial PRIMARY KEY,
  brand varchar(150) not null,
  title varchar(150) not null,
  description varchar(750) not null,
  image varchar(150) not null,
  price decimal(10, 2) not null,
  tag int not null,
  rating decimal(3, 2) not null,
  review_count int not null
);

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

COPY products (id, department, category, subcategory, brand) TO '/Users/eric/Documents/projects/SDC/recommendations/database/postrec.csv' DELIMITER ';';
COPY recommendations (id, department, category, subcategory, brand) FROM '/Users/eric/Documents/projects/SDC/recommendations/database/postrec.csv' DELIMITER ';';

COPY products (id, brand, title, description, image, price, tag, rating, review_count) TO '/Users/eric/Documents/projects/SDC/recommendations/database/postinfo.csv' DELIMITER ';';
COPY info (id, brand, title, description, image, price, tag, rating, review_count) FROM '/Users/eric/Documents/projects/SDC/recommendations/database/postinfo.csv' DELIMITER ';';

drop table products;

create index idx_combo on recommendations (department, category, subcategory, brand);

-- select id from recommendations where department = 'Sports' and category = 'Granite' and subcategory = 'Rustic' and brand = 'Persevering';
