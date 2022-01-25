const Constellation = require("./constellation.model");
const { setError } = require("../../utils/error/error");


const getAllConstellations = async (req, res, next) => {

    try {

        const ConstellationsDB = await Constellation.find();
        
        res.status(200).json(ConstellationsDB)

    } catch (error) {

        return next(setError(500, "No constellations added"));
    
    }
}

const getConstellation = async (req, res, next) => {

    try {

        const { name } = req.params
        const ConstellationDB = await Constellation.find({name});
        console.log(name, ConstellationDB)
        if (!ConstellationDB) {

            return next(setError(404, "No constellation added"));

        }

        return res.status(200).json(ConstellationDB)

    } catch (error) {

        return next(setError(500, "Constellation not added"))

    }
}

module.exports = {

    getAllConstellations,
    getConstellation,

}
