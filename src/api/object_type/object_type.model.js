const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectTypeSchema = new Schema(

    {

        type: {
            
            type: String, required: true, trim: true,

        }
    }

);

const Type = mongoose.model("objetcTypes", objectTypeSchema);

module.exports = Type;