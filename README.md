# Product Recommendations Back End
> The legacy codebase uses the product ID of the user's page to provide a list of recommended products from the database. This project expands the server & database's ability to operate with production level datasets (10 million primary records) under traffic load testing.

# Tech Stack
- JavaScript/Node
- PostgreSQL
- Cassandra
- k6 & New Relic

# Usage
1. npm i
2. npm run build
3. npm start
4. http://localhost:1234/


# API
**GET:**\
Request: pid (number)\
Response: array of recommended products
```
[{
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
}]
```

**POST:**\
Request: new product
```
{
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
}
```
Response: 201

**UPDATE:**\
Request: pid (number), product properties to update
```
{
  title text,
  price decimal,
}
```
Response: 204

**DELETE:**\
Request: pid (number)\
Response: 204
