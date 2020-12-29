const express = require('express');
const router = express.Router();
const {Spot, Image} = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const asyncHandler = require('express-async-handler');

router.get('/',
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({include: {model:Image, attributes:["image_url"]}});
    res.json({ spots });
  })
)


router.get('/:id',
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    const urls = [];
    res.json({ spot });
  })
);


module.exports = router;
