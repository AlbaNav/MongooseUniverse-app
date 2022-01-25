const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Universe:.teZ-6!JPzkHr!i@cluster0.rsfnm.mongodb.net/MongooseUnivers-app?retryWrites=true&w=majority";
const objectTypeSchema = require("../../api/object_type/object_type.model");

types = [
    {
        "type": "Remanente de supernova",
    },
    {
        "type": "Cúmulo abierto",
    },
    {
        "type": "Cúmulo globular",
    },
    {
        "type": "Nebulosa",
    },
    {
        "type": "Galaxia",
    }
]

const typeDocuments = types.map((types) => new objectTypeSchema(types));

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allTypes = await objectTypeSchema.find();

    if (allTypes.length) {

      await objectTypeSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings Types: ${err}`))
  
.then(async () => {

    await objectTypeSchema.insertMany(typeDocuments);

    console.log("types added");

}).catch((err) => console.log(`Error making Types: ${err}`))
  
.finally(() => mongoose.disconnect());