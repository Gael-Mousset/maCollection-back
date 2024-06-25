const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// @route   GET /api/games
// @desc    Get all games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/games
// @desc    Add a new game
router.post("/", async (req, res) => {
  const { id, game_title, release_date } = req.body;

  const newGame = new Game({
    id,
    game_title,
    release_date,
  });

  try {
    const savedGame = await newGame.save();
    res.json(savedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /api/games/:id
// @desc    Delete a game
router.delete("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
