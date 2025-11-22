
const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function fetchGames() {
  const res = await fetch(`${API}/api/games`);
  return res.json();
}

export async function fetchGame(id) {
  const res = await fetch(`${API}/api/games/${id}`);
  return res.json();
}

export async function createGame(payload) {
  const res = await fetch(`${API}/api/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function updateScore(id, home, away) {
  const res = await fetch(`${API}/api/games/${id}/score`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ home, away }),
  });
  return res.json();
}

export async function finishGame(id) {
  const res = await fetch(`${API}/api/games/${id}/finish`, {
    method: "PATCH",
  });
  return res.json();
}
