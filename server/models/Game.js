
import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
  home: { type: Number, default: 0 },
  away: { type: Number, default: 0 },
});

const GameSchema = new mongoose.Schema({
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  startTime: { type: Date, default: Date.now },
  status: { type: String, enum: ['scheduled', 'live', 'finished'], default: 'scheduled' },
  score: { type: ScoreSchema, default: () => ({}) },
}, { timestamps: true });

export default mongoose.model('Game', GameSchema);
