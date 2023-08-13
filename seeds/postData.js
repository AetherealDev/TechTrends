const { Post } = require('../models');

const postData = [
  {
    title: 'Benefits of Using React for Web Development',
    author_id: '2',
    content: 'React has gained immense popularity...',
  },
  {
    title: 'Handling User Authentication in Single Page Apps',
    author_id: '3',
    content: 'Single Page Applications (SPAs) require...',
  },
  {
    title: 'Database Optimization Techniques',
    author_id: '1',
    content: 'Efficient database management is crucial...',
  },
  {
    title: 'Securing Your API Endpoints',
    author_id: '4',
    content: 'API security is a critical aspect of...',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
