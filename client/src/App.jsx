import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveGame from "./pages/LiveGame";
import CreateGame from "./pages/CreateGame";
import UpdateScore from "./pages/UpdateScore";
import FinishGame from "./pages/FinishGame";
import "./app.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<LiveGame />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/game/:id/update" element={<UpdateScore />} />
        <Route path="/game/:id/finish" element={<FinishGame />} />
      </Routes>
    </BrowserRouter>
  );
}
