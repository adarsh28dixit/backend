const Joi = require('joi');

const createMember = {
  body: Joi.object().keys({
    MemberID: Joi.number().required(),
    MemberName: Joi.string().required(),
  }),
};


module.exports = {
  createMember,

};
