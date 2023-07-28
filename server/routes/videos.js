import express from 'express';

import {
  getAllVideos,
  getVideoById,
  createVideo,
} from '../controllers/videoController.js';

const router = express.Router();

router.get('/', getAllVideos);

router.get('/:id', getVideoById);

router.post('/', createVideo);

export default router;
