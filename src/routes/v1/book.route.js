const express = require('express');
const validate = require('../../middlewares/validate');
const { bookValidation } = require('../../validations');
const { bookController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(bookValidation.createBook), bookController.createBook)
  .get(bookController.queryBook)



module.exports = router;
