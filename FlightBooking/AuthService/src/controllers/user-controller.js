const {UserService} = require('../services/index');

const userService = new UserService();

async function registerUser(req,res) {
    try {
        const user = userService.registerUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            success:true,
            message: 'User Register Successfully',
            error: {},
            data: user,

        })
    } catch (error) {
        console.log('Something went wrong in user-controller: register');
        return res.status(201).json({
            success:true,
            message: 'User Not Register',
            error: error,
            data: user,

        })
    }
}

module.exports = {
    registerUser,
}