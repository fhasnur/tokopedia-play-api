import Video from '../models/videoModel.js';

export async function getAllVideosRepo() {
  try {
    const videos = await Video.find();
    return videos;
  } catch (error) {
    console.error('Error getting all videos:', error);
    throw error;
  }
}

export async function getVideoByIdRepo(videoID) {
  try {
    const video = await Video.findOne({ videoID: videoID });
    return video;
  } catch (error) {
    console.error('Error getting video by ID:', error);
    throw error;
  }
}
