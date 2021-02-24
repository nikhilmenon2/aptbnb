const express = require("express");
const router = express.Router();
const { Spot, Image } = require("../../db/models");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
    });
    res.json(spots );
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    res.json( spots);
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    const spot = await Spot.create({});
    res.json(spot);
  })
);


module.exports = router;
