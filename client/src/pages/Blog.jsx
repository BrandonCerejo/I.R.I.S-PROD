import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Blog.module.css';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'TARZAN: Revolutionizing Autonomous Vehicle Navigation',
      subtitle: 'Advanced Pothole Detection System',
      description: 'An innovative system using computer vision to enhance autonomous vehicle control.',
      author: 'Research Team',
      date: 'November 18, 2024',
      image: 'autonomous-vehicle.jpg',
      content: (
        <>
          <h1>TARZAN: Revolutionizing Autonomous Vehicle Navigation through Advanced Computer Vision</h1>

          <h2>Introduction: The Future of Intelligent Transportation</h2>
          <p>
            In the rapidly evolving landscape of automotive technology, autonomous vehicles represent more than just a technological marvel—they are a transformative solution to transportation challenges. The I.R.I.S. club's TARZAN project emerges as a groundbreaking initiative that pushes the boundaries of what's possible in autonomous vehicle navigation, particularly in challenging road conditions.
          </p>

          <h3>The Context of Autonomous Driving</h3>
          <p>
            The journey of autonomous vehicles has been fascinating. From Google's Self-Driving Car Project in 2009 to Tesla's Autopilot in 2015, the automotive industry has witnessed exponential growth. However, most existing solutions are limited to high-end vehicles with Advanced Driver Assistance Systems (ADAS).
          </p>
          <p>
            TARZAN challenges this paradigm. Our project aims to democratize autonomous navigation technology, making it accessible to vehicles across different technological spectrums.
          </p>

          <h2>Understanding Autonomous Driving Levels</h2>
          <p>
            Before diving into TARZAN's specifics, let's understand the autonomous driving spectrum:
          </p>
          <ul>
            <li><strong>Level 0 (No Automation)</strong>: Traditional vehicles where the driver controls everything</li>
            <li><strong>Level 1 (Driver Assistance)</strong>: Basic features like adaptive cruise control</li>
            <li><strong>Level 2 (Partial Automation)</strong>: Simultaneous steering and acceleration/braking assistance</li>
            <li><strong>Level 3 (Conditional Automation)</strong>: Vehicle can manage most driving tasks, with driver ready to intervene</li>
          </ul>

          <h2>The TARZAN Approach: Intelligent Road Intelligent System</h2>

          <h3>Core Technologies</h3>
          <p>
            TARZAN integrates multiple cutting-edge technologies:
          </p>
          <ol>
            <li><strong>Computer Vision</strong>: Utilizing YOLOv8 for real-time object detection</li>
            <li><strong>Machine Learning</strong>: Adaptive algorithms for intelligent decision-making</li>
            <li><strong>Sensor Fusion</strong>: Combining multiple input streams for comprehensive environmental understanding</li>
          </ol>

          <h3>Pothole Detection Mechanism</h3>
          <p>
            The heart of TARZAN is its sophisticated pothole detection system:
          </p>
          <ul>
            <li><strong>Real-time Processing</strong>: 30 frames per second video analysis</li>
            <li><strong>Intelligent Classification</strong>: Categorizing potholes by severity</li>
            <ul>
              <li><strong>Green</strong>: Small potholes (&lt; 15,000 pixels)</li>
              <li><strong>Yellow</strong>: Medium potholes (15,000 - 30,000 pixels)</li>
              <li><strong>Red</strong>: Large potholes (&gt; 30,000 pixels)</li>
            </ul>
          </ul>

          <h3>Navigation and Obstacle Avoidance</h3>
          <p>
            TARZAN employs an advanced A* pathfinding algorithm on a 30x30 grid, enabling:
          </p>
          <ul>
            <li>Dynamic route recalculation</li>
            <li>Immediate obstacle response</li>
            <li>Optimal path selection considering road surface quality</li>
          </ul>

          <h2>Performance Metrics: Proving the Concept</h2>
          <p>
            Our experimental results are compelling:
          </p>
          <ul>
            <li><strong>Path Tracking Accuracy</strong>: Less than 0.5 meters deviation</li>
            <li><strong>Obstacle Response Time</strong>: Under 200 milliseconds</li>
            <li><strong>Detection Accuracy</strong>:
              <ul>
                <li>Precision: 91%</li>
                <li>Recall: 89%</li>
              </ul>
            </li>
            <li><strong>Speed Adaptation</strong>: Seamless control between 0-60 km/h</li>
          </ul>

          <h2>Technical Deep Dive: How TARZAN Works</h2>

          <h3>Data Processing Pipeline</h3>
          <ol>
            <li><strong>Input Capture</strong>: Video stream at 30 fps</li>
            <li><strong>Frame Sampling</strong>: Process every fifth frame for efficiency</li>
            <li><strong>Pothole Detection</strong>: YOLOv8 generates bounding boxes</li>
            <li><strong>Severity Assessment</strong>: Area-based classification</li>
            <li><strong>Navigation Adjustment</strong>: Immediate path recalculation</li>
          </ol>

          <h3>Simulation Framework</h3>
          <p>
            Our Pure Pursuit Controller enables:
          </p>
          <ul>
            <li>Precise waypoint tracking</li>
            <li>Dynamic velocity management</li>
            <li>Smooth trajectory following</li>
          </ul>

          <h2>Beyond Technology: The Vision</h2>
          <p>
            TARZAN isn't just a technical project—it's a vision of making roads safer, more accessible, and intelligent. By extending autonomous capabilities to vehicles without ADAS, we're democratizing advanced transportation technology.
          </p>

          <h2>Conclusion: The Road Ahead</h2>
          <p>
            As we continue refining TARZAN, we're not just developing a system—we're shaping the future of intelligent transportation. Our project demonstrates that with creativity, advanced algorithms, and a commitment to innovation, we can transform how we navigate our world.
          </p>

          <p><strong>Stay tuned for more updates from the I.R.I.S. Research Team!</strong></p>
          <p><i>Research Team: MIT World Peace University, Pune</i></p>
          <h3>Visual Insights of TARZAN's System</h3>
          <div className={styles.imageGallery}>
            <h4>MATLAB System Diagram</h4>
            <img
              src="/systemDiagMATLAB.jpg"
              alt="TARZAN Simulation"
              className={styles.blogImage}
            />
            <h4>Chassis Design</h4>
            <img
              src="/chassis.jpg"
              alt="TARZAN Chassis"
              className={styles.blogImage}
            />
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: 'Building the I.R.I.S. Website: A Comprehensive Digital Platform for Innovation',
      subtitle: 'A Strategic Digital Hub for Collaboration and Growth',
      description: 'Our journey in building a platform for collaboration, hackathon management, and seamless user experience.',
      author: 'Technical Team',
      date: 'November 18, 2024',
      image: 'website-development.jpg',
      content: (
        <>
          <h1>Building the I.R.I.S. Website: A Comprehensive Digital Platform for Innovation</h1>

          <h2>Introduction: The Need for a Digital Ecosystem</h2>
          <p>
            In today's technology-driven world, an organization's digital presence is more than just a website—it's a comprehensive ecosystem that connects, communicates, and catalyzes innovation. For I.R.I.S., our website represents more than a digital brochure; it's a strategic tool for collaboration, management, and showcasing our technological prowess.
          </p>

          <h3>The Challenges We Addressed</h3>
          <p>
            Before our website, we faced significant challenges:
          </p>
          <ul>
            <li>Fragmented communication channels</li>
            <li>Difficult hackathon registrations</li>
            <li>Limited visibility of member achievements</li>
            <li>Complex payment processes</li>
          </ul>

          <h2>Architectural Overview: More Than Just Pages</h2>

          <h3>Website Structure</h3>
          <p>
            Our website is strategically designed with distinct, purpose-driven sections:
          </p>
          <ol>
            <li><strong>Home Page</strong>: First impressions and latest highlights</li>
            <li><strong>Projects</strong>: Showcasing our technological innovations</li>
            <li><strong>Members</strong>: Highlighting individual and team achievements</li>
            <li><strong>Hackathons</strong>: Streamlined registration and management</li>
            <li><strong>Resources</strong>: Knowledge sharing and documentation</li>
          </ol>

          <h2>Technology Stack: Powering Our Digital Platform</h2>

          <h3>Frontend: React.js and Bootstrap</h3>
          <p><strong>Why React.js?</strong></p>
          <ul>
            <li>Component-based architecture</li>
            <li>High performance</li>
            <li>Seamless state management</li>
            <li>Rich ecosystem of libraries</li>
          </ul>
          <p><strong>Bootstrap Integration</strong></p>
          <ul>
            <li>Responsive design</li>
            <li>Mobile-first approach</li>
            <li>Consistent UI/UX across devices</li>
            <li>Rapid development capabilities</li>
          </ul>

          <h3>Backend and Database: Supabase SQL</h3>
          <p><strong>Why Supabase?</strong></p>
          <ul>
            <li>Real-time database capabilities</li>
            <li>Robust security features</li>
            <li>Scalable infrastructure</li>
            <li>Easy PostgreSQL integration</li>
          </ul>

          <h3>Payment Gateway: Razorpay</h3>
          <p><strong>Seamless Transaction Experience</strong></p>
          <ul>
            <li>Secure payment processing</li>
            <li>Multiple payment method support</li>
            <li>Easy integration</li>
            <li>Low transaction overhead</li>
          </ul>

          <h2>Security: Protecting Our Digital Frontier</h2>

          <h3>Cyber Incident: A Critical Learning Moment</h3>
          <p>
            In an unexpected turn of events, our website faced a critical security vulnerability—one that reshaped our approach to cybersecurity. Here's a detailed look at the incident:
          </p>

          <p><strong>The Incident:</strong></p>
          <ul>
            <li><strong>What Happened:</strong> Our team developed and deployed the website to handle hackathon registrations and payments. Due to a tight schedule, security was initially deprioritized. We disabled Row Level Security (RLS) in the Supabase backend to speed up data entry, leaving the database exposed to unauthorized changes.</li>
            <li><strong>How We Discovered It:</strong> After deployment, a participant noticed the exposed database and alerted us. They demonstrated the vulnerability by adding an empty row, highlighting the potential for unauthorized CRUD operations.</li>
            <li><strong>How We Fixed It:</strong> We quickly re-enabled RLS with custom rules, tested the changes on a dummy site, and then deployed the fix to the live site. This experience reinforced the importance of prioritizing security from the start, no matter the project scale.</li>
          </ul>

          <h3>Key Learnings:</h3>
          <ul>
            <li>Never compromise on security, even for seemingly low-risk projects</li>
            <li>Implement strong security measures like RLS and key protection early in development</li>
            <li>Regularly audit systems for vulnerabilities, even after deployment</li>
          </ul>

          <h2>Deployment: Bringing Our Vision Online</h2>
          <h3>Vercel: Powering Our Digital Infrastructure</h3>
          <p><strong>Frontend Deployment</strong></p>
          <ul>
            <li>Seamless GitHub integration</li>
            <li>Instant deployments</li>
            <li>Global CDN</li>
            <li>Performance optimization</li>
          </ul>

          <h3>Serverless Edge Functions</h3>
          <ul>
            <li>Scalable backend logic</li>
            <li>Reduced infrastructure complexity</li>
            <li>Cost-effective computing</li>
          </ul>

          <h2>Maintenance and Continuous Improvement</h2>
          <p>
            Our DevOps cycle ensures:
          </p>
          <ul>
            <li>Regular updates</li>
            <li>Performance monitoring</li>
            <li>Security patches</li>
            <li>Feature enhancements</li>
          </ul>

          <h2>Conclusion: More Than a Website</h2>
          <p>
            The I.R.I.S. website is a testament to our commitment to innovation, collaboration, and technological excellence. It's not just a platform—it's our digital home.
          </p>

          <p><strong>Continuous Innovation, Infinite Possibilities</strong></p>
          <p><i>Developed by the I.R.I.S. Technical Team</i></p>
        </>
      ),
    },
  ];

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <div className={styles.blogPage}>
      <div className="container py-5">
        <h1 className={styles.pageTitle}>Our Blog</h1>
        <p className={styles.pageSubtitle}>
          I.R.I.S. recent developments and ongoing projects.
        </p>
        <div className="row py-5">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className={styles.blogCard}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.blogImage}
                />
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogDescription}>{post.description}</p>
                  <div className={styles.blogMeta}>
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                  <button
                    onClick={() => openModal(post)}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <Modal
            isOpen={!!selectedPost}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
          >
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
              <h4 className={styles.modalSubtitle}>{selectedPost.subtitle}</h4>
              <div className={styles.modalMeta}>
                <span>By {selectedPost.author}</span> |{' '}
                <span>{selectedPost.date}</span>
              </div>
              <div className={styles.modalText}>{selectedPost.content}</div>
              {selectedPost.additionalImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Additional Image ${index + 1}`}
                  className={styles.modalImage}
                />
              ))}
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Blog;
