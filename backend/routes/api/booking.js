const express = require('express');
const router = express.Router();
const {Spot, User, Booking} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const asyncHandler = require('express-async-handler');

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {guest_num, startDate, endDate, spotId, userId} = req.body
    const booking = await Booking.create(req.body);
    res.json(booking);
  })
);

router.get(
  "/:userId/", requireAuth,
  asyncHandler(async (req, res) => {
    const id = Number(req.params.userId);
    const booking = await Booking.findAll({
      where: { userId: userId }
    });
    res.json(booking);
  })
);



module.exports = router;
