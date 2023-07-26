/* eslint-disable no-undef */
import Video from '../models/videoModel';

const videos = [
  new Video(1, 'url_image_1', 'thumbnail_1.jpg'),
  new Video(2, 'url_image_2', 'thumbnail_2.jpg'),
];

function getAllVideos() {
  return videos;
}

function getVideoByID(videoID) {
  return videos.find((video) => video.videoID === videoID);
}

module.exports = { getAllVideos, getVideoByID };
