const { v4:uuidv4} = require('uuid');
const { UserRepository } = require('../repositories/index');

class UserService {
    constructor(){
        this.userRepository = new UserRepository()
    }

    async registerUser(data){
        try {
            const user = await this.userRepository.create({id:uuidv4(), ...data});
            return user;
        } catch (error) {
            console.log('Something went wrong in user-service: registerUser');
            throw error;   
        }

    }

}
module.exports = UserService