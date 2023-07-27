import {
  getAllVideosRepo,
  getVideoByIdRepo,
} from '../repositories/videoRepository.js';

export async function getAllVideosUsecase() {
  try {
    const videos = await getAllVideosRepo();

    if (!videos || videos.length === 0) {
      return null;
    }

    return videos;
  } catch (error) {
    console.error('Error in getAllVideosUsecase:', error);
    throw error;
  }
}

export async function getVideoByIdUsecase(videoID) {
  try {
    const video = await getVideoByIdRepo(videoID);

    if (!video) {
      return null;
    }

    return video;
  } catch (error) {
    console.error('Error in getVideoByIdUsecase:', error);
    throw error;
  }
}
