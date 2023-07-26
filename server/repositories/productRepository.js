import Product from '../models/productModel.js';

function getProductsByVideoID(videoID) {
  return Product.filter((product) => product.videoID === videoID);
}

export default { getProductsByVideoID };
