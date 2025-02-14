const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: String,
  // Add other fields as required
});

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  quote: String,
  image: String,
  is_commentable: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  created_at: { type: Date, default: Date.now }
});

const CategorySchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const TagSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const CommentSchema = new mongoose.Schema({
  body: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);
const Category = mongoose.model('Category', CategorySchema);
const Tag = mongoose.model('Tag', TagSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { User, Post, Category, Tag, Comment };
