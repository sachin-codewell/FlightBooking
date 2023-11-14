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

async function getCity(req,res){
    try {
        console.log(req.params);
        const deleted = await cityService.getCity(req.params.id);
        return res.status(201).send({
            success:true,
            message:"City fetched successfully",
            data:city,
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in city-controller: getCity');  
        return res.status(504).send({
            success:false,
            message:"Error occured while fetching specific city data",
            data:{},
            error:error
        })
    }
   
}

async function getAllCity(req,res){
    try {
        const cities = await cityService.getAllCity(req.query);
        return res.status(201).send({
            success:true,
            message:'All City data fetched successfully',
            data:cities,
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in city-controller: getAllCity');  
        return res.status(504).send({
            success:false,
            message:"Error occured while frtching all city data",
            data:{},
            error:error
        })
    }
   
}

async function updateCity(req,res){
    try {
        const updated = await cityService.updateCity(req.body);
        return res.status(201).send({
            success:updated==1?true:false,
            message:updated==1?'City Updated successfully':'City with recievd id does not exist',
            data:updated,
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in city-controller: updateCity');  
        return res.status(504).send({
            success:false,
            message:"Error occured while updating city",
            data:{},
            error:error
        })
    }
   
}

async function deleteCity(req,res){
    try {
        console.log(req.params);
        const deleted = await cityService.deleteCity(req.params.id);
        return res.status(201).send({
            success:deleted==1?true:false,
            message:deleted==1?"City deleted successfully":"City with given id does not exist",
            data:{},
            error:{}
        })
        
    } catch(error) {
        logger.log('error','Something went wrong in city-controller: deleteCity');  
        return res.status(504).send({
            success:false,
            message:"Error occured while deleting city",
            data:{},
            error:error
        })
    }
   
}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    getAllCity,
    updateCity
}