const express = require("express");
const feedbacks = require("../../controllers/feedbacks");
const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../models/feedback");

const router = express.Router();

router.post("/", validateBody(addSchema), async (req, res, next) => {
  try {
    const newFeedback = await feedbacks.add(req.body);
    res.status(201).json(newFeedback);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
