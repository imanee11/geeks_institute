const db = require('../config/knexfile');

const getAllBooks = () => db('books').select('*');

const getBookById = (id) => db('books').where({ id }).first();

const createBook = (book) => db('books')
    .insert({
        title: book.title,
        author: book.author,
        published_year: book.publishedYear  
    })
    .returning('*');

const updateBook = (id, book) => db('books')
    .where({ id })
    .update({
        title: book.title,
        author: book.author,
        published_year: book.publishedYear  
    })
    .returning('*');

const deleteBook = (id) => db('books').where({ id }).del();

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};

