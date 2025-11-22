import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div style={{
      padding: 15,
      border: "1px solid #ccc",
      marginBottom: 10
    }}>
      <h3>{game.homeTeam} vs {game.awayTeam}</h3>
      <p>Status: {game.status}</p>

      <Link to={`/game/${game._id}`}>View Live Score</Link>
    </div>
  );
}
