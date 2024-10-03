// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView/HomeView";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <HomeView />
    </div>
  );
}

export default App;
