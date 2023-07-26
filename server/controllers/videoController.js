import VideoUsecase from '../usecases/videoUsecase.js';
import ProductUsecase from '../usecases/productUsecase.js';
import CommentUsecase from '../usecases/commentUsecase.js';

function videoThumbnailList(req, res) {
  const thumbnails = VideoUsecase.getAllVideoThumbnails();
  res.json(thumbnails);
}

async function videoThumbnailById(req, res) {
  try {
    const { videoID } = req.query;
    if (!videoID) {
      return res.status(400).json({ error: 'VideoID is required.' });
    }

    const video = await VideoUsecase.getVideoThumbnailById(Number(videoID));
    if (!video) {
      return res.status(404).json({ error: 'Video not found.' });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}

async function productList(req, res) {
  const { videoID } = req.query;
  const products = await ProductUsecase.getProductListByVideoID(videoID);
  res.json(products);
}

async function commentList(req, res) {
  const { videoID } = req.query;
  const comments = await CommentUsecase.getCommentListByVideoID(videoID);
  res.json(comments);
}

async function submitComment(req, res) {
  try {
    const { username, comment, videoID } = req.body;
    const newComment = await CommentUsecase.submitComment(
      username,
      comment,
      videoID,
    );

    if (newComment) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
}

export default {
  videoThumbnailList,
  videoThumbnailById,
  productList,
  commentList,
  submitComment,
};
