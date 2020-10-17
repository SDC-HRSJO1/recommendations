const faker = require('faker');
const fs = require('fs');

const records = 10000000;
const products = fs.createWriteStream('products.csv');
products.write('id,department,category,subcategory,brand,price,title,description,tag,rating,review_count\n', 'utf8');

const generateData = (file, encoding, callback) => {
  let count = 0;

  const write = () => {
    let status = true;
    while (count < records && status === true) {
      count += 1;
      const id = count;
      const department = faker.commerce.department();
      const category = faker.commerce.productMaterial();
      const subcategory = faker.commerce.productAdjective();
      const brand = faker.company.catchPhraseAdjective();
      const price = faker.random.number({ min: 10, max: 499 }) + 0.99;
      const title = faker.commerce.productName();
      const description = faker.commerce.productDescription();
      const tag = faker.random.number({ min: 0, max: 3 });
      const rating = faker.random.number({ min: 0, max: 5, precision: 0.01 });
      const reviewCount = faker.random.number({ min: 0, max: 1000 });
      const data = `${id},${department},${category},${subcategory},${brand},${price},${title},${description},${tag},${rating},${reviewCount}\n`;
      if (count === records) {
        file.write(data, 'utf8', callback);
      } else {
        status = file.write(data, 'utf8');
      }
    }
    if (count < records) {
      file.once('drain', write);
    }
  };
  write();
};

generateData(products, 'utf8', () => { products.end(); });
