const express = require('express');

const {cityController} = require('../../controllers/index')
const router = express.Router();

router.post('',cityController.createCity)
router.delete('/:id',cityController.deleteCity)
router.get('/:id',cityController.getCity)
router.get('',cityController.getAllCity);
router.put('',cityController.updateCity);



module.exports = router;