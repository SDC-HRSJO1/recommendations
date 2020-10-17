drop database if exists recommendations;

create database recommendations;

use recommendations;

create table products (
  id int not null serial PRIMARY KEY,
  department varchar(150),
  category varchar(150),
  subcategory varchar(150),
  brand varchar(150) not null,
  price decimal(10, 2) not null,
  title varchar(150) not null,
  description varchar(750) not null,
  tag int(1) not null,
  rating decimal(3, 2) not null,
  review_count int(5) not null,
);
