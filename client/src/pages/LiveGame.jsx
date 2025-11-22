import { useEffect, useState } from "react";
import { fetchGame } from "../services/api";
import { connectSSE, closeSSE } from "../sse/sse";
import { useParams } from "react-router-dom";

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

      <h2>
        {game.score?.home ?? 0} - {game.score?.away ?? 0}
      </h2>

      <p>Status: {game.status}</p>
    </div>
  );
}
