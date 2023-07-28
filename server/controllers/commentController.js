import Videos from '../models/videoModel.js';
import Comments from '../models/commentModel.js';

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addComment = async (req, res) => {
  const { username, comment, videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({ message: 'videoId is required' });
  }

  try {
    const video = await Comments.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const newComment = new Comments({
      username,
      comment,
      videoId,
    });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommentByVideoId = async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    return res.status(400).json({ message: 'videoId is required' });
  }

  try {
    const video = await Videos.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const comments = await Comments.find({ videos: videoId });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
