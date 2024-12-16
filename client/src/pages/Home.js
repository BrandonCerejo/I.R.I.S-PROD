import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import smallPhoto from './sephackathon.jpg';

function Home() {
  const sections = [
    {
      title: "TARZAN",
      description: "Revolutionizing Autonomous Vehicle Navigation.\nAn innovative system using computer vision to enhance autonomous vehicle control.",
      link: "/blog",
      image: "/simulation.jpg",
    },
    {
      title: "Security Breach We Overcame",
      description: "Our journey in building a platform for collaboration, hackathon management and seamless user experience.",
      link: "/blog",
      image: "/website_img.png",
    },
    {
      title: "The Impact of Mobiles",
      description: "Exploring the dual-edged nature of the digital revolution and its impact on the younger generation.",
      link: "/blog",
      image: "/mobile_screen_time.jpg",
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000); // Automatically slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sections.length]);

  const handlePrev = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex === 0 ? sections.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  return (
    <div className={styles.home}>
      <video className={styles.backgroundVideo} autoPlay muted loop>
        <source
          src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Videos/vid2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9WaWRlb3MvdmlkMi5tcDQiLCJpYXQiOjE3MzA5MDA1MDcsImV4cCI6MTc2MjQzNjUwN30.qMfRi7Uxvtpz4rRnaN6bTSQzEE_AtxrRQMBp2qR5YEI&t=2024-11-06T13%3A41%3A48.487Z"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}>
        <main className="flex-grow-1">
          {/* Hero Section */}
          <div
            className={`${styles.hero} text-white d-flex align-items-center`}
            style={{ borderRadius: '20px' }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1
                    className={`${styles.arial} display-3 fw-bold`}
                    style={{ letterSpacing: '0.1em' }}
                  >
                    I.R.I.S.
                  </h1>
                  <h2 className="lead">
                    Innovation Research & Intelligence Support
                  </h2>
                  <p className="mb-4">
                    Empowering innovation and fostering technological
                    advancements.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <video className={styles.heroVideo} autoPlay loop muted>
                    <source
                      src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Videos/vid1.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9WaWRlb3MvdmlkMS5tcDQiLCJpYXQiOjE3MzA4OTk4MjMsImV4cCI6MTc2MjQzNTgyM30.C_yjMhQfYEszRhFBj9DrlK3rUF4-ugkIRdR7t4vkXkU&t=2024-11-06T13%3A30%3A24.685Z"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Sliding Sections */}
          <div
            className={`${styles.newSectionContainer} d-flex align-items-center`}
            style={{
              margin: '30px 0',
              borderRadius: '20px',
              background: 'linear-gradient(to right, rgba(23, 37, 90, 0.8), rgba(201, 64, 101, 0.8))',
              position: 'relative',
              color: '#fff',
              padding: '20px',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h2 className="display-4 fw-bold">
                    {sections[currentSectionIndex].title}
                  </h2>
                  <p className="mb-4">
                    {sections[currentSectionIndex].description}
                  </p>
                  <Link
                    to={sections[currentSectionIndex].link}
                    className={styles.knowMoreBtn}
                  >
                    Know More
                  </Link>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    src={sections[currentSectionIndex].image}
                    alt={sections[currentSectionIndex].title}
                    className={styles.newSectionImage}
                  />
                </div>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className={`${styles.arrow} ${styles.leftArrow}`}
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className={`${styles.arrow} ${styles.rightArrow}`}
            >
              &#8250;
            </button>
          </div>
        {/* Journey Section */}
        <div
            className={`${styles.journey} py-5 text-center text-light`}
          >
            <div className="container">
              <h3 className={styles.journeyTitle}>
                Join us on the I.R.I.S Journey
              </h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Bring Your Idea</h4>
                    <p>
                      Transform your concepts into reality with our supportive
                      community.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Collaborate and Develop</h4>
                    <p>
                      Work with like-minded individuals to refine and expand
                      your projects.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.step} p-4 shadow-sm h-100`}>
                    <h4>Achieve and Launch</h4>
                    <p>
                      Bring your innovations to life and make a lasting impact
                      in the tech world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
