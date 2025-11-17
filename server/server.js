import dotenv from 'dotenv';
dotenv.config(); 

import express from "express";
import cors from "cors";
import connectDB from './configs/db.js';
import { sseHandler } from './sse/sseManager.js';



connectDB();

const app = express();
app.use(cors());
app.use(express.json());


// SSE endpoint for clients
app.get("/api/events", sseHandler);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
