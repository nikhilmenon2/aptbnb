const express = require('express');
const router = express.Router();
const Spot = require('../../models/Spot');




router.get('/:spot_id', (req, res) => {
  Spot.findById(req.params.spot_id)
    .then(spot => {
      res.json( { [spot._id]: spot } );
      }
    )
    .catch(err =>
      res.status(404).json({ nospotfound: 'No spot found with that ID' })
    );
    });