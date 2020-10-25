/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  database: 'products',
});

const getRecs = (pid, callback) => {
  pool.query(`select department, category, subcategory, brand from info where id = ${pid}`)
    .then((categories) => {
      // console.log('response.rows[0]:', categories.rows[0]);
      const { department, category, subcategory, brand } = categories.rows[0];
      pool.query(`select id from recommendations where department = '${department}' and category = '${category}' and subcategory = '${subcategory}' and brand = '${brand}'`)
        .then((recIds) => {
          // console.log('Recommendations:', recIds.rows);
          // const ids = recIds.rows.map(({ id }) => id);
          const ids = recIds.rows.map((product) => product.id);
          // console.log('ids:', ids);
          pool.query(`select * from info where id in (${ids.toString()})`)
            .then((resultProducts) => {
              callback(null, resultProducts.rows);
            })
            .catch((productError) => {
              // console.log('productError:', productError);
              callback(productError);
            });
        })
        .catch((idError) => {
          // console.log('idError:', idError);
          callback(idError);
        });
    })
    .catch((categoryError) => {
      // console.log('categoryError:', categoryError);
      callback(categoryError);
    });
};

module.exports = {
  getRecs,
};
