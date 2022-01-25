const ObjectType = require("./object_type.model");
const { setError } = require("../../utils/error/error");


const getAllObjectTypes = async (req, res, next) => {

    try {

        const ObjectTypesDB = await ObjectType.find();
        
        res.status(200).json(ObjectTypesDB)

    } catch (error) {

        return next(setError(500, "No object types added"));
    
    }
}

const getObjectType = async (req, res, next) => {

    try {

        const { type } = req.params
        const ObjectTypeDB = await ObjectType.findOne(type);

        if (!ObjectTypeDB) {

            return next(setError(404, "No object type added"));

        }

        return res.status(200).json(ObjectTypeDB)

    } catch (error) {

        return next(setError(500, "ObjectType not added"))

    }
}

module.exports = {

    getAllObjectTypes,
    getObjectType,

}
