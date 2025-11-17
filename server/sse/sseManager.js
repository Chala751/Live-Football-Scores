
export const clients = new Set();

// Handle SSE connection
export const sseHandler = (req, res) => {
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

  const interval = setInterval(() => {
    res.write(": heartbeat\n\n");
  }, 20000);

  req.on("close", () => {
    clearInterval(interval);
    clients.delete(client);
    console.log("Client disconnected. Total:", clients.size);
  });
};

// Broadcast to all SSE clients
export const broadcast = (event, data) => {
  const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;

  for (const client of clients) {
    client.res.write(message);
  }
};
