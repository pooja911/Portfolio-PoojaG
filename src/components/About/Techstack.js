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
  DiMysql,
} from "react-icons/di";
import styles from "./About.module.css";
// import { Tooltip } from 'react-tooltip';
// import Tooltip from '@mui/material/Tooltip';
import { Tooltip } from "@mui/material";

function Techstack() {
  return (
    <Row
      style={{justifyContent: "center",paddingBottom: "50px", color: "deeppink", }}>
      <Tooltip title="Python" placement="bottom" arrow>
        <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
          <DiPython />
        </Col>
      </Tooltip>
      <Tooltip title="Javascript" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiJavascript1 />
      </Col></Tooltip>
      <Tooltip title="React" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiReact />
      </Col></Tooltip>
      <Tooltip title="C++" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <CgCPlusPlus />
      </Col></Tooltip>
      <Tooltip title="PHP" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiPhp />
      </Col></Tooltip>
      <Tooltip title="CodeIgnitor" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiCodeigniter />
      </Col></Tooltip>
      <Tooltip title="Git" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiGit />
      </Col></Tooltip>
      <Tooltip title="HTML" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiHtml5 />
      </Col></Tooltip>
      <Tooltip title="CSS" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiCss3 />
      </Col></Tooltip>
      <Tooltip title="Database" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiDatabase />
      </Col>
      </Tooltip>
      <Tooltip title="Mysql" placement="bottom" arrow>
      <Col xs={4} md={2} className={`${styles.TechImg} tech-icons`}>
        <DiMysql />
      </Col></Tooltip>
    </Row>
  );
}

export default Techstack;
