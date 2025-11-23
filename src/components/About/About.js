import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import styles from "./About.module.css";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>

        <Row className="align-items-center justify-content-center">
  <Col lg={6} md={6} sm={12} className={styles.textCol}>

            <h3 className={styles.headtext}>
              Know Who <strong className="purple">I'M</strong>
            </h3>
            <Aboutcard />
          </Col>

          {/* Right Image Column */}
  <Col lg={4} md={5} sm={12} className={styles.imgset}>
            <img
              src={laptopImg}
              alt="about"
              className={styles.laptopImg}
            />
          </Col>

        </Row>

        <h3 className={styles.headtext}>
          Professional <strong className="purple">Skillset</strong>
        </h3>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
