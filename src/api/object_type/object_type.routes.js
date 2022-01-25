const ObjectTypeRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { getAllObjectTypes, getObjectType } = require("./object_type.controller");

ObjectTypeRoutes.get("/", getAllObjectTypes);
ObjectTypeRoutes.get("/:type", getObjectType);

module.exports = ObjectTypeRoutes;