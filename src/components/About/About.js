import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import styles from './About.module.css';
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "8em",
              paddingBottom: "50px",
            }}
          >
            <h3 className={`${styles.headtext} ${styles.itetx}`}>
              Know Who <strong className="purple">I'M</strong>
            </h3>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className={`${styles.imgset} about-img`}
          >
            <img src={laptopImg} alt="about" className={`${styles.laptopImg}`} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
      </Container>
    </Container>
  );
}

export default About;
