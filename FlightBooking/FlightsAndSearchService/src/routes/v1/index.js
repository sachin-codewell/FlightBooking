const express = require('express');

const cityRoutes = require('./city-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();
router.use('/cities',cityRoutes)
router.use('/flights',flightRoutes)

module.exports = router;