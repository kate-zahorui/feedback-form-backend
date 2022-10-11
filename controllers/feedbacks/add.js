const { Feedback } = require("../../models/feedback");

const add = async (feedback) => {
  try {
    const newFeedback = await Feedback.create(feedback);
    return newFeedback;
  } catch (error) {
    next(error);
  }
};

module.exports = add;
