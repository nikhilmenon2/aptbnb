const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Booking, Review } = require("../../db/models");



router.post(
  "/:spotId/:userId",
  asyncHandler(async (req, res) => {
    const { overall, review, userId, spotId } = req.body;
    const reviews = await Review.create(req.body);
    res.json(reviews);
  })
);












module.exports = router;
