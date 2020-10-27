/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
const { Pool } = require('pg');

const pool = new Pool({ database: 'products' });

const getRecs = (pid, callback) => {
  pool.query(`select * from info t1 inner join info t2 on t1.id=${pid} and t2.id!=${pid} and t1.department=t2.department and t1.category=t2.category and t1.subcategory=t2.subcategory and t1.brand=t2.brand`)
    .then(rec => { callback(null, rec.rows); })
    .catch(() => { callback('db'); });
};

module.exports = { getRecs };
