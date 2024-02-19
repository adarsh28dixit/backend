const Joi = require('joi');

const createBook = {
  body: Joi.object().keys({
    BookID: Joi.number().required(),
    BookName: Joi.string().required(),
    NumberOfCopies: Joi.number().required(),

  }),
};


module.exports = {
  createBook,

};
