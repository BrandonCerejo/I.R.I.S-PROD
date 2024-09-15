import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css';
import backgroundVideo from './vid2.mp4';

function About() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>

      <Header />

      <main className={styles.content + ' py-5'}>
        <div className="container">
          <h1 className={styles.title}>About I.R.I.S</h1>
          <p className={styles.titleDesc}>I.R.I.S (Innovation Research & Intelligence Support) is a tech club dedicated to fostering innovation and supporting research in the field of technology.</p>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.contactInfo + ' p-4'}>
                <h2>Contact Information</h2>
                <p>Email: iris@mitwpu.edu.in</p>
                <p>Phone: +91 7715958053</p>
                <p>Address: MIT World Peace University Survey No, 124, Paud Rd, Kothrud, Pune, Maharashtra 411038</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.mission + ' p-4'}>
                <h2>Our Mission</h2>
                <h4>To provide a platform for tech enthusiasts to:</h4>
                <h5>* Collaborate</h5>
                <h5>* Learn</h5>
                <h5>* Innovate</h5>
              </div>
            </div>
          </div>
          <div className={styles.vision + ' p-4'}>
            <h2>Our Vision</h2>
            <p>To be the leading tech community that drives technological advancements and shapes the future of innovation.</p>
          </div>
          <div className={styles.teamMembers + ' p-4'}>
            <h2>Team Members</h2>
            <div className="row">
              {/* Team Member 1 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="taksh.jpg" alt="Team Member 1" />
                  <div className={styles.cardContent}>
                    <h3>Taksh Dhabalia</h3>
                    <p>President</p>
                    <a href="https://www.linkedin.com/in/taksh-dhabalia-2b6969202/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="samanyu.jpg" alt="Team Member 2" />
                  <div className={styles.cardContent}>
                    <h3>Samanyu Bhate</h3>
                    <p>VP</p>
                    <a href="https://www.linkedin.com/in/samanyu-bhate-17136b1ab/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="durgesh.jpg" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Durgesh Deore</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/durgesh-deore-74a75a281/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 4 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 4" />
                  <div className={styles.cardContent}>
                    <h3>Grishma Shinde</h3>
                    <p>General Secratory</p>
                    <a href="https://www.linkedin.com/in/michaelbrown" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 5 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Kaustub </h3>
                    <p>Marketing Head</p>
                    <a href="https://www.linkedin.com/in/sarahwilson" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 6 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Riya Kondawar</h3>
                    <p></p>
                    <a href="https://www.linkedin.com/in/riyakondawar/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 7 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Kushagra Singh</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/sarahwilson" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 8 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Gaganjot Kaur</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/sarahwilson" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Team Member 9 */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Purva Rana</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/sarahwilson" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
