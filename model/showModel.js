const mongoose = require("mongoose");

const origin = new mongoose.Schema({
  name: String,
  url: String,
});

const location = new mongoose.Schema({
  name: String,
  url: String,
});

const showSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: String,
  species: String,
  type: String,
  gender: String,
  location: location,
  origin: origin,
  image: String,
  episode: [String],
  url: String,
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("shows", showSchema);
