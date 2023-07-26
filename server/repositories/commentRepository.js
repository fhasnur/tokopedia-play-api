import Comment from '../models/commentModel.js';

function getCommentsByVideoID(videoID) {
  return Comment.filter((comment) => comment.videoID === videoID);
}

function addComment(username, comment, videoID) {
  const newComment = new Comment({
    videoID: videoID,
    username: username,
    comment: comment,
  });

  newComment.save((err, savedComment) => {
    if (err) {
      console.error('Error saving comment:', err);
    } else {
      console.log('Comment saved successfully:', savedComment);
    }
  });

  return newComment;
}

export default { getCommentsByVideoID, addComment };
