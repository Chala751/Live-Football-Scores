import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveGame from "./pages/LiveGame";
import CreateGame from "./pages/CreateGame";
import "./app.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<LiveGame />} />
        <Route path="/create" element={<CreateGame />} />
      </Routes>
    </BrowserRouter>
  );
}
