const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const circulationSchema = mongoose.Schema(
  {
    eventtype: {
      type: String,
      required: true,
      trim: true,
    },
    book_id: {
      type: Number,
      required: true,
    },
    member_id: {
      type: Number,
      required: true,
    },
    date: {
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
circulationSchema.plugin(toJSON);
circulationSchema.plugin(paginate);


const Circulation = mongoose.model('Circulation', circulationSchema);

module.exports = Circulation;
