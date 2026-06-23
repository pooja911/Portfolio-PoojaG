import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import pdf from "../../Assets/PoojaGargResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import styles from './Navbar.module.css';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineAppstore,
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "PoojaGargResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ fontSize: 'large', height: 4 + 'em', backgroundColor: 'black' }}>

      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div className="img-fluid logo" style={{ color: 'deeppink', fontSize: 'large' }} alt="brand">PG</div>
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
              <Nav.Link as={Link} className={`${styles.neonbutton}`} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`${styles.btnmanage}`}>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} className={`${styles.neonbutton}`}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`${styles.btnmanage}`}>
              <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)} className={`${styles.neonbutton}`}>
                <AiOutlineAppstore style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`${styles.btnmanage}`}>
              <Nav.Link as={Link} to="/ProfessionalExposure" onClick={() => updateExpanded(false)} className={`${styles.neonbutton}`}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Professional Exposure
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`${styles.btnmanage}`}>
              <Nav.Link as={Link} onClick={handleDownload} className={`${styles.neonbutton}`}>
                <AiOutlineDownload style={{ marginBottom: "2px" }} /> Download CV
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
