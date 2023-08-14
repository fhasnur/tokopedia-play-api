import Videos from '../models/video.model.js';

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVideoById = async (req, res) => {
  const { videoId } = req.params;

  const video = await Videos.findById(String(videoId));
  if (!video) {
    return res.status(404).json({ message: 'Video not found' });
  }
  res.json(video);
};

export const createVideo = async (req, res) => {
  const { title, urlImage, thumbnail } = req.body;

  try {
    const newVideo = new Videos({
      title,
      urlImage,
      thumbnail,
    });

    const createdVideo = await newVideo.save();

    res.status(201).json(createdVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
