const express = require("express");
const ShowRoute = express.Router();
const showController = require("../controller/showController");

ShowRoute.route("/")
  .get(showController.getAllShow)
  .post(showController.addShow);

ShowRoute.route("/:id")
  .get(showController.getShow)
  .patch(showController.updateShow)
  .delete(showController.deleteShow);

module.exports = ShowRoute;
