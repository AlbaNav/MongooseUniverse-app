const MessierObjectRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { getAllMessierObjects, getMessierObject } = require("./messier_objects.controller");

MessierObjectRoutes.get("/", getAllMessierObjects);
MessierObjectRoutes.get("/:name", getMessierObject);

module.exports = MessierObjectRoutes;