const express = require('express');

const {cityController} = require('../../controllers/index')
const router = express.Router();

router.post('',cityController.createCity)


module.exports = router;