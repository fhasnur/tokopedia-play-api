import Video from '../models/videoModel.js';

function getAllVideos() {
  return Video.find();
}

function getVideoByID(videoID) {
  return Video.find((video) => video.videoID === videoID);
}

export default { getAllVideos, getVideoByID };
