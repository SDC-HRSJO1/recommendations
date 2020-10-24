/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'products',
});

const getRecs = (pid, callback) => {
  client.execute(`select department, category, subcategory, brand from products.info where id = ${pid}`)
    .then((categories) => {
      console.log('response.rows[0]:', categories.rows[0]);
      const { department, category, subcategory, brand } = categories.rows[0];
      client.execute(`select id from products.recommendations where department = '${department}' and category = '${category}' and subcategory = '${subcategory}' and brand = '${brand}'`)
        .then((recIds) => {
          console.log('Recommendations:', recIds.rows);
          const ids = recIds.rows.map(({ id }) => id);
          // const ids = recIds.rows.map((product) => product.id);
          console.log('ids:', ids);
          client.execute(`select brand, title, description, image, price, tag, rating, review_count from products.info where id in (${ids.toString()})`)
            .then((resultProducts) => {
              callback(null, resultProducts.rows);
            })
            .catch((productError) => {
              console.error('productError:', productError);
              callback(productError);
            });
        })
        .catch((idError) => {
          console.error('idError:', idError);
          callback(idError);
        });
    })
    .catch((categoryError) => {
      console.error('categoryError:', categoryError);
      callback(categoryError);
    });
};

module.exports = {
  getRecs,
};
