import { useState } from "react";
import { createGame } from "../services/api";
import { Link } from "react-router-dom"; 

export default function CreateGame() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGame({ homeTeam, awayTeam });
    alert("Game created");
    setHomeTeam("");
    setAwayTeam("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Create New Game</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Home team"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
        /><br />

        <input
          placeholder="Away team"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
        /><br />

        <button type="submit">Create</button>
      </form>

      <br />
      <Link to="/">← Back to Home</Link> 
    </div>
  );
}
