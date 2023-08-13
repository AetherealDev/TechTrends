const { User } = require('../models');

const userData = [
  {
    username: 'newuser1',
    email: 'newuser1@gmail.com',
    password: 'newpassword123',
  },
  {
    username: 'newuser2',
    email: 'newuser2@yahoo.com',
    password: 'newpassword123',
  },
  {
    username: 'newuser3',
    email: 'newuser3@gmail.com',
    password: 'newpassword123',
  },
  {
    username: 'newuser4',
    email: 'newuser4@yahoo.com',
    password: 'newpassword123',
  },
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUser;
