import VideoRepository from '../repositories/videoRepository.js';

function getAllVideoThumbnails() {
  return VideoRepository.getAllVideos().map(
    ({ videoID, urlImage, thumbnail }) => ({
      videoID,
      urlImage,
      thumbnail,
    }),
  );
}

function getVideoThumbnailById(videoID) {
  return VideoRepository.getVideoByID(videoID);
}

export default { getAllVideoThumbnails, getVideoThumbnailById };
