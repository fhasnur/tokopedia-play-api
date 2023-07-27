import {
  getAllVideosUsecase,
  getVideoByIdUsecase,
} from '../usecases/videoUsecase.js';
import ProductUsecase from '../usecases/productUsecase.js';
import CommentUsecase from '../usecases/commentUsecase.js';

export async function getAllVideos(req, res) {
  try {
    const videos = await getAllVideosUsecase();

    if (!videos) {
      return res.status(404).json({ message: 'No videos found.' });
    }

    return res.json(videos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

export async function getVideoById(req, res) {
  try {
    const { videoID } = req.query;
    if (!videoID) {
      return res.status(400).json({ error: 'VideoID is required.' });
    }

    const video = await getVideoByIdUsecase(videoID);
    if (!video) {
      return res.status(404).json({ error: 'Video not found.' });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}

export async function productList(req, res) {
  const { videoID } = req.query;
  const products = await ProductUsecase.getProductListByVideoID(videoID);
  res.json(products);
}

export async function commentList(req, res) {
  const { videoID } = req.query;
  const comments = await CommentUsecase.getCommentListByVideoID(videoID);
  res.json(comments);
}

export async function submitComment(req, res) {
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
