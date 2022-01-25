const ConstellationRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { getAllConstellations, getConstellation } = require("./constellation.controller");

ConstellationRoutes.get("/", getAllConstellations);
ConstellationRoutes.get("/:name", getConstellation);

module.exports = ConstellationRoutes;