import express from 'express';

import {
  getAllProducts,
  getProductsByVideoId,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:videoId', getProductsByVideoId);

export default router;
