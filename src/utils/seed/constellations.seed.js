const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Universe:.teZ-6!JPzkHr!i@cluster0.rsfnm.mongodb.net/MongooseUnivers-app?retryWrites=true&w=majority";
const constellationSchema = require("../../api/constellation/constellation.model");

constellations = [
    {
        "name": "Aries"
    },
    {
        "name": "Tauro"
    },
    {
        "name": "Geminis"
    },
    {
        "name": "Cancer"
    },
    {
        "name": "Leo"
    },
    {
        "name": "Virgo"
    },
    {
        "name": "Libra"
    },
    {
        "name": "Escorpio"
    },
    {
        "name": "Sagitario"
    },
    {
        "name": "Capricornio"
    },
    {
        "name": "Acuario"
    },
    {
        "name": "Piscis"
    },
    {
        "name": "Scutum"
    },
    {
        "name": "Hercules"
    },
    {
        "name": "Serpens"
    },
    {
        "name": "Vulpecula"
    },
    {
        "name": "Andromeda"
    },
    {
        "name": "Triangulum"
    },
    {
        "name": "Auriga"
    },
    {
        "name": "Orion"
    },
    {
        "name": "Canes Venatici"
    },
    
]

const constellationDocuments = constellations.map((constellations) => new constellationSchema(constellations));

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allConstellations = await constellationSchema.find();

    if (allConstellations.length) {

      await constellationSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings Constellations: ${err}`))
  
.then(async () => {

    await constellationSchema.insertMany(constellationDocuments);

    console.log("constellations added");

}).catch((err) => console.log(`Error making Constellations: ${err}`))
  
.finally(() => mongoose.disconnect());