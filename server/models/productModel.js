/* eslint-disable no-undef */
import mongoose from 'mongooose';

const productSchema = new mongoose.Schema({
  videoID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
    unique: true,
  },
  linkProduct: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
