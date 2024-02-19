const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {  circulationService } = require('../services');

const createCirculation = catchAsync(async (req, res) => {
  const circulations = await circulationService.createCirculation(req.body);
  res.status(httpStatus.CREATED).send(circulations);
});

const queryCirculations = catchAsync (async (req, res) => {
  const circulations = await circulationService.queryCirculation();
  res.status(httpStatus.CREATED).send(circulations);
})

const getOverDue = catchAsync (async (req, res) => {
  const data = await circulationService.showOverDueBooks(req.body);
  res.send(data);

})



module.exports = {
  createCirculation,
  queryCirculations,
  getOverDue
};
