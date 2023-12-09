const express = require('express');

const {UserController} = require('../../controllers/index')
const {AuthValidator} = require('../../middlewares/index')

const router = express.Router();
router.post('/register',[AuthValidator.signUpValidator],UserController.registerUser);
router.post('/login',UserController.login);
router.get('/isAuthenticated',UserController.isAuthenticated);
module.exports = router;