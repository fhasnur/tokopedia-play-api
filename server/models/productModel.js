import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
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
  videoId: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model('Products', productSchema);

export default Products;
