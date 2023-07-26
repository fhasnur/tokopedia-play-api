/* eslint-disable no-undef */
import ProductRepository from './repositories/productRepository';

function getProductListByVideoID(videoID) {
  return ProductRepository.getProductsByVideoID(videoID);
}

module.exports = { getProductListByVideoID };
