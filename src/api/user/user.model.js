const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {ValidationPassword}= require ('../../utils/validation/controller');
const {setError}= require('../../utils/error/error');

const UserSchema = new Schema({
    
    name:{
        type:String,
        required:true,
        trim: true,
        unique: true
    },

    email:{
        type: String,
        required:true,
        trim: true,
        unique: true
    },

    password:{
        type: String,
        required:true,
        trim:true
    },

    profileImage: {

        type: String,
        required: true,
        trim: true

    },

    // collection:'users'
 
})

UserSchema.pre("save", function(next) {
    if (!ValidationPassword(this.password)){
        return next(setError(400, 'password is not correct'))
    }

    this.password= bcrypt.hashSync(this.password,10);
    next();
})

module.exports = mongoose.model('User', UserSchema);