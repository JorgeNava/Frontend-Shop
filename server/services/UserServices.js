const User = require('../models/UserModels')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')

async function login( username, password ) {
    const user = await User.findOne({ username });
    if (user) {
        if(bcrypt.compareSync(password, user.password)){
            const token = auth.generateAccessToken(username);
            return {...user.toJSON(), token}
        }
    } else {
        throw "Error in User Setices login";
    }
}

async function register(params){
    const user = new User(params)
    await user.save();
}

async function getById(id) {
    const user = await User.findById(id);
    return user.toJSON()
}

async function getByEmail(email) {
    const user = await User.find({ email: email});
    return user.toJSON()
}

module.exports = {
    login,
    register,
    getById,
    getByEmail
};