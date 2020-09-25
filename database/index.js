const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/legodata');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
  console.log('successfully connected');
});

const recommendationSchema = new mongoose.Schema({
  pid: Number,
  Name: String,
  Rating: Number,
  Reviews_count: Number,
  Price: String,
  Image_url: String,
  Label: String,
  Show_most_like: String,
  Wishlist: Boolean,
  In_cart: Boolean,
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

const getInfo = (callback) => {
  Recommendation.find({}, (err, results) => {
    callback(results);
  });
};
module.exports = {
  Recommendation,
  getInfo,
};
