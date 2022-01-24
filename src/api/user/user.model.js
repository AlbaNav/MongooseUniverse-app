const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {ValidationPassword}= require ('../../utils/validation/controller');
const {setError}= require('../../utils/error/error');

let userSchema = new Schema ({
    
    name:{
        type:String,
        required:true,
        trim: true
    },

    email:{
        type: String,
        required:true,
        trim: true
    },

    password:{
        type: String,
        required:true,
        trim:true
    },

    collection:'users'
 
})

userSchema.pre("save", function(next) {
    if (!ValidationPassword(this.password)){
        return next(setError(400, 'password is not correct'))
    }

    this.password= bcrypt.hashSync(this.password,10);
    next();
})

module.exports = mongoose.model('User', userSchema);