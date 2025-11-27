⚽ Football Score Management App

A lightweight, real-time football match score management system where admins can for now with out auth create games, update scores, and mark matches as finished — powered by React, Node.js, MongoDB, and SSE (Server-Sent Events).

Features
🎮 Game Management

Create new matches (Home Team vs Away Team)

Update live game scores

Prevent negative score input

Mark matches as Finished

Automatically refreshes via SSE live updates

🛠 Tech Stack
Frontend

React

React Router DOM

SSE (EventSource)

Simple CSS styles

Backend

Node.js

Express

MongoDB + Mongoose

Server-Sent Events (SSE)

Installation & Setup
git clone https://github.com/Chala751/Live-Football-Scores.git

Backend Setup
cd server
npm install

Add .env file:
MONGO_URI=zour mongo db
PORT=5000

Start backend:
npm run server

🌐 Frontend Setup
cd client
npm install

Start frontend:
npm run dev


for now i cannot upload short video sice my pc screen recording issue

