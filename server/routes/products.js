import express from 'express';

import {
  getAllProducts,
  getProductsById,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:videoId', getProductsById);

export default router;
