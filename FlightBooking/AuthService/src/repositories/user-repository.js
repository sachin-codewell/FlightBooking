const { User } = require('../models/index')

class UserRepository {

    async create(data){
        try {
            const user = await User.create(data,{
                attributes:['firstname']
            });
            delete user.dataValues.password;
            return user ;
        } catch (error) {
            console.log('Something went wrong in user-repo: create');
            throw error;  
        }

    }

    async getById(id) {
        try {
            const data = await User.findByPk(id);
            return data;    
        } catch (error) {
            console.log('Something went wrong in user-repo: getById');
            throw error;
        }
    }

    async getByEmail(email) {
        try {
            const data = await User.findOne({
                where:{
                    email:email
                }
            })
            return data;  
        } catch (error) {
            console.log('Something went wrong in user-repo: getByEmail');
            throw error;
        }

    }


}

module.exports = UserRepository;