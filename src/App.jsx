// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSections from "./components/ContentSections";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSections />
    </div>
  );
}

export default App;
