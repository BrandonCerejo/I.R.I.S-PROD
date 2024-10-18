import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'; // Create a new CSS module for Projects
import Header from '../components/Header';

function Projects() {
  const ongoingTechnicalProject = {
    id: 1,
    title: "Club Website",
    description: "A chatbot developed using machine learning techniques to assist users in various queries.",
    date: "Started: January 2024",
    conclusion: "This project aims to enhance customer support using AI technology."
  };

  const ongoingResearch = {
    id: 2,
    title: "autonomus ",
    description: "Research on leveraging blockchain technology to improve transparency and efficiency in supply chains.",
    date: "Started: March 2024",
    conclusion: "This research could revolutionize how supply chains operate."
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className={styles.projects}>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Projects</h1>

        {/* Ongoing Technical Projects Section */}
        <section className={styles.ongoingTechnicalProjects}>
          <h2 className={styles.ongoing}>Ongoing Technical Projects</h2>
          <div className={styles.projectList}>
            <div key={ongoingTechnicalProject.id} className={styles.projectCard}>
              <h2>{ongoingTechnicalProject.title}</h2>
              <p>{ongoingTechnicalProject.description}</p>
              <p>{ongoingTechnicalProject.date}</p>
              <h3>Team Members:</h3>
              <ul>
                {ongoingTechnicalProject.teamMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
              <p>{ongoingTechnicalProject.conclusion}</p>
              <Link to={`/projects/${ongoingTechnicalProject.id}`} className={styles.btn}>
                Click to Know More!
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing Research Section */}
        <section className={styles.ongoingResearch}>
          <h2 className={styles.ongoing}>Ongoing Research</h2>
          <div className={styles.projectList}>
            <div key={ongoingResearch.id} className={styles.projectCard}>
              <h2>{ongoingResearch.title}</h2>
              <p>{ongoingResearch.description}</p>
              <p>{ongoingResearch.date}</p>
              <h3>Research Members:</h3>
              <ul>
                {ongoingResearch.researchMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
              <p>{ongoingResearch.conclusion}</p>
              <Link to={`/projects/${ongoingResearch.id}`} className={styles.btn}>
                Click to Know More!
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
