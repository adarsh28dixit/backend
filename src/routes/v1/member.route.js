const express = require('express');
const validate = require('../../middlewares/validate');
const {  memberValidation } = require('../../validations');
const {  memberController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(memberValidation.createMember), memberController.createMember)



module.exports = router;
