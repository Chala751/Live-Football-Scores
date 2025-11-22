import { useEffect, useState } from "react";
import { fetchGame, finishGame } from "../services/api";
import { useParams } from "react-router-dom";

export default function FinishGame() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame(id).then(setGame);
  }, [id]);

  async function handleFinish() {
    await finishGame(id);
    alert("Game marked as finished!");
  }

  if (!game) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Finish Game</h1>

      <h2>{game.homeTeam} vs {game.awayTeam}</h2>
      <p>Score: {game.score.home} - {game.score.away}</p>

      <button onClick={handleFinish}>
        Mark as Finished
      </button>
    </div>
  );
}
