import express from 'express';

import {
  getAllComments,
  addComment,
  getCommentByVideoId,
} from '../controllers/videoController.js';

const router = express.Router();

router.get('/', getAllComments);

router.post('/', addComment);

router.get('/:videoId', getCommentByVideoId);

export default router;
