/* eslint-disable no-undef */
import mongoose from 'mongooose';

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

module.exports = mongoose.model('Video', videoSchema);
