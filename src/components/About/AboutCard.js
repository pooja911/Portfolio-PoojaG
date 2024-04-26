import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from './About.module.css';


function AboutCard() {
  return (
    <Card className={  ` ${styles.cardcolor} `}>
      <Card.Body className={  ` ${styles.cardcolor}`}>
        <blockquote className="blockquote mb-0">
          <p className={`${styles.cardTxt}` }>
            Hi Everyone, I am <span className="purple">Pooja Garg </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I'm  currently  enrolled in a master's program in computer science at Paderborn University.   <br />
            Up until September 2023, I worked as a software engineer for PayU, gaining more than 1.7 years of work experience.
            Prior to that, I interned with the same firm as a software engineer Intern while pursuing my bachelor's degree, and later, I was hired on as a full-time employee.
            <br />
            
            I have completed Bachelor's in Information Technology from Pune Universitry, India with an overall CGPA of 9.06 and an german grade of 1.4!
            <br />
            
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
