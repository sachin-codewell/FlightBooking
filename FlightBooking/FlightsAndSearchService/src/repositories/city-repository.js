const {CRUDRepository} = require('./index')
const { City } = require("../models/index");

class CityRepository extends CRUDRepository {
    constructor() {
        super(City)
    }
    
}