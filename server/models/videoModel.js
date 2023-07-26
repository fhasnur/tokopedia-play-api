import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoID: {
    type: String,
    required: true,
    unique: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
