/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
const { Pool } = require('pg');

const pool = new Pool({ database: 'products' });

const getRecs = (pid, callback) => {
  pool.query(`select department,category,subcategory,brand from info where id=${pid}`)
    .then(cat => {
      const { department, category, subcategory, brand } = cat.rows[0];
      return pool.query(`select id from recommendations where department='${department}' and category='${category}' and subcategory='${subcategory}' and brand='${brand}'`);
    })
    .then(recs => {
      const { rows } = recs;
      const len = rows.length;
      for (let i = 0; i < len; i += 1) {
        rows[i] = rows[i].id;
      }
      return pool.query(`select * from info where id in (${rows})`);
    })
    .then(info => { callback(null, info.rows); })
    .catch(() => { callback('db'); });
};

module.exports = { getRecs };
