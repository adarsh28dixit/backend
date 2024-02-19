const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Member } = require('../models');

const createMember = async (memberBody) => {
  return Member.create(memberBody);
};

module.exports = {
  createMember
}
