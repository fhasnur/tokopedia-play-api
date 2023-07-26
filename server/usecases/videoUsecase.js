/* eslint-disable no-undef */
import VideoRepository from '../repositories/videoRepository';

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

module.exports = { getAllVideoThumbnails, getVideoThumbnailById };
