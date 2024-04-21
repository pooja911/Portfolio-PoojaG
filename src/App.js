// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/projects" element={<Projects />}  />
          <Route path="/resume" element={<Resume />}  />

        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
