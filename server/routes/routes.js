import express from 'express';

import videoController from '../controllers/videoController.js';

const router = express.Router();

router.get('/thumbnails', videoController.videoThumbnailList);

router.get('/thumbnails/:id', videoController.videoThumbnailList);

router.get('/products', videoController.productList);

router.get('/comments', videoController.commentList);

router.post('/comments', videoController.submitComment);

export default router;
