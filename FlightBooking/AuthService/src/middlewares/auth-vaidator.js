const HTTPCode = require('../helper/error-codes')

function signUpValidator(req,res,next) {

    if( !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        return res.status(HTTPCode.BAD_REQUEST).json({
            success: false,
            msg: "BAD REQUEST",
            data: {},
            error: "Some user details are missing for the registration"
        })
    }
    next();

}

module.exports = {
    signUpValidator
}