const {Flight} = require('../models/index');
const CRUDRepository = require('./crud-repository');

class FlightRepository extends CRUDRepository {

    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        try {
            const flights = await Flight.findAll({
                where:filter
            })
            return flights;
        } catch (error) {
            logger.log("error", "Something went wrong in flight-repo: getAllFlights");
            throw { error };
        }
    }

}

module.exports = FlightRepository;