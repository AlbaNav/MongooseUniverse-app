const MessierObject = require("./messier_objects.model");
const { setError } = require("../../utils/error/error");
const messierObject = require("./messier_objects.model");


const getAllMessierObjects = async (req, res, next) => {

    try {

        const MessierObjectsDB = await MessierObject.find();
        
        res.status(200).json(MessierObjectsDB)

    } catch (error) {

        return next(setError(500, "No messier objects added"));
    
    }
}

const getMessierObject = async (req, res, next) => {

    try {

        const { name } = req.params
        const MessierObjectDB = await MessierObject.find(name);
console.log(name, MessierObjectDB);
        if (!MessierObjectDB) {

            return next(setError(404, "No messier object added"));

        }

        return res.status(200).json(MessierObjectDB)

    } catch (error) {

        return next(setError(500, "Messier object not added"))

    }
}

module.exports = {

    getAllMessierObjects,
    getMessierObject,

}
