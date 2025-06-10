const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
    const posts = await Post.getAll();
    res.json(posts);
};

exports.getById = async (req, res) => {
    const post = await Post.getById(req.params.id);
    if (post) res.json(post);
    else res.status(404).json({ message: 'post not found' });
};

exports.create = async (req, res) => {
    const [newPost] = await Post.create(req.body);
    res.status(201).json(newPost);
};

exports.update = async (req, res) => {
    const [updated] = await Post.update(req.params.id, req.body);
    if (updated) res.json(updated);
    else res.status(404).json({ message: 'post not found' });
};

exports.remove = async (req, res) => {
    const deleted = await Post.remove(req.params.id);
    if (deleted) res.json({ message: 'post deleted' });
    else res.status(404).json({ message: 'post not found' });
};
