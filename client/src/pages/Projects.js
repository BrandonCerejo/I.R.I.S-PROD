import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'; 
import Header from '../components/Header';

function Projects() {
  const ongoingTechnicalProject = {
    id: 1,
    title: "Ongoing Technical Project: Club Website",
    description: "some info about website ",
    date: "Started: July 2024",
  };

  const ongoingResearch = {
    id: 2,
    title: "Ongoing Research Project: Autonomous Vehicle",
    description: "info about autonomous vehicle",
    date: "Started: July 2024",
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

        {/* Separate Sections for Technical Projects and Research */}
        <section className={styles.ongoingTechnical}>
          <h2 className={styles.ongoing}>{ongoingTechnicalProject.title}</h2>
          <div className={styles.projectCard}>
            <p>{ongoingTechnicalProject.description}</p>
            <p>{ongoingTechnicalProject.date}</p>
            <Link to={`/projects/${ongoingTechnicalProject.id}`} className={styles.btn}>
              Click to Know More!
            </Link>
          </div>
        </section>

        <section className={styles.ongoingResearch}>
          <h2 className={styles.ongoing}>{ongoingResearch.title}</h2>
          <div className={styles.projectCard}>
            <p>{ongoingResearch.description}</p>
            <p>{ongoingResearch.date}</p>
            <Link to={`/projects/${ongoingResearch.id}`} className={styles.btn}>
              Click to Know More!
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;