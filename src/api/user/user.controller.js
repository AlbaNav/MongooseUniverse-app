const User = require('./user.model');
const bcrypt= require('crypt');
const {setError} = require('../../utils/error/error');
const { generateSign } = require('../../utils/jwt/jwtUtils')

const postNewUser = async (req, res, next) => {

    try {
        const newUser = new User(req.body)
        const userExists = await User.findOne({email:newUser.email})
        if (userExists) {
            return next(setError(404, 'This user already exists'))
        }
        const userInBd = await newUser.save();
        userInBd.password = null
        return res.status(201).json(userInBd)
    } catch (error) {
        return nest(error)
        
    }
}

const loginUser = async (req, res, next) => {

    try {

        const userDB = await User.findOne({ email: req.body.email })

        if (!userDB) {

            return next(setError(404, 'User not found'))

        }

        if (bcrypt.compareSync(req.body.password, userDB.password)) {

            const token = generateSign(userDB._id, userDB.email)
            return res.status(200).json(token)

        }

    } catch (error) {

        error.message = 'error Login'
        return next(error)

    }
}

const logoutUser = (req, res, next) => {

    try {
        
        const token = null;
        return res.status(200).json(token);

    } catch (error) {

        return next(error)

    }
}

module.exports = {

    postNewUser,
    loginUser, 
    logoutUser

}