const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

let eventSource = null;

export function connectSSE(onMessage) {
  eventSource = new EventSource(`${API}/api/events`);

  eventSource.onmessage = (event) => {
    if (event.data) {
      onMessage(JSON.parse(event.data));
    }
  };

  eventSource.addEventListener("scoreUpdate", (e) => {
    onMessage(JSON.parse(e.data));
  });

  eventSource.addEventListener("gameFinished", (e) => {
    onMessage(JSON.parse(e.data));
  });

  eventSource.addEventListener("noLiveGames", () => {
    onMessage({ type: "noLiveGames" });
  });

  eventSource.onerror = () => {
    console.log("SSE disconnected, retrying...");
  };

  return eventSource;
}

export function closeSSE() {
  if (eventSource) eventSource.close();
}
