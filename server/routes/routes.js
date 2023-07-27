import express from 'express';

import { getAllVideos, getVideoById } from '../controllers/videoController.js';

const router = express.Router();

router.get('/thumbnails', getAllVideos);

router.get('/thumbnails/:id', getVideoById);

router.get('/products');

router.get('/comments');

router.post('/comments');

export default router;
