import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
    <>
    <div style={{ padding: 20, position: "relative", minHeight: "100vh" }}>
      <h1>Available Games</h1>

      <div style={{ marginTop: 40 }}>
        {games.map((g) => (
          <GameCard key={g._id} game={g} />
        ))}
      </div>
    </div>
     <Link 
        to="/create" 
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          fontSize: 24,
          textDecoration: "none",
          background: "#171917ff",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: 8,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
        }}
      >
        + Create Game
      </Link>
    </>
    
  );
}
