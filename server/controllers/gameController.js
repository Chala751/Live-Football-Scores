import Game from "../models/Game.js";
import { broadcast } from "../sse/sseManager.js";

// Create new match
export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    broadcast("newGame", game);
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all games
export const getGames = async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 });
  res.json(games);
};

// Get single game
export const getGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
};

// Update score
export const updateScore = async (req, res) => {
  const { home, away } = req.body;

  const game = await Game.findByIdAndUpdate(
    req.params.id,
    {
      score: { home, away },
      status: "live",
    },
    { new: true }
  );

  broadcast("scoreUpdate", game);

  res.json(game);
};
