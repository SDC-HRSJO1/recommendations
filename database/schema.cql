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

-- select department, category, subcategory, brand from products.info where id = 8988988;
-- select id from products.recommendations where department = 'Sports' and category = 'Granite' and subcategory = 'Rustic' and brand = 'Persevering' allow filtering;
-- select * from products.info where id in (997824, 4061147, 2150102, 417652, 1515296, 7691748, 5013451, 1267012, 6080278, 6539265, 9639294, 4619859, 7471966, 828756, 137263, 316960, 8317649, 2930649, 3093985, 7706589, 9923940);
