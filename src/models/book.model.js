const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const bookSchema = mongoose.Schema(
  {
    BookID: {
      type: Number,
      required: true,
      unique: true,
    },
    BookName: {
      type: String,
      required: true,
      trim: true,
    },
    NumberOfCopies: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
