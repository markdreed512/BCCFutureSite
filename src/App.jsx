// src/App.jsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSections from "./components/ContentSections";
import Footer from "./components/Footer/Footer";
import "./App.css";

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
