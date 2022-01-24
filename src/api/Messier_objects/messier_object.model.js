const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const {setError} = require('../../utils/error/error');

let messier_objectSchema = new Schema({


    name: "",
    commonName:"" ,
    type: [],
    constellation: [],
    magnitude: "",
    distance: ""

});


const messier_objectSchema = mongoose.model(messier_object, messier_objectSchema);
module.exports= messier_object



