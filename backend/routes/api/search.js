const express = require("express");
const router = express.Router();
const { Spot } = require("../../db/models");
const asyncHandler = require("express-async-handler");
const {Op} = require("sequelize")

router.get(
  "/",
  asyncHandler(async (req, res) => {

    let coord = req.query.coord;

    if (coord == "NoLocation") {
      return { searchResults: [] };
    }

    if (coord != "NoLocation") {
      coord = coord.split(",");
      lng = Number(coord[0]);
      lat = Number(coord[1]);
      latRange = 0.33;
      lngRange = 0.33;


      const nearbySpots = await Spot.findAll({
        where: {
          [Op.and]: [
            {
              long: {
                [Op.between]: [lng - lngRange, lng + lngRange],
              },
            },
            {
              lat: {
                [Op.between]: [lat - latRange, lat + latRange],
              },
            },
          ],
        },
        order: [
          ["id", "ASC"],
        ],
        limit: 10
      });

      
      
      
      res.json({
        searchResults: nearbySpots,
        searchCenter: { longitude: lng, latitude: lat },
      });
    }
  })
);


module.exports = router;