# Recommendations
> This is a front-end recreation of the recommendations component on Lego. Based on the original functionality and style, the carousel is added to show more recommended items.


## Table of Contents
1. [Usage](#Usage)
2. [API](#API)


## Usage
1. npm i
2. npm run build
3. npm start
4. http://localhost:1234/


## API
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
