/* eslint-disable no-undef */
import Comment from '../models/commentModel';

const comments = [
  new Comment('user1', 'Comment 1', new Date()),
  new Comment('user2', 'Comment 2', new Date()),
];

function getCommentsByVideoID(videoID) {
  return comments.filter((comment) => comment.videoID === videoID);
}

function addComment(username, comment, videoID) {
  const newComment = new Comment(username, comment, new Date());
  comments.push(newComment);
  return newComment;
}

module.exports = { getCommentsByVideoID, addComment };
