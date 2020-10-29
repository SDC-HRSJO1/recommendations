/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(express.json());

app.get('/:pid', (req, res) => {
  db.getRecs(req.params.pid, (err, recs) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(recs);
    }
  });
});

app.post('/new', (req, res) => {
  db.addItem(req.body, (err) => {
    if (err) {
      res.status(400);
    } else {
      res.status(201).send();
    }
  });
});

app.put('/:pid', (req, res) => {
  db.updateItem(req.params.pid, req.body, (err) => {
    if (err) {
      res.status(400);
    } else {
      res.status(204).send();
    }
  });
});

app.delete('/:pid', (req, res) => {
  db.deleteItem(req.params.pid, (err) => {
    if (err) {
      res.status(400);
    } else {
      res.status(204).send();
    }
  });
});

const port = 1234;
app.listen(port, () => { console.log(`listening on port ${port}`); });
