const User = require('./user.model');
const bcrypt= require('crypt');
const {setError} = require('../../utils/error/error');
const JwtControl= require('../../utils/jsonwebtoken/jsonwebtoken');

const postNewUser = async (req, res, next) => {

    try {
        const newUser = new User(req.body)
        const userExists = await User.findOne({email:newUser.email})
        if (userExists) {
            return next(setError(404, 'This user already exists'))
        }
        const uwerInBd = await newUser.save()
        userInBd.password = null
        return res.status(201).json(userInBd)
    } catch (error) {
        return nest(error)
        
    }
}