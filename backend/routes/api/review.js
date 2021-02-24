const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot, Review, User } = require("../../db/models");



router.post(
  "/:spotId/:userId",
  asyncHandler(async (req, res) => {
    const { overall, review, userId, spotId } = req.body;
    const reviews = await Review.create(req.body);
    res.json(reviews);
  })
);



router.get(
  "/:spotId/",
  asyncHandler(async (req, res) => {
        const id = Number(req.params.spotId);
        const spot = await Review.findAll({where:
           {spotId: id},
            include: { model: User
   }})

        console.log(spot);

        res.json(spot);
          }))













module.exports = router;
