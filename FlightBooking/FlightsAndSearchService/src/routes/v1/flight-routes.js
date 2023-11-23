const express = require('express');

const {FlightController} = require('../../controllers/index')

const router = express.Router();

router.post('',FlightController.createFlight);
router.get('/:id',FlightController.getFlight);

module.exports = router;