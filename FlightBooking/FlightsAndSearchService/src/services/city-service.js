const { CityRepository } = require('../repositories/index')
const logger = require("../config/logger-config");
const { Op } = require('sequelize');


const cityRepository = new CityRepository();

function createFilter(data) {
    let filter = {};
    if(data.name){
        Object.assign(filter,{name:{[Op.startsWith]: data.name}})
    }
    return filter;
}

async function createCity(newCityData){
    try {
        const city = await cityRepository.create(newCityData);
        return city;    
    } catch(error) {
        logger.log('error','Something went wrong in city-service: createCity');  
        throw {error};
    }

}

async function getCity(cityId){
    try {
        const city = await cityRepository.get(cityId);
        return city;    
    } catch(error) {
        logger.log('error','Something went wrong in city-service: deleteCity');  
        throw {error};
    }

}

async function getAllCity(data){
    try {
        let filter = createFilter(data);
        const cities = await cityRepository.getAll(filter);
        return cities;    
    } catch(error) {
        logger.log('error','Something went wrong in city-service: getAllCity');  
        throw {error};
    }

}

async function updateCity(id,updatedData){
    try {
        const updated = await cityRepository.update(id,updatedData);
        return updated;    
    } catch(error) {
        logger.log('error','Something went wrong in city-service: updateCity');  
        throw {error};
    }

}

async function deleteCity(cityId){
    try {
        const deleted = await cityRepository.delete(cityId);
        return deleted;    
    } catch(error) {
        logger.log('error','Something went wrong in city-service: deleteCity');  
        throw {error};
    }

}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    getAllCity,
    updateCity
}