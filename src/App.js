// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div style={{ background: "black" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProfessionalExposure" element={<Experience />} />
          {/* <Route path="/resume" element={<Resume />}  /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
