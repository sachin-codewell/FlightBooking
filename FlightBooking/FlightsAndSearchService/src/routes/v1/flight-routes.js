const express = require('express');

const {FlightController} = require('../../controllers/index')

const router = express.Router();

router.post('',FlightController.createFlight);
router.get('/:id',FlightController.getFlight);
router.get('',FlightController.getAllFlight);

module.exports = router;