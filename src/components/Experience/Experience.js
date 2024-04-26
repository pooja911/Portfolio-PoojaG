import React from "react";
import styles from "./experience.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      company: "PayU",
      position: "Software Engineer",
      duration: "March 2022 - September 2023",
      description:
        "Proficient in React, developed scalable microservices, reducing workload by 65%. Extensive experience in API integration, ensuring seamless integration into projects. Designed interactive GUIs for payment portals and university transactions, demonstrating adept problem-solving skills. Experienced in Python scripting for data manipulation and secure transmission to clients. Successfully integrated payment APIs into websites, ensuring secure and efficient transactions. Strong foundation in web development, adept at tackling challenges while maintaining a driven approach to deliver high-quality solutions.",
      Skills : '',
   
      },
    {
      company: "PayU",
      position: "Software Engineer Intern",
      duration: "September 2021 - March 2022",
      description:
        "I have a comprehensive understanding of payment processing systems, encompassing transaction flows, security protocols, and compliance standards. My hands-on experience spans the entire software development lifecycle, from requirements gathering to deployment and maintenance. I prioritize coding best practices for readability and maintainability, while proficiently utilizing version control systems like Git for collaborative development. Integrating with external APIs, particularly for payment gateways and authentication services, is a skill I've honed. Additionally, I excel in communication within cross-functional teams and thrive in technical environments, adeptly tackling complex challenges to deliver innovative solutions.",
      Skills : '',
      },
  ];

  return (
    <>
      <div className={`${styles.exp}`}>
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.data}`}>
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
    </>
  );
};

export default Experience;
