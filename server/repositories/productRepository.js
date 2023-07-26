/* eslint-disable no-undef */
import Product from '../models/productModel';

const products = [
  new Product(1, 'link_product_1', 'Product 1', 10),
  new Product(2, 'link_product_2', 'Product 2', 20),
];

function getProductsByVideoID(videoID) {
  return products.filter((product) => product.videoID === videoID);
}

module.exports = { getProductsByVideoID };
