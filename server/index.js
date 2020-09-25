const express = require('express');
const path = require('path');
const { getInfo } = require('../database/index.js');

const app = express();

const port = 1234;

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/recommendation/getInfo', (req, res) => {
  getInfo((data) => {
    console.log(data);
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
