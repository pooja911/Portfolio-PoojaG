import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from "./About.module.css";

function AboutCard() {
  return (
    <Card className={` ${styles.cardcolor} `}>
      <Card.Body className={` ${styles.cardcolor}`}>
        <blockquote className="blockquote mb-0">
          <p className={`${styles.cardTxt}`}>
            Hi Everyone, I am <span className="purple">Pooja Garg </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am a Master’s student in Computer Science at Paderborn University,
            with a strong foundation in full-stack development, AI tooling, and
            data-driven systems. Over the past few years, I have worked
            extensively across modern web technologies, scalable backend
            architectures, data synchronization workflows, and production-ready
            deployment pipelines.
            <br />
            My background spans building intelligent interfaces for simulation
            systems, designing multimodal data pipelines for automotive
            perception, crafting interactive dashboards, integrating REST APIs,
            and delivering solutions using React, FastAPI, Python, Docker, and
            cloud-based workflows. <br />
           Alongside industry experience, I hold a Bachelor’s degree in Information Technology from Pune University, graduating with a CGPA of 9.06 (German equivalent 1.4). I’m passionate about creating clean, modular, and reliable software—whether it’s AI-enhanced applications, automation pipelines, or scalable web systems—while continuously exploring opportunities to innovate and learn.
            <br/>
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
