const { cityService } = require('../services/index')
const logger = require("../config/logger-config");


async function createCity(req,res){
    try {
        const city = await cityService.createCity(req.body);
        console.log(city);
        return res.status(201).send({
            success:true,
            message:"City created successfully",
            data:city,
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in city-controller: createCity');  
        return res.status(504).send({
            success:false,
            message:"Error occured while createing city",
            data:{},
            error:error
        })
    }
   
}

module.exports = {
    createCity
}