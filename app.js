const express = require("express");
const app = express();
const morgan = require("morgan");

const showRoute = require("./routes/showRouter");

app.use(express.json());

app.use("/api/v1/shows", showRoute);

module.exports = app;
