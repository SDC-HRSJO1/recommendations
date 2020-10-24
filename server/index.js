/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/dbPost.js');
// const db = require('../database/dbCass.js');
// const { getInfo } = require('../database/dbOriginal.js');

const app = express();

const port = 1234;

app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(morgan('tiny'));

// app.get('/:pid/recommendations', (req, res) => {
//   getInfo(req.params.pid, (data) => {
//     const related = data[0].related_pid;
//     getInfo(related, (eachData) => {
//       console.log(eachData);
//       res.status(200).send(eachData);
//     });
//   });
// });

app.get('/:pid', (req, res) => {
  db.getRecs(req.params.pid, (error, data) => {
    if (error) {
      res.status(404).send('error');
    } else {
      console.log('data:', data);
      res.status(200).send(data);
    }
  });
});

app.post('/new', (req, res) => {
  res.status(201).send('post');
});

app.put('/:pid', (req, res) => {
  res.status(204).send('put');
});

app.delete('/:pid', (req, res) => {
  res.status(204).send('delete');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
