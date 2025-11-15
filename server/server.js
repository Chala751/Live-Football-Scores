
import express from "express";
import cors from "cors";
//import sseRoutes from "./routes/sseRoutes.js";

const app = express();
app.use(cors());
//app.use("/api", sseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
