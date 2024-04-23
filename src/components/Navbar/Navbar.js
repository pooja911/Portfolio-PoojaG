import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from 'react'; 
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";

import styles from './Navbar.module.css';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
   
  }
  window.addEventListener("scroll", scrollHandler);

  return(
    <Navbar
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "sticky" : "navbar"}
    style={{fontSize:' x-large',height:4 + 'em', backgroundColor: 'black'}}>
  
    <Container>
    <Navbar.Brand href="/" className="d-flex">
          <div className="img-fluid logo"   style={{ color: 'deeppink', fontSize:' x-large'}} alt="brand">PG</div> 
        </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item className={`${styles.btnmanage}`}>
            <Nav.Link as={Link}      className={`${styles.neonbutton}`} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px"}} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item  className={`${styles.btnmanage}`}>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
              // style={{ color: 'white'}}
              className={`${styles.neonbutton}`}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={`${styles.btnmanage}`}>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
              // style={{ color: 'deeppink'}}
              className={`${styles.neonbutton}`}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px" }}
              />{" "}
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={`${styles.btnmanage}`}>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
              // style={{ color: 'deeppink'}}
              className={`${styles.neonbutton}`}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);


}

export default NavBar;