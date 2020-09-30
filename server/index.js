const express = require('express');
const path = require('path');
const { getInfo } = require('../database/index.js');

const app = express();

const port = 1234;

app.use(express.static(path.join(__dirname, '/../public/dist')));

// get fn for the related pdts
app.get('/:pid/recommendation/getInfo', (req, res) => {
  getInfo(req.params.pid, (data) => {
    const related = data[0].related_pid;
    getInfo(related, (eachData) => {
      res.status(200).send(eachData);
    });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
