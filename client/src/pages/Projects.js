import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'; 
import Header from '../components/Header';

function Projects() {
  const ongoingTechnicalProject = {
    id: 1,
    title: "Club Website",
    description: "some info about website ",
    date: "Started: July 2024",
  };
  
  const ongoingTechnicalProject2 = {
    id: 2,
    title: "Autonomous Vehicle",
    description: "info about autonomous vehicle",
    date: "Started: July 2024",
  };

  const ongoingResearch = {
    id: 3,
    title: "Research",
    description: "info about research project",
    date: "Started: July 2024",
  };

  const ongoingResearch2 = {
    id: 4,
    title: "Research",
    description: "info about research project",
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
          
          {/* Technical Projects Section */}
          <h2 className={styles.title}>Ongoing Technical Projects</h2>
          <div className={styles.projectsWrapper}>
            <div className={styles.ongoingTechnical}>
              <h3 className={styles.ongoing}>{ongoingTechnicalProject.title}</h3>
              <div className={styles.projectCard}>
                <div>
                  <img src ="logo2.png"></img>
                  <p>{ongoingTechnicalProject.description}</p>
                  <p>{ongoingTechnicalProject.date}</p>
                </div>
                <Link to={`/projects/${ongoingTechnicalProject.id}`} className={styles.btn}>
                  Click to Know More!
                </Link>
              </div>
            </div>
  
            <div className={styles.ongoingTechnical}>
              <h3 className={styles.ongoing}>{ongoingTechnicalProject2.title}</h3>
              <div className={styles.projectCard}>
                <div>
                  <img src ="logo2.png"></img>
                  <p>{ongoingTechnicalProject2.description}</p>
                  <p>{ongoingTechnicalProject2.date}</p>
                </div>
                <Link to={`/projects/${ongoingTechnicalProject2.id}`} className={styles.btn}>
                  Click to Know More!
                </Link>
              </div>
            </div>
          </div>
  
          {/* Research Section */}
          <h2 className={styles.title}>Ongoing Research</h2>
          <div className={styles.projectsWrapper}>
            <div className={styles.ongoingResearch}>
              <div className={styles.projectCard}>
                <div>
                  <img src ="logo2.png"></img>
                  <p>{ongoingResearch.description}</p>
                  <p>{ongoingResearch.date}</p>
                </div>
                <Link to={`/projects/${ongoingResearch.id}`} className={styles.btn}>
                  Click to Know More!
                </Link>
              </div>
            </div>
  
            <div className={styles.ongoingResearch}>
              <div className={styles.projectCard}>
                <div>
                  <img src ="logo2.png"></img>
                  <p>{ongoingResearch2.description}</p>
                  <p>{ongoingResearch2.date}</p>
                </div>
                <Link to={`/projects/${ongoingResearch2.id}`} className={styles.btn}>
                  Click to Know More!
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
export default Projects;