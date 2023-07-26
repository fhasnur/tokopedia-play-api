/* eslint-disable no-undef */
import VideoUsecase from '../usecases/videoUsecase';
import ProductUsecase from '../usecases/productUsecase';
import CommentUsecase from '../usecases/commentUsecase';

function videoThumbnailList(req, res) {
  const thumbnails = VideoUsecase.getAllVideoThumbnails();
  res.json(thumbnails);
}

function videoThumbnailById(req, res) {
  try {
    const { videoID } = req.query;
    if (!videoID) {
      return res.status(400).json({ error: 'VideoID is required.' });
    }

    const video = VideoUseCase.getVideoThumbnailById(Number(videoID));
    if (!video) {
      return res.status(404).json({ error: 'Video not found.' });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}

function productList(req, res) {
  const { videoID } = req.query;
  const products = ProductUsecase.getProductListByVideoID(videoID);
  res.json(products);
}

function commentList(req, res) {
  const { videoID } = req.query;
  const comments = CommentUsecase.getCommentListByVideoID(videoID);
  res.json(comments);
}

function submitComment(req, res) {
  try {
    const { username, comment, videoID } = req.body;
    const newComment = CommentUsecase.submitComment(username, comment, videoID);

    if (newComment) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
}

module.exports = {
  videoThumbnailList,
  videoThumbnailById,
  productList,
  commentList,
  submitComment,
};
