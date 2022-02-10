const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const UrlSchema = new mongoose.Schema({
  alias: { type: String, required: true, unique: true},
  longURL: { type: String, required: true}
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;