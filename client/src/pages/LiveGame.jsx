import { useEffect, useState } from "react";
import { fetchGame } from "../services/api";
import { connectSSE, closeSSE } from "../sse/sse";
import { useParams, Link } from "react-router-dom";

export default function LiveGame() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame(id).then(setGame);

    const stream = connectSSE((event) => {
      if (event.type === "noLiveGames") return;

      if (event._id === id) {
        setGame(event);
      }
    });

    return () => closeSSE();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{game.homeTeam} vs {game.awayTeam}</h1>

      <h2>{game.score.home} - {game.score.away}</h2>

      <p>Status: <b>{game.status}</b></p>

      <br />

      {/* 👍 ADMIN BUTTONS ONLY HERE */}
      <div style={{ marginTop: 20 }}>
        <Link to={`/game/${game._id}/update`}>
          <button style={{ marginRight: 10 }}>Update Score</button>
        </Link>

        <Link to={`/game/${game._id}/finish`}>
          <button>Finish Game</button>
        </Link>
      </div>

      <br />
      <Link to="/">← Back</Link>
    </div>
  );
}
