const express = require('express');

const {CityController} = require('../../controllers/index')
const router = express.Router();

router.post('',CityController.createCity)
router.delete('/:id',CityController.deleteCity)
router.get('/:id',CityController.getCity)
router.get('',CityController.getAllCity);
router.put('',CityController.updateCity);



module.exports = router;