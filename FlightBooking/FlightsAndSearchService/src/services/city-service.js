const { CityRepository } = require('../repositories/index')
const logger = require("../config/logger-config");


const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        console.log('service',city);
        return city;
        
    } catch(error) {
        logger.log('error','Something went wrong in city-service: createCity');  
        throw {error};
    }

}

module.exports = {
    createCity
}