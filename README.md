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
  id: number,
  brand: string,
  title: string,
  description: string,
  image: string,
  tag: number,
  price: number,
  rating: number,
  reviews: number,
  department: string (faker.commerce.department()),
  category: string (faker.commerce.productMaterial()),
  subcategory: string (faker.commerce.productAdjective()),
}]
```

**POST:**\
Request: new product
```
{
  brand: string,
  title: string,
  description: string,
  image: string,
  tag: number,
  price: number,
  rating: number,
  reviews: number,
  category: string (faker.commerce.productMaterial()),
  subcategory_1: string (faker.commerce.department()),
  subcategory 2: string (faker.commerce.productAdjective()),
}
```
Response: 201

**UPDATE:**\
Request: pid (number), product properties to update
```
{
  title: string,
  price: number,
}
```
Response: 204

**DELETE:**\
Request: pid (number)\
Response: 204
