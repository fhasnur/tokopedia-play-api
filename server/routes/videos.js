import express from 'express';

import {
  getAllVideos,
  getVideoById,
  createVideo,
} from '../controllers/video.controller.js';

const router = express.Router();

router.get('/', getAllVideos);

router.get('/:id', getVideoById);

router.post('/', createVideo);

export default router;
