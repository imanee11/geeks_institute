const express = require('express');
const router = express.Router();

let books = []; 
let nextId = 1;

router.get('/', (req, res) => {
    res.json(books);
});

// add new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});


// update 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const book = books.find(b => b.id === id);
    if (book) {
        book.title = title;
        book.author = author;
        res.json(book);
    } else {
        res.status(404).json({ message: 'book not found' });
    }
});

// delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json({ message: 'book deleted' });
});

module.exports = router;
