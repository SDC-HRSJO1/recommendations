const mongoose = require('mongoose');
const faker = require('faker');
const { Recommendation } = require('./index.js');

const pictures = [];
for (let j = 1; j < 11; j += 1) {
  pictures.push(`https://fec-lego-recommendation.s3-us-west-1.amazonaws.com/${j}.jpeg`);
}

const products = [];

for (let i = 1; i < 101; i += 1) {
  const recommendations = {};
  let count = 0;
  while (count < 12) {
    const randomNum = faker.random.number({
      min: 1,
      max: 100,
    });
    if (!recommendations[randomNum] && randomNum !== i) {
      recommendations[randomNum] = randomNum;
      count += 1;
    }
  }
  products.push({
    pid: i,
    Name: faker.commerce.productName(),
    Rating: faker.random.number({ min: 0, max: 5, precision: 0.1 }),
    Reviews_count: faker.random.number(3000),
    Price: faker.commerce.price(0.10, 100.00, 2, '$'),
    Image_url: pictures[faker.random.number(pictures.length - 1)],
    Label: faker.commerce.department(),
    Show_most_like: faker.commerce.productAdjective(),
    Wishlist: faker.random.boolean(),
    In_cart: false,
  });
}

Recommendation.remove({}, (err) => {
  if (err) {
    console.error('Remove', err);
  }
  Recommendation.insertMany(products, (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log('sucessfully seed');
    console.log(results[0]);

    mongoose.connection.close();
  });
});
