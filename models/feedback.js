const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSaveErrors } = require("../helpers");

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

feedbackSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required(),
});

const Feedback = model("feedback", feedbackSchema);

module.exports = { Feedback, addSchema };
