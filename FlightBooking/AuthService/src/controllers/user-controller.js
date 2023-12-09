const { UserService } = require('../services/index');
const HTTPCode = require('../helper/error-codes')

const userService = new UserService();

async function registerUser(req,res) {
    try {
        const response = await userService.registerUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(HTTPCode.CREATED).json({
            success:true,
            message: 'User Register Successfully',
            error: {},
            data: response,

        })
    } catch (error) {
        console.log('Something went wrong in user-controller: register');
        return res.status(HTTPCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'User Not Register',
            error: error,
            data: {},

        })
    }
}

async function login(req,res) {
    try {
        const response = await userService.login({
            email:req.body.email,
            password:req.body.password
        })
        return res.status(HTTPCode.OK).json({
            success:true,
            message: 'User Login Successfully',
            error: {},
            data: response,

        })
    } catch (error) {
        console.log('Something went wrong in user-controller: login');
        return res.status(HTTPCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Not signed in',
            error: error,
            data: {},

        })
    }
}

module.exports = {
    registerUser,
    login
}