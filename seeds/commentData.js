const { Comment } = require('../models');

const commentData = [
  {
    post_id: '1',
    author_id: '2',
    content: 'Hello World!!',
  },
  {
    post_id: '2',
    author_id: '3',
    content: 'I\'m sleeping!!!',
  },
  {
    post_id: '3',
    author_id: '2',
    content: 'Wow this is cool!!!',
  },
  {
    post_id: '4',
    author_id: '4',
    content: 'Computers are amazing!!!',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);


module.exports = seedComment;