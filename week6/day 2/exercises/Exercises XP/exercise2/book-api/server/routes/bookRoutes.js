const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/books', booksController.getAllBooks);
router.get('/books/:bookId', booksController.getBookById);
router.post('/books', booksController.createBook);
router.put('/books/:bookId', booksController.updateBook);
router.delete('/books/:bookId', booksController.deleteBook);

module.exports = router;
