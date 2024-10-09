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
}

export default App
