drop keyspace [if exists] products;

create keyspace products with replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 3};

create table products.recommendations (
  department text,
  category text,
  subcategory text,
  brand text,
  price int,
  id int,
  PRIMARY KEY ((department, category, subcategory, brand), price)
);

create table products.info (
  id int,
  brand text,
  department text,
  category text,
  subcategory text,
  price int,
  title text,
  description text,
  tag int,
  rating int,
  review_count int,
  PRIMARY KEY (id)
);
