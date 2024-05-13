import "./App.css";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage.js";
import ChatPage from "./Pages/Chatpage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
