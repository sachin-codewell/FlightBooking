const {FlightService} = require('../services/index');
const {LoggerConfig:logger} = require('../config/index')

async function createFlight(req,res){
    try {
        const flight = await FlightService.createFlight(req.body);
        return res.status(201).send({
            success:true,
            message:"flight created successfully",
            data:flight,
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in flight-controller: createFlight');  
        return res.status(504).send({
            success: false,
            message: "Error occured while createing flight",
            data: {},
            error: error
        })
    }
}

async function getFlight(req,res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        return res.status(201).send({
            success: true,
            message: "flight details fetched successfully",
            data: flight,
            error: {}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in flight-controller: getFlight');  
        return res.status(504).send({
            success: false,
            message: "Error occured while fetching flight detail",
            data: {},
            error: error
        })
    }
}

module.exports = {
    createFlight,
    getFlight
}