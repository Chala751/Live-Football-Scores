import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import GameCard from "../components/GameCard";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Available Games</h1>
      {games.map((g) => (
        <GameCard key={g._id} game={g} />
      ))}
    </div>
  );
}
