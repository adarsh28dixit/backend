const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const memberSchema = mongoose.Schema(
  {
    MemberID: {
      type: Number,
      required: true,
      unique: true,
    },
    MemberName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memberSchema.plugin(toJSON);
memberSchema.plugin(paginate);


const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
