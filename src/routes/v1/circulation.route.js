const express = require('express');
const validate = require('../../middlewares/validate');
const { bookValidation } = require('../../validations');
const { circulationController } = require('../../controllers');
const { circulationService } = require('../../services');

const router = express.Router();

router
  .route('/')
  .post(circulationController.createCirculation)
  .get(circulationService.queryCirculation)

router.route('/getOverdue').get(circulationController.getOverDue)



module.exports = router;
