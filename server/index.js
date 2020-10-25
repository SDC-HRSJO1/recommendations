/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../database/index.js');
require('newrelic');

const app = express();
app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/:pid', (req, res) => {
  db.getRecs(req.params.pid, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/new', (req, res) => {
  res.status(201);
});

app.put('/:pid', (req, res) => {
  res.status(204);
});

app.delete('/:pid', (req, res) => {
  res.status(204);
});

const port = 1234;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
