const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {validationPassword}= require ('../../utils/validation/controller');
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

   
 
})

UserSchema.pre("save", function(next) {
    if (!validationPassword(this.password)){
        return next(setError(400, 'password is not correct'))
    }

    this.password= bcrypt.hashSync(this.password,10);
    next();
})

const User = mongoose.model("users", UserSchema); 
 module.exports = User;