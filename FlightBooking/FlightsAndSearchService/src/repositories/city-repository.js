const CRUDRepository = require('./crud-repository')
const { City } = require('../models/index');

class CityRepository extends CRUDRepository {
    constructor() {
        super(City);
    }
}
module.exports = CityRepository;