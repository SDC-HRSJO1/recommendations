const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/legodata', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.on('open', () => {
  console.log('Mongoose connection opened.');
});

const recommendationSchema = new mongoose.Schema({
  _id: Number,
  related_pid: [Number],
  brand: String,
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

const Recommendations = mongoose.model('Recommendations', recommendationSchema);

const getInfo = (pid, callback) => {
  Recommendations.find({ _id: pid }, (err, results) => {
    callback(results);
  });
};

const insertProduct = (newProduct, callback) => {
  Recommendations.create(newProduct, (err, results) => {
    callback(results);
  });
};

const updateProduct = (pid, updates, callback) => {
  Recommendations.findByIdAndUpdate(pid, updates, (err, results) => {
    callback(results);
  });
};

const deleteProduct = (pid, callback) => {
  Recommendations.findByIdAndDelete(pid, (err, results) => {
    callback(results);
  });
};

module.exports = {
  Recommendations,
  getInfo,
  insertProduct,
  updateProduct,
  deleteProduct,
};
