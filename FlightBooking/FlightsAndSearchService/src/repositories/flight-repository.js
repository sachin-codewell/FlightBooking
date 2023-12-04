const {Flight} = require('../models/index');
const CRUDRepository = require('./crud-repository');

class FlightRepository extends CRUDRepository {

    constructor() {
        super(Flight);
    }

}

module.exports = FlightRepository;