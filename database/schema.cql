drop keyspace if exists products;

create keyspace products
  with replication = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 }
  and durable_writes = true;

use products;

create table products.recommendations (
  department text,
  category text,
  subcategory text,
  brand text,
  id int,
  PRIMARY KEY ((department, category, subcategory, brand), id)
);

create table products.info (
  id int,
  department text,
  category text,
  subcategory text,
  brand text,
  price decimal,
  title text,
  description text,
  image text,
  tag int,
  rating decimal,
  review_count int,
  PRIMARY KEY (id)
);

copy products.info (id, department, category, subcategory, brand, price, title, description, image, tag, rating, review_count)
from '/Users/eric/Documents/projects/SDC/recommendations/database/10Mproducts.csv' with delimiter = ';' and header = true;

COPY products.info (department, category, subcategory, brand, id) TO 'recommendations.csv' with delimiter = ';' and header = true;
COPY products.recommendations (department, category, subcategory, brand, id) FROM 'recommendations.csv' with delimiter = ';' and header = true;

-- select id from products.recommendations where department = 'Sports' and category = 'Granite' and subcategory = 'Rustic' and brand = 'Persevering' allow filtering;
