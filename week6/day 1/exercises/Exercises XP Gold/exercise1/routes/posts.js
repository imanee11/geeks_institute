const express = require('express');
const router = express.Router();

let posts = []; 
let nextId = 1;

router.get('/', (req, res) => {
  res.json(posts);
});

// get post by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ message: 'post not found' });
  res.json(post);
});

// add a post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'title and content are required' });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    timestamp: new Date().toISOString()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// update
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: 'post not found' });
  if (!title || !content) {
    return res.status(400).json({ message: 'title and content are required' });
  }

  post.title = title;
  post.content = content;
  res.json(post);
});


// deete
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ message: 'post not found' });

  posts.splice(index, 1);
  res.json({ message: 'post deleted' });
});

module.exports = router;
