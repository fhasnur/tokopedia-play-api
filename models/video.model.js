import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  linkVideo: {
    type: String,
    required: true,
  },
});

const Videos = mongoose.model('Videos', videoSchema);

export default Videos;
