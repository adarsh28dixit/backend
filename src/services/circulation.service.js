const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Circulation, Member, Book } = require('../models');

const createCirculation = async (circulationBody) => {
  const isMember = await Member.findOne({ MemberID: circulationBody.member_id });
  if (!isMember) {
    return 'Invalid member';
  } else {
    if (circulationBody.eventtype === 'checkout') {
      await Book.findOneAndUpdate(
        { BookID: Number(circulationBody.book_id) },
        { $inc: { NumberOfCopies: -1 } },
        { new: true }
      );
    }else if(circulationBody.eventtype === 'return'){
      await Book.findOneAndUpdate(
        { BookID: Number(circulationBody.book_id) },
        { $inc: { NumberOfCopies: 1 } },
        { new: true }
      );
    }

  }
  return Circulation.create(circulationBody);
};

const showOverDueBooks = async(overDueBody) => {
  let books = 0;
  const circulations = await Circulation.find({member_id: overDueBody.memberId})
  circulations.forEach((cir) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const userDate = cir.date.split("-")[2]
    if(userDate + 6 < new Date().getDate()){
      books++;
    }
  })

  return books * 50;
}

const queryCirculation = async () => {
  const circulations = await Circulation.find();
  return circulations;
};

module.exports = {
  createCirculation,
  queryCirculation,
  showOverDueBooks
};
