const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/legodata');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
  console.log('successfully connected');
});

const recommendationSchema = new mongoose.Schema({
  pid: Number,
  related_pid: [Number],
  name: String,
  rating: Number,
  reviews_count: Number,
  price: String,
  image_url: String,
  label: Number,
  show_most_like: [String],
  wishlist: Boolean,
  in_cart: Boolean,
  description: String,
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

const getInfo = (id, callback) => {
  Recommendation.find({ pid: id }, (err, results) => {
    callback(results);
  });
};

module.exports = {
  Recommendation,
  getInfo,
};
