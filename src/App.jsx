<<<<<<< HEAD
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
=======
import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeView from './components/HomeView/HomeView'
import './App.css'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</Router>
	)
>>>>>>> 98d7ed7 (Add Sponsors and HomeView components)
}

export default App