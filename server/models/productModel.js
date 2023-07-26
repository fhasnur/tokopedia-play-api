/* eslint-disable no-undef */
import mongoose from 'mongoose';

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

const Product = mongoose.model('Product', productSchema);

export default Product;
