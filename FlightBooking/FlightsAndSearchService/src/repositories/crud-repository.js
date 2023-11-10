const { v4: uuidv4 } = require("uuid");

class CRUDRepository {
  constructor(model){ 
    this.model = model;
  }

  async create(data) {
    try {
      const insertedData = await model.create({ id: uuidv4(), ...data });
      return insertedData;
    } catch(error) {
      throw { error };
    }
  }

  async delete(id) {
    try {
       const deletedData = await model.destroy({
        where: {
            id:id
        }
       }) 
       return deletedData;
    } catch(error) {
        throw {error};
    }
  }
}

module.exports = CRUDRepository;