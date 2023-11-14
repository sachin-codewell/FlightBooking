const { v4: uuidv4 } = require("uuid");
const logger = require("../config/logger-config");

class CRUDRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const insertedData = await this.model.create({ id: uuidv4(), ...data });
      return insertedData;
    } catch (error) {
      logger.log("error", "Something went wrong in crud-repo: create");
      throw { error };
    }
  }
  
  async get(id) {
    try {
      const fetcheddata = this.model.findAll({
        where: {
          id: id,
        },
      });
      return fetcheddata;
    } catch (error) {
      logger.log("error", "Something went wrong in crud-repo: get");
      throw { error };
    }
  }

  async update(data) {
    try {
      let id = data.id;
      delete data.id;
      const updated = await this.model.update({...data},{
        where: {
          id: id,
        },
      });
      return updated[0];
    } catch (error) {
      logger.log("error", "Something went wrong in crud-repo: update");
      throw { error };
    }
  }

  async delete(id) {
    try {
      const deleted= await this.model.destroy({
        where: {
          id: id,
        },
      });
      return (deleted==1?true:false);
    } catch (error) {
      logger.log("error", "Something went wrong in crud-repo: delete");
      throw { error };
    }
  }


}

module.exports = CRUDRepository;
