const {User} = require('../models/index')
class Userrepository {
    
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in user-repo: create');
            throw error;  
        }

    }
}

module.exports = Userrepository;