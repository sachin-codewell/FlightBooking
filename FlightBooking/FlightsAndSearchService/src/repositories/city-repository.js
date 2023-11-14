const CRUDRepository = require('./crud-repository')
const { City } = require('../models/index');
const logger = require('../config/logger-config');
const { Op } = require('sequelize');

class CityRepository extends CRUDRepository {
    constructor() {
        super(City);
    }

    async getAllCity(filter){
        try {
            if(filter.name!==undefined) {
                const namePrefix = filter.name;
                const cities = await City.findAll({
                    where: {
                          name: {
                            [Op.startsWith]: namePrefix
                          }
                    },
                })
                return cities; 
            }
            const cities = await City.findAll();
            return cities;
           
        } catch (error) {
            logger.log('error','Something went wrong in city-repo: getAllCity')
            
        }
    }
}
module.exports = CityRepository;