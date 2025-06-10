const bookModel = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.getAllBooks();
        res.json(books);
    } catch {
        res.status(500).json({ message: 'server error' });
    }
};

const getBookById = async (req, res) => {
    try {
        const id = parseInt(req.params.bookId);
        const book = await bookModel.getBookById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'book not found' });
        }
    } catch {
        res.status(500).json({ message: 'server error' });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: 'all fields required' });
        }
        const [newBook] = await bookModel.createBook({ title, author, publishedYear });
        res.status(201).json(newBook);
    } catch {
        res.status(500).json({ message: 'server error' });
    }
};




const updateBook = async (req, res) => {
    try {
        const id = parseInt(req.params.bookId);
        const { title, author, publishedYear } = req.body;
        const [updatedBook] = await bookModel.updateBook(id, { title, author, publishedYear });
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: 'book not found' });
        }
    } catch {
        res.status(500).json({ message: 'server error' });
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = parseInt(req.params.bookId);
        const deleted = await bookModel.deleteBook(id);
        if (deleted) {
            res.json({ message: 'book deleted' });
        } else {
            res.status(404).json({ message: 'book not found' });
        }
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
