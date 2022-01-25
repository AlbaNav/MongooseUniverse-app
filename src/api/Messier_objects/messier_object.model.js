const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let messierObjectsSchema = new Schema({


    name: {
        
        type: String, required: true, trim: true

    },
    commonName: {

        type: String, required: true, trim: true

    },
    image: {

        type: String, required: true, trim: true

    },
    type: {
        
        type: Schema.Types.ObjectId, ref:"types", required: true,

    },
    constellation: {
        
        type: Schema.Types.ObjectId, ref:"stars", required: true,

    },
    magnitude: {
        
        type: String, required: true, trim: true

    },
    distance: {
        
        type: Number, required: true, trim: true

    }

});

const messierObject = mongoose.model("messier_object", messierObjectsSchema);

module.exports= messierObject;