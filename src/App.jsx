// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSections from "./components/ContentSections";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSections />
      <Footer />
    </div>
  );
}

export default App;
