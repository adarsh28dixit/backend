const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Book } = require('../models');

const createBook = async (bookBody) => {
  return Book.create(bookBody);
};

const queryBooks = async () => {
  const books = await Book.find()
  return books;
};

module.exports = {
  createBook,
  queryBooks
}
