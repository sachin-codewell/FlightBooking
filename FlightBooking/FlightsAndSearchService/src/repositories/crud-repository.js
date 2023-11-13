const { v4: uuidv4 } = require("uuid");
const logger = require("../config/logger-config");

class CRUDRepository {
  constructor(model){ 
    this.model = model;
  }

  async create(data) {
    try {
      const insertedData = await this.model.create({ id: uuidv4(), ...data });
      return insertedData;
    } catch(error) {
      logger.log('error','Something went wrong in crud-repo: create');  
      throw { error };
    }
  }

  async delete(id) {
    try {
       const deletedData = await this.model.destroy({
        where: {
            id:id
        }
       }) 
       return deletedData;
    } catch(error) {
        logger.log('error','Something went wrong in crud-repo: delete');  
        throw {error};
    }
  }

  async get(){
    try {
        const data = thid.model.ge
    } catch (error) {
        
    }
  }

}

module.exports = CRUDRepository;