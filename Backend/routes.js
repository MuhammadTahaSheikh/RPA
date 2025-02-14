const express = require('express');
const router = express.Router();
const postController = require('./postController');
const { upload } = require('./postController');

// Define routes
router.get('/posts', postController.index);
router.get('/admin/posts', postController.adminPosts);
router.get('/all-posts', postController.getAllPosts);
router.post('/posts', upload.single('image'), postController.store);
router.get('/posts/:id', postController.show);
router.delete('/posts/:id', postController.destroy);

// Define other routes similarly

module.exports = router;
