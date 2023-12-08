const express = require('express');

const {UserController} = require('../../controllers/index')
const {AuthValidator} = require('../../middlewares/index')

const router = express.Router();
router.post('/register',[AuthValidator.signUpValidator],UserController.registerUser);
module.exports = router;