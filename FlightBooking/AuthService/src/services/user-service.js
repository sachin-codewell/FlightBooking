const { v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserRepository } = require('../repositories/index');
const {ServerConfig} = require('../config/index')


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

    async login(data) {
        try {
            const user = await this.userRepository.getByEmail(data.email);
            if(user == null){
               throw {error: "User with this email does not exist"} 
            }
            if(!this.comparePassword(data.password,user.password)){
                throw {error: "Incorrect Password"}
            }
            const token = this.createToken({id:user.id,email:user.email});
            return token;
        } catch (error) {
            console.log('Something went wrong in user-service: login');
            throw error; 
        }

    }

    comparePassword(plainPassword,hashPassword) {
        try {
            return bcrypt.compareSync(plainPassword,hashPassword); 
        } catch (error) {
            console.log('Something went wrong in user-service: comparePassword');
            throw error;  
        }
    }

    createToken(data) {
        try {
            const token = jwt.sign(data,ServerConfig.KEY,{expiresIn:'24h'});
            return token;
        } catch (error) {
            console.log('Something went wrong in user-service: createToken');
            throw error;
        }

    }

    verifyToken(token) {
        try {
            const data = jwt.verify(token,ServerConfig.KEY);
            return data;
        } catch (error) {
            console.log('Something went wrong in user-service: verifyToken');
            throw error;
        }
    }

}
module.exports = UserService