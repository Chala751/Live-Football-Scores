
import express from "express";
import {
  createGame,
  getGames,
  getGame,
  updateScore,
  finishGame,
} from "../controllers/gameController.js";

const router = express.Router();


router.post("/", createGame);
router.get("/", getGames);
router.get("/:id", getGame);
router.patch("/:id/score", updateScore);
router.patch("/:id/finish", finishGame);

export default router;
