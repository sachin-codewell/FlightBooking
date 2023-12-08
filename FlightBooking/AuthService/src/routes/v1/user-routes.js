const express = require('express');

const {UserController} = require('../../controllers/index')

const router = express.Router();
router.post('/register',UserController.registerUser);
module.exports = router;