const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {  memberService } = require('../services');

const createMember = catchAsync(async (req, res) => {
  const member = await memberService.createMember(req.body);
  res.status(httpStatus.CREATED).send(member);
});



module.exports = {
  createMember,
};
