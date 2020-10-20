const faker = require('faker');
const fs = require('fs');

const records = 1000000;
const csvFile = fs.createWriteStream('products.csv');
csvFile.write('id;department;category;subcategory;brand;price;title;description;image;tag;rating;review_count\n');

const seed = (file) => {
  let count = 0;
  // let drainCount = 0;

  const generateData = () => {
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
      const imageId = faker.random.number({ min: 1, max: 25 });
      const image = `https://sdc-recommendations.s3-us-west-1.amazonaws.com/p${imageId}.jpg`;
      const tag = faker.random.number({ min: 0, max: 3 });
      const rating = faker.random.number({ min: 0, max: 5, precision: 0.01 });
      const reviewCount = faker.random.number({ min: 0, max: 1000 });
      const data = `${id};${department};${category};${subcategory};${brand};${price};${title};${description};${image};${tag};${rating};${reviewCount}\n`;
      if (count === records) {
        file.write(data, () => { csvFile.end(); });
      } else {
        status = file.write(data);
      }
    }
    if (count < records) {
      // drainCount += 1;
      // console.log('drain count:', drainCount);
      file.once('drain', generateData);
    }
  };
  generateData();
};

seed(csvFile);
