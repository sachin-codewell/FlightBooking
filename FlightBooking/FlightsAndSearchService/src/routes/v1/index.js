const express = require('express');

const cityRoutes = require('./city-routes');

const router = express.Router();
router.use('/cities',cityRoutes)

module.exports = router;