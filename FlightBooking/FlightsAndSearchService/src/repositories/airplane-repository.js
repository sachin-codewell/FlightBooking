const {Airplane} = require('../models/index');
const CRUDRepository = require('./crud-repository');

class AirplaneRepository extends CRUDRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;