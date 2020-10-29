drop database if exists products;

create database products;

\c products;

-- create table recommendations (
--   id serial PRIMARY KEY,
--   department varchar(150),
--   category varchar(150),
--   subcategory varchar(150),
--   brand varchar(150) not null
-- );

create table info (
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

copy info (id, department, category, subcategory, brand, price, title, description, image, tag, rating, review_count)
from '/Users/eric/Documents/projects/SDC/recommendations/database/10Mproducts.csv'
DELIMITER ';'
CSV HEADER;

create index idx on info (department, category, subcategory, brand);

alter sequence info_id_seq RESTART WITH 10000001;

-- select * from info where department='Sports' and category='Granite' and subcategory='Rustic' and brand='Persevering';


-- COPY info (id, department, category, subcategory, brand) TO '/Users/eric/Documents/projects/SDC/recommendations/database/postrec.csv' DELIMITER ';';
-- COPY recommendations (id, department, category, subcategory, brand) FROM '/Users/eric/Documents/projects/SDC/recommendations/database/postrec.csv' DELIMITER ';';
-- create index idx_combo on recommendations (department, category, subcategory, brand);

-- select department, category, subcategory, brand from info where id = 8988988;
-- select id from recommendations where department = 'Sports' and category = 'Granite' and subcategory = 'Rustic' and brand = 'Persevering';
-- select * from info where id in (997824, 137263, 417652, 316960, 828756, 2150102, 1515296, 1793882, 1267012, 6539265, 3093985, 5013451, 6080278, 2930649, 4061147, 4619859, 9639294, 7471966, 7691748, 7706589, 8317649, 9923940);
