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
    let priceFilter = [];
    if(data.minPrice){
        priceFilter.push(data.minPrice);
    }
    if(data.maxPrice){
        priceFilter.push(data.maxPrice);
    }
    if(data.maxPrice&&data.minPrice){
        Object.assign(filter,{price:{ [Op.between]: priceFilter }});
    }
    if(data.maxPrice){
        Object.assign(filter,{price:{ [Op.lte]: priceFilter[0] }});
    }
    if(data.minPrice){
        Object.assign(filter,{price:{ [Op.gte]: priceFilter[0] }});
    }
    return filter
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
   try {
       const filter = createFilter(data);
       const flights = await flightRepository.getAll(filter);
       return flights
   } catch (error) {
       logger.log('error','Something went wrong in flight-service: getFlight');  
       throw {error};
   }

}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights
}