// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "../HeroSection/HeroSection";
import ContentSections from "../ContentSections/ContentSections";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Buttons";

function App() {
  return (
    <Router>
      <Navbar />
      <Button />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contents" element={<ContentSections />} />
      </Routes>
    </Router>
  );
}

export default App;
