import CommentRepository from '../repositories/commentRepository.js';

function getCommentListByVideoID(videoID) {
  return CommentRepository.getCommentsByVideoID(videoID);
}

export default { getCommentListByVideoID };
