import Game from "../models/Game.js";

export const clients = new Set();

export const sseHandler = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
  });

  res.write(": connected\n\n");

  const client = { id: Date.now(), res };
  clients.add(client);
  console.log("Client connected. Total:", clients.size);

  // 🔥 10-second timeout check
  const timeoutCheck = setTimeout(async () => {
    const liveGames = await Game.countDocuments({ status: "live" });

    if (liveGames === 0) {
      console.log("No live games — closing SSE connection.");

      res.write(
        `event: noLiveGames\ndata: ${JSON.stringify({ message: "No live games" })}\n\n`
      );

      res.end(); // close SSE
      clients.delete(client);
    }
  }, 10000); // 10 seconds

  // Heartbeat every 20s
  const interval = setInterval(() => {
    res.write(": heartbeat\n\n");
  }, 20000);

  req.on("close", () => {
    clearTimeout(timeoutCheck);
    clearInterval(interval);
    clients.delete(client);
    console.log("Client disconnected. Total:", clients.size);
  });
};

// Broadcast event to all SSE clients
export const broadcast = (event, data) => {
  const msg = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of clients) {
    try {
      client.res.write(msg);
    } catch (err) {
      console.log("Error sending SSE to client:", err);
    }
  }
};
