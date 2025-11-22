import React from "react";
//import GamesList from "./components/GamesList";
//import LiveView from "./components/LiveView";
//import useSSE from "./hooks/useSSE";
import "./app.css";

export default function App() {
 // const { lastEvent, parsedEvent } = useSSE();

  return (
    <div style={{ display: "flex", gap: 24, padding: 24 }}>
      <div style={{ width: 360 }}>
        <h2>Games</h2>
        {/*<GamesList liveEvent={parsedEvent} />*/}
      </div>

      <div style={{ flex: 1 }}>
        <h2>Live View</h2>
        {/*<LiveView liveEvent={parsedEvent} />*/}
      </div>
    </div>
  );
}


