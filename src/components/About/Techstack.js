import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiCodeigniter,
  DiPython,
  DiGit,
  DiHtml5,
  DiPhp,
  DiCss3,
  DiDatabase,
  DiMysql
} from "react-icons/di";
import styles from './About.module.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: 'deeppink' }}>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiCodeigniter />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiMysql />
      </Col>

    </Row>
  );
}

export default Techstack;
