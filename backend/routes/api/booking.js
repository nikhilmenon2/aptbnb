const express = require('express');
const router = express.Router();
const {Spot, User, Booking} = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const asyncHandler = require('express-async-handler');

router.post('/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const data = req.body.booking;
    if (req.user.id !== data.userId) {
      return res.status(401).json({ error: "Unauthorized user" });
    }
      const booking = await Booking.create(data);
      res.json({ booking: data });
    }
  )
);


router.post('/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const data = req.body.booking;
    if (req.user.id !== data.userId) {
      return res.status(401).json({ error: "Unauthorized user" });
    }
      const booking = await Booking.create(data);
      res.json({ booking: data });
    }
  )
);
module.exports = router;
