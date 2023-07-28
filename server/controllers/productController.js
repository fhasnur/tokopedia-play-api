import Products from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({ message: 'Invalid productId' });
  }

  try {
    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const products = await Products.find({ product: productId });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
