/* eslint-disable no-undef */
import CommentRepository from '../repositories/commentRepository';

function getCommentListByVideoID(videoID) {
  return CommentRepository.getCommentsByVideoID(videoID);
}

module.exports = { getCommentListByVideoID };
