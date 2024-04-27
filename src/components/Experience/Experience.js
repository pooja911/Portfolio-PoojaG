import React from "react";
import styles from "./experience.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      company: "PayU",
      position: "Software Engineer",
      duration: "March 2022 - September 2023",
      description:[
        <ul><li>Proficient in React, developed scalable microservices, reducing workload by 65%.</li></ul>,
        <ul><li>Extensive experience in API integration, ensuring seamless integration into projects.</li></ul>,
        <ul><li>Designed interactive GUIs for payment portals and university transactions, demonstrating adept problem-solving skills.</li></ul>,
        <ul><li>Experienced in Python scripting for data manipulation and secure transmission to clients.</li></ul>,
        <ul><li>Successfully integrated payment APIs into websites, ensuring secure and efficient transactions.</li></ul>,
        <ul><li>Strong foundation in web development, adept at tackling challenges while maintaining a driven approach to deliver high-quality solutions.</li></ul>
      ],
      Skills : '',
   
      },
    {
      company: "PayU",
      position: "Software Engineer Intern",
      duration: "September 2021 - March 2022",
      description:
      [
        <ul><li>Comprehensive understanding of payment processing systems, encompassing transaction flows, security protocols, and compliance standards.</li></ul>,
        <ul><li>Hands-on experience spans the entire software development lifecycle, from requirements gathering to deployment and maintenance.</li></ul>,
        <ul><li>Prioritize coding best practices for readability and maintainability, while proficiently utilizing version control systems like Git for collaborative development.</li></ul>,
        <ul><li>Skilled in integrating with external APIs, particularly for payment gateways and authentication services.</li></ul>,
        <ul><li>Excellent communication within cross-functional teams and thrive in technical environments, adeptly tackling complex challenges to deliver innovative solutions.</li></ul>,
      ],     
      Skills : '',
      },
  ];

  return (
    <>
     <Container fluid className="project-section">
      <div className={`${styles.exp} project-card`}>
        <h2 className={`${styles.head} `} >Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.data} project-card-view`}>
            <h3>{exp.company}</h3>
            <p>
              <strong>{exp.position}</strong>
            </p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
            <p>{exp.Skills}</p>
          </div>
        ))}
        <break />
      </div>
      </Container>
    </>
  );
};

export default Experience;
