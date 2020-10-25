/* eslint-disable object-curly-newline */
const { Pool } = require('pg');

const pool = new Pool({ database: 'products' });

const getRecs = (pid, callback) => {
  pool.query(`select department,category,subcategory,brand from info where id=${pid}`)
    .then((cats) => {
      const { department, category, subcategory, brand } = cats.rows[0];
      pool.query(`select id from recommendations where department='${department}' and category='${category}' and subcategory='${subcategory}' and brand='${brand}'`)
        .then((recs) => {
          const ids = recs.rows.map((product) => product.id);
          pool.query(`select * from info where id in (${ids.toString()})`)
            .then((products) => { callback(null, products.rows); })
            .catch((err) => { callback(err); });
        })
        .catch((idErr) => { callback(idErr); });
    })
    .catch((catErr) => { callback(catErr); });
};

module.exports = { getRecs };
