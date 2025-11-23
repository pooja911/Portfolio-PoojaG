import React, { useState } from "react";
import styles from "./experience.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Experience = () => {
  const [openCard, setOpenCard] = useState(null);
  const [openProject, setOpenProject] = useState({});

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const toggleProject = (cardIndex, projIndex) => {
    const key = `${cardIndex}-${projIndex}`;
    setOpenProject((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ---------------------------
  // EXPERIENCE DATA
  // ---------------------------
  const experiences = [
    // NEW EXPERIENCE WITH MULTIPLE PROJECTS
    {
      company: "dSPACE GmbH",
      position: "Working Student in AI",
      duration: "June 2024 - Present",
      projects: [
        {
          title: "IVS Scenario Detection Configurator",
          description:
            "Developed the frontend architecture for a web-based scenario configuration tool in dSPACE’s Intelligent Vehicle Simulation framework using React, Plotly.js, and Material UI. Implemented image-based coordinate marking and dynamic heuristic parameter editing through REST API integration with a FastAPI backend. Containerized and deployed the system with Docker and Nginx, ensuring a production-ready full-stack workflow for seamless visualization and configuration of AI heuristic models.Ensured scalability and maintainability by modularizing components and aligning with internal AI toolchain standards."  },
        {
          title: "Multimodal Dataset Synchronization",
          description:
            "Developed a comprehensive Python-based pipeline to synchronize, structure, and visualize multimodal automotive sensor data including LiDAR .pcd files, .ply meshes, camera images, GPS/IMU CSV logs, and annotated JSON metadata. Implemented timestamp-based frame alignment using 11-digit temporal matching to fuse 2D camera images with corresponding 3D LiDAR frames. Parsed .json label files to extract 3D and 2D bounding boxes, object attributes, and scene metadata, automatically linking each annotation to its respective sensor frame. Integrated all modalities into inspection-ready FiftyOne datasets, enabling interactive visualization of synchronized scenes, object geometries, and sensor alignment. This workflow streamlined internal data-processing pipelines and improved dataset quality validation for downstream ML perception tasks."  },
        {
          title: "Versioned Documentation Setup",
          description:
            "Implemented documentation versioning and deployment for an internal dSPACE tool using MkDocs and mike.Enabled multiple documentation versions (e.g., v1.0, v2.0, latest) to be built and deployed under the gh-pages branch, allowing smooth version switching through the MkDocs Material version selector."
          },
        {
          title: "Weather Detection System",
          description:
            "Developed a Python-based weather detection module that integrates with the Wetterdienst REST API to fetch and process real-time meteorological data. Implemented rank-based filtering and condition-matching logic to reliably identify rainy and cloudy weather states from structured JSON responses. The project demonstrates strong skills in API integration, data processing, and building lightweight decision-logic pipelines for environmental analytics." }
      ]
    },

    // NORMAL EXPERIENCE 1
    {
      company: "PayU",
      position: "Software Engineer",
      duration: "March 2022 - September 2023",
      description: [
        "Utilized React's component-based architecture to create modular and scalable microservices.",
        "Implemented functional React components for various features including user creation, modification, deletion, and search functionalities, utilizing React Router DOM, React Icons, React Custom Hooks, React Bootstrap, React Hooks, React Testing Library (Jest), React Table Library, React Tooltip, Axios, and Redux, reducing workload by 65% and ensuring timely delivery.",
        "Possess extensive experience in creating API, with focus on successfully integrating them into projects, and proficiently testing their functionality using tools like Postman.",
        "Developed interactive graphical user interface design for payment portals addressing L&T Finance's loan repayment requirements and various universities' hostel and college fee transactions, showcasing robust problem-solving skills through adept identification, analysis, and resolution of challenges encountered, while maintaining a driven approach throughout the development process.",
        "Developed Python scripts to fetch details from PayU's main database and securely transmit them to clients via email and SFTP",
        "Successfully integrated payment APIs into websites, ensuring secure and efficient transactions"
      ]
    },

    {
      company: "PayU",
      position: "Software Engineer Intern",
      duration: "September 2021 - March 2022",
      description: [
        "Understood the fundamentals of payment processing systems, including transaction flows, security protocols, and compliance standards.",
        "Gained hands-on experience with the entire software development lifecycle, from requirements gathering to deployment and maintenance.",
        "Acquired knowledge of coding best practices such as code readability, and maintainability.",
        "Became proficient in using version control systems like Git for collaborative development.",
        "Learned how to integrate with external APIs for services like payment gateways, and authentication.",
        "Enhanced communication skills by collaborating with cross-functional teams and presenting project updates or findings, while also being accustomed to technical environments, where I handled complex challenges to achieve innovative solutions."
      ]
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => {
          const cardOpen = openCard === index;

          return (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.content}>
                {/* Header row */}
                <div className={styles.headerRow}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.position}>{exp.position}</p>
                    <p className={styles.duration}>{exp.duration}</p>
                  </div>

                  <button className={styles.arrowBtn} onClick={() => toggleCard(index)}>
                    {cardOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                {/* CARD BODY */}
                {cardOpen && (
                  <div>
                    {/* ---------------------------
                        IF PROJECTS → SHOW NESTED ACCORDIONS
                       --------------------------- */}
                    {exp.projects ? (
                      <div className={styles.projectList}>
                        {exp.projects.map((proj, pIndex) => {
                          const projKey = `${index}-${pIndex}`;
                          const projOpen = openProject[projKey];

                          return (
                            <div key={pIndex} className={styles.projectItem}>
                              <div
                                className={styles.projectHeader}
                                onClick={() => toggleProject(index, pIndex)}
                              >
                                <span>{proj.title}</span>
                                {projOpen ? <FaChevronUp /> : <FaChevronDown />}
                              </div>

                              {projOpen && (
                                <p className={styles.projectDescription}>
                                  {proj.description}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* ---------------------------
                          OTHERWISE SHOW NORMAL DESCRIPTION LIST
                         --------------------------- */
                      <ul className={styles.descList}>
                        {exp.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              <span className={styles.node}></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
