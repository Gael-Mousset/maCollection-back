const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  id: { type: Number, required: true },
  game_title: { type: String, required: true },
  release_date: { type: String },
});

module.exports = mongoose.model("Game", GameSchema);
