// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "../HomeView/HomeView";
import Navbar from "../Navbar/Navbar";
import EventTypes from "../EventTypes/EventTypes";
import EventCal from "../EventCal/EventCal";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Volunteer from "../Volunteer/Volunteer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/event-types" element={<EventTypes />} />
        <Route path="/event-calendar" element={<EventCal />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
