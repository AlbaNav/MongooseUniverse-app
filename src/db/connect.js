const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const mongoDb = process.env.MONGO_DB;
const connectDb = async () => {
    try {
        const db = await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connect;
        console.log(`Connected with db: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error to connect with BD", error);
    }
};
module.exports = { connectDb };