// src/App.jsx
import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ContentSections from "./components/ContentSections"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<HeroSection />} />
				<Route path="/contents" element={<ContentSections />} />
			</Routes>
		</Router>
	)
}

export default App
