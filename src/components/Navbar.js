import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from 'react'; 
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";

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
    style={{fontSize:' x-large',height:4 + 'em', backgroundColor: '#c4aead'}}>
  
    <Container>
    <Navbar.Brand href="/" className="d-flex">
          <div className="img-fluid logo"   style={{ color: 'white', fontSize:' x-large'}} alt="brand">PG</div> 
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
          <Nav.Item>
            <Nav.Link as={Link}    style={{ color: 'white'}} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px"}} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item >
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
              style={{ color: 'white'}}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
              style={{ color: 'white'}}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px" }}
              />{" "}
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
              style={{ color: 'white'}}
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