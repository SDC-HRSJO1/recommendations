/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
const { Pool } = require('pg');

const pool = new Pool({ database: 'products' });

const getRecs = (pid, callback) => {
  pool.query('select t2.* from info t1 inner join info t2 on t1.id=$1 and t2.id!=$1 and t1.department=t2.department and t1.category=t2.category and t1.subcategory=t2.subcategory and t1.brand=t2.brand', [pid])
    .then(rec => { callback(null, rec.rows); })
    .catch(() => { callback('get'); });
};

const addItem = (newItem, callback) => {
  const { department, category, subcategory, brand, price, title, description, image, tag, rating, review_count } = newItem;
  pool.query('insert into info values (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id', [department, category, subcategory, brand, price, title, description, image, tag, rating, review_count])
    .then(() => { callback(null); })
    .catch(() => { callback('post'); });
};

const updateItem = (pid, updates, callback) => {
  let qInsert = '';
  const keys = Object.keys(updates);
  const values = Object.values(updates);
  values.unshift(pid);
  for (let i = 0, { length } = keys; i < length; i += 1) {
    qInsert += `${keys[i]}=$${i + 2}, `;
  }
  qInsert = qInsert.slice(0, qInsert.length - 2);
  pool.query(`update info set ${qInsert} where id=$1`, values)
    .then(() => { callback(null); })
    .catch(() => { callback('put'); });
};

const deleteItem = (pid, callback) => {
  pool.query('delete from info where id=$1 returning id', [pid])
    .then(() => { callback(null); })
    .catch(() => { callback('delete'); });
};

module.exports = { getRecs, addItem, updateItem, deleteItem };
