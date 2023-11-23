const CRUDRepository = require('./crud-repository')
const { City } = require('../models/index');
const logger = require('../config/logger-config');
const { Op } = require('sequelize');

class CityRepository extends CRUDRepository {
    constructor() {
        super(City);
    }

 }

module.exports = CityRepository;