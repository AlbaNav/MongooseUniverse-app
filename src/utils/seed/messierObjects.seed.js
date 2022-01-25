const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://Universe:.teZ-6!JPzkHr!i@cluster0.rsfnm.mongodb.net/MongooseUnivers-app?retryWrites=true&w=majority";
const messierObjectsSchema = require("../../api/Messier_objects/messier_object.model.js");

messierObjects = [

    {
        "name": "M1",
        "commonName": "The crab nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M1_m8adw7.jpg",
        "type": "61eed6c29be010bdebd72f8b",
        "constellation": "61effad07f867f18ee758d7a",
        "magnitude": 8.4 ,
        "distance": 4.9 ,
    },
    {
        "name": "M6",
        "commonName": "Butterfly cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040205/galaxias/M6_q9uj1z.jpg",
        "type": "61eed6c29be010bdebd72f8c",
        "constellation": "61effad07f867f18ee758d80",
        "magnitude": 4.2 ,
        "distance": 1.2 ,
    },
    {
        "name": "M7",
        "commonName": "Ptolemy cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M7_dqu4mf.jpg",
        "type": "61eed6c29be010bdebd72f8c",
        "constellation": "61effad07f867f18ee758d80",
        "magnitude": 3.3 ,
        "distance": 0.6 ,
    },
    {
        "name": "M8",
        "commonName": "Lagoon nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M8_n66w31.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d81",
        "magnitude": 6.0 ,
        "distance": 4.1 ,
    },
    {
        "name": "M11",
        "commonName": "Wild Duck cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M11_zbmifk.jpg",
        "type": "61eed6c29be010bdebd72f8c",
        "constellation": "61effad07f867f18ee758d85",
        "magnitude": 6.3 ,
        "distance": 6.2 ,
    },
    {
        "name": "M13",
        "commonName": "Hercules cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M13_rqocph.jpg",
        "type": "61eed6c29be010bdebd72f8d",
        "constellation": "61effad07f867f18ee758d86",
        "magnitude": 5.8 ,
        "distance": 22.2 ,
    },
    {
        "name": "M16",
        "commonName": "Eagle nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M16_jotwra.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d87",
        "magnitude": 6 ,
        "distance": 7 ,
    },
    {
        "name": "M17",
        "commonName": "Omega nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040207/galaxias/M17_kyirek.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d81",
        "magnitude": 6 ,
        "distance": 6 ,
    },
    {
        "name": "M20",
        "commonName": "Trifid nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040206/galaxias/M20_exqsmm.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d81",
        "magnitude": 6.3 ,
        "distance": 5.2 ,
    },
    {
        "name": "M22",
        "commonName": "Sagittarius cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040208/galaxias/M22_prxfy4.jpg",
        "type": "61eed6c29be010bdebd72f8d",
        "constellation": "61effad07f867f18ee758d81",
        "magnitude": 5.1 ,
        "distance": 9.6 ,
    },
    {
        "name": "M24",
        "commonName": "Small Sagittarius cloud",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040207/galaxias/M24_bvz7x8.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d81",
        "magnitude": 5.1 ,
        "distance": 9.6 ,
    },
    {
        "name": "M27",
        "commonName": "Dumbell nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040207/galaxias/M27_xfvsoq.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d88",
        "magnitude": 5.1 ,
        "distance": 1.5 ,
    },
    {
        "name": "M31",
        "commonName": "Andromeda galaxy",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040207/galaxias/M31_lebp6w.jpg",
        "type": "61eed6c29be010bdebd72f8f",
        "constellation": "61effad07f867f18ee758d89",
        "magnitude": 3.4 ,
        "distance": 2430 ,
    },
    {
        "name": "M32",
        "commonName": "Small Andromeda galaxy",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040207/galaxias/M32_ub932p.png",
        "type": "61eed6c29be010bdebd72f8f",
        "constellation": "61effad07f867f18ee758d89",
        "magnitude": 3.4 ,
        "distance": 2410 ,
    },
    {
        "name": "M33",
        "commonName": "Triangulum galaxy",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040208/galaxias/M33_hebasz.jpg",
        "type": "61eed6c29be010bdebd72f8f",
        "constellation": "61effad07f867f18ee758d8a",
        "magnitude": 5.7 ,
        "distance": 2380 ,
    },
    {
        "name": "M38",
        "commonName": "Starfish cluster",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040208/galaxias/M38_tokvek.jpg",
        "type": "61eed6c29be010bdebd72f8c",
        "constellation": "61effad07f867f18ee758d8b",
        "magnitude": 6.2 ,
        "distance": 4.5 ,
    },
    {
        "name": "M42",
        "commonName": "Orion nebula",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040208/galaxias/M42_jalauj.jpg",
        "type": "61eed6c29be010bdebd72f8e",
        "constellation": "61effad07f867f18ee758d8c",
        "magnitude": 4 ,
        "distance": 1.3 ,
    },
    {
        "name": "M45",
        "commonName": "Pleiades",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040209/galaxias/M45_bkdwmv.jpg",
        "type": "61eed6c29be010bdebd72f8c",
        "constellation": "61effad07f867f18ee758d7a",
        "magnitude": 1.6 ,
        "distance": 0.3 ,
    },
    {
        "name": "M51",
        "commonName": "Whirlpool galaxy",
        "image": "https://res.cloudinary.com/dhp2zuftj/image/upload/v1643040208/galaxias/M51_hrhmkc.jpg",
        "type": "61eed6c29be010bdebd72f8f",
        "constellation": "61effad07f867f18ee758d8d",
        "magnitude": 8.4 ,
        "distance": 27000 ,
    }

]

const messierObjectsDocuments = messierObjects.map((messierObjects) => new messierObjectsSchema(messierObjects));

mongoose.connect(mongoDB, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(async () => {

    const allmessierObjects = await messierObjectsSchema.find();

    if (allmessierObjects.length) {

      await messierObjectsSchema.collection.drop();

    }

}).catch((err) => console.log(`Error makings messierObjects: ${err}`))
  
.then(async () => {

    await messierObjectsSchema.insertMany(messierObjectsDocuments);

    console.log("Messier Objects are ok");

}).catch((err) => console.log(`Error makings messierObjects: ${err}`))
  
.finally(() => mongoose.disconnect());