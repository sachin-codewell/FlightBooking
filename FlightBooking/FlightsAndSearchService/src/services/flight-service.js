const { FlightRepository, AirplaneRepository } = require('../repositories/index')
const logger = require("../config/logger-config");

const { Op } = require('sequelize');


const flightRepository = new FlightRepository();
const airplaneRepository = new AirplaneRepository();

function createFilter(data){
    let filter = {};
    if(data.departureAirportId){
        filter.departureAirportId = data.departureAirportId
    }
    if(data.arrivalAirportId){
        filter.arrivalAirportId = data.arrivalAirportId
    }
    let priceFilter = []

}

async function createFlight(flightData) {
    try {
        const airplane = await airplaneRepository.get(flightData.airplaneId);
        const flight = await flightRepository.create({totalSeat:airplane.capacity,...flightData})
        return flight;
        
    } catch (error) {
        logger.log('error','Something went wrong in flight-service: createFlight');  
        throw {error}; 
    }
     
} 

async function getFlight(flightId) {
    try {
        const flight = await flightRepository.get(flightId);
        console.log(flight);
        return flight;
    } catch (error) {
        logger.log('error','Something went wrong in flight-service: getFlight');  
        throw {error};
        
    }

}

async function getAllFlights(data) {
    const filter = createFilter(data);
}

module.exports = {
    createFlight,
    getFlight
}