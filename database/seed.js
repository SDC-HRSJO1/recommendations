const mongoose = require('mongoose');
const faker = require('faker');
const { Recommendations } = require('./index.js');

const pictures = [];
for (let j = 1; j < 11; j += 1) {
  pictures.push(`https://fec-lego-recommendation.s3-us-west-1.amazonaws.com/${j}.jpeg`);
}

const products = [];
const generateArray = () => {
  const array = [];
  for (let k = 1; k < 13; k += 1) {
    array.push(faker.random.number(100));
  }
  return array;
};

for (let i = 1; i < 101; i += 1) {
  const brandName = faker.company.catchPhraseAdjective();
  console.log(`Product #${i} Brand: ${brandName}`);
  products.push({
    _id: i,
    related_pid: generateArray(),
    brand: brandName,
    name: faker.commerce.productName(),
    rating: faker.random.number({ min: 0, max: 5, precision: 0.01 }),
    reviews_count: faker.random.number(3000),
    price: faker.commerce.price(0.10, 100.00, 2, '$'),
    image_url: pictures[faker.random.number(pictures.length - 1)],
    label: faker.random.number({ min: 0, max: 3 }),
    show_most_like: [faker.commerce.productAdjective(), faker.commerce.productAdjective()],
    // wishlist: faker.random.boolean(),
    wishlist: false,
    in_cart: false,
    description: faker.commerce.productDescription(),
  });
}

Recommendations.deleteMany({}, (err) => {
  if (err) {
    console.error('Remove error:', err);
  }
  Recommendations.insertMany(products, (error, results) => {
    if (error) {
      console.log(error);
    }
    mongoose.connection.close();
    console.log(`${results.length} products added to the database.\nMongoose connection closed.`);
  });
});
