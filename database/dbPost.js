const { Pool } = require('pg');

const pool = new Pool({
  database: 'recommendations',
});

const recommend = (callback) => {
  pool.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  });
};

module.exports = {
  recommend,
};
