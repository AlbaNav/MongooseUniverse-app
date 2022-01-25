const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const constellationsSchema = new Schema(

    {

        name: {
            
            type: String, required: true, trim: true,

        }

    }

);

const Constellation = mongoose.model("constellations", constellationsSchema);

module.exports = Constellation;