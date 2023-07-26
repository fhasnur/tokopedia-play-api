/* eslint-disable no-undef */
import mongoose from 'mongooose';

const commentSchema = new mongoose.Schema({
  videoID: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
