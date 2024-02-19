const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');

const createBook = catchAsync(async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send(book);
});

const queryBook = catchAsync (async (req, res) => {
  const books = await bookService.queryBooks();
  res.status(httpStatus.CREATED).send(books);
})



module.exports = {
  createBook,
  queryBook
};
