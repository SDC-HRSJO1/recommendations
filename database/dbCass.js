const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'products',
});

const getRecs = ({ department, category, subcategory, brand }, callback) => {
  client.execute('select id from products.recommendations where department = ? and category = ? and subcategory = ? and brand = ?', [department, category, subcategory, brand])
    .then((resultIds) => {
      console.log('Recommendations:', resultIds.rows);
      client.execute(`select * from products.info where id in (${resultIds.rows.toString()})`)
        .then((resultProducts) => {
          callback(null, resultProducts);
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
};

module.exports = {
  getRecs,
};
