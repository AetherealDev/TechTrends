const User = require('./User');  // Import the User model
const Post = require('./Post');  // Import the Post model
const Comment = require('./Comment');  // Import the Comment model

// Define associations between models

// A User can have many Posts
User.hasMany(Post, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});

// A Post belongs to a User
Post.belongsTo(User, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});

// A User can have many Comments
User.hasMany(Comment, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});

// A Comment belongs to a User
Comment.belongsTo(User, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});

// A Post can have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

// A Comment belongs to a Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

// Export the models
module.exports = { User, Post, Comment };
