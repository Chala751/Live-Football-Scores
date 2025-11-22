import { useState, useEffect } from "react";
import { fetchGame, updateScore } from "../services/api";
import { useParams } from "react-router-dom";

export default function UpdateScore() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  useEffect(() => {
    fetchGame(id).then((g) => {
      setGame(g);
      setHome(g.score.home);
      setAway(g.score.away);
    });
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateScore(id, home, away);
    alert("Score updated!");
  }

  if (!game) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Update Score</h1>
      <h2>{game.homeTeam} vs {game.awayTeam}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={home}
          onChange={(e) => setHome(Number(e.target.value))}
        />
        <span> - </span>
        <input
          type="number"
          value={away}
          onChange={(e) => setAway(Number(e.target.value))}
        />

        <button>Save Score</button>
      </form>
    </div>
  );
}
