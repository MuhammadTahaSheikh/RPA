const { Post, User, Category, Tag, Comment } = require('./models');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const handleError = (res, err) => res.status(500).json({ error: `Something went wrong: ${err.message}` });

const index = async (req, res) => {
  try {
    const posts = await Post.find().populate('user').limit(12);
    const postsWithImagesAndUsers = posts.map(post => ({
      id: post._id,
      title: post.title,
      body: post.body,
      quote: post.quote,
      user_name: post.user.first_name,
      image_url: post.image ? `/images/${post.image}` : null,
      is_commentable: post.is_commentable,
      created_at: post.created_at
    }));
    res.json(postsWithImagesAndUsers);
  } catch (err) {
    handleError(res, err);
  }
};

const adminPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    const postsWithImagesAndUsers = posts.map(post => ({
      id: post._id,
      title: post.title,
      body: post.body,
      quote: post.quote,
      user_name: post.user.first_name,
      image_url: post.image ? `/images/${post.image}` : null,
      is_commentable: post.is_commentable,
      created_at: post.created_at
    }));
    res.json(postsWithImagesAndUsers);
  } catch (err) {
    handleError(res, err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    const postsWithImages = posts.map(post => ({
      ...post._doc,
      image_url: post.image ? `/images/${post.image}` : null
    }));
    res.json({ posts: postsWithImages });
  } catch (err) {
    handleError(res, err);
  }
};

const store = async (req, res) => {
  try {
    const user = req.user; // Assuming user is available on the request
    const { title, body, quote, category_id, tag_id } = req.body;

    const post = new Post({
      title,
      body,
      user: user._id,
      quote
    });

    if (req.file) {
      post.image = req.file.filename;
    }

    await post.save();

    const categoryIds = JSON.parse(category_id);
    post.categories = categoryIds;

    const tagIds = JSON.parse(tag_id);
    post.tags = tagIds;

    await post.save();

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (err) {
    handleError(res, err);
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    handleError(res, err);
  }
};

const destroy = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.remove();
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    handleError(res, err);
  }
};

// Other functions (relatedPosts, searchPosts, searchByCategory, searchByTag, postComment) can be implemented similarly

module.exports = { index, adminPosts, getAllPosts, store, show, destroy, upload };
