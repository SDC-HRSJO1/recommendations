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
  related_pid:[Number],
  name: String,
  rating: Number,
  reviews_count: Number,
  price: String,
  image_url: String,
  label: String,
  show_most_like: String,
  wishlist: String,
  in_cart: Boolean,
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

// const getInfo = (callback) => {
//   Recommendation.find().then((pdts) =>{
//     callback(null, pdts);
//   }).catch(err =>{
//     callback(err);
//   })
// };

const getInfo = (callback) => {
  Recommendation.find({}, (err, results) => {
    callback(results);
  });
};

module.exports = {
  Recommendation,
  getInfo,
};
