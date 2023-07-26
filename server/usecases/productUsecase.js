import ProductRepository from '../repositories/productRepository.js';

function getProductListByVideoID(videoID) {
  return ProductRepository.getProductsByVideoID(videoID);
}

export default { getProductListByVideoID };
