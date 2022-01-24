const mongoose = require('mongoose');
require('dotenv').config()

const urlDb = process.env.MONGO_DB

const connectDb = async () => {
    try {
        const db = await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
        const { name, host } = db.connection
        console.log(`Connected with db name: ${name} in host: ${host}`)
    } catch (error) {
        console.error('Error to connect with db', error);
    }
}

module.exports = { connectDb }
const jwt = require('jsonwebtoken')

const generateSign = (id, email) => {

    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' })

}

const verifyJwt = (token) => {

    return jwt.verify(token, process.env.JWT_SECRET)

}

module.exports = { generateSign, verifyJwt }