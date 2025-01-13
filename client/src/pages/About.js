import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
// import backgroundVideo from './vid2.mp4';

function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const [backgroundVideo, setLink] = useState("https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Videos/vid2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9WaWRlb3MvdmlkMi5tcDQiLCJpYXQiOjE3MzA5MDA1MDcsImV4cCI6MTc2MjQzNjUwN30.qMfRi7Uxvtpz4rRnaN6bTSQzEE_AtxrRQMBp2qR5YEI&t=2024-11-06T13%3A41%3A48.487Z")


  return (
    <div className={styles.aboutUs}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>

      <main className={styles.content + ' py-5'}>
        <div className="container">
          <h1 className={styles.title}>About I.R.I.S.</h1>
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
          <div className="row">
          <h2>Faculty Mentors</h2>
            <div className="col-md-6">
              {/* Faculty Mentor 1 */}
              <div className={styles.mentor}>
                <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/shamlaMaam.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3Mvc2hhbWxhTWFhbS5qcGVnIiwiaWF0IjoxNzMwODk5Mzg5LCJleHAiOjIwNDYyNTkzODl9.oIqx2-i5mwLNiVz8q6X0Vm1qDUKAM2guqV5o8IrODTo&t=2024-11-06T13%3A23%3A10.130Z" alt="Shamla Mantri" className={styles.mentorImage} />
                <div className={styles.mentorInfo}>
                  <h3>Dr. Shamla Mantri</h3>
                  <p>Associate Professor</p>
                  <a href="https://scholar.google.com/citations?user=IUUENAMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Faculty Mentor 2 */}
              <div className={styles.mentor}>
                <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/yogeshSir.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MveW9nZXNoU2lyLmpwZyIsImlhdCI6MTczMDg5OTQxMCwiZXhwIjoxNzYyNDM1NDEwfQ.cpr4Ni2n_CVdpWda6-gUWFEBb55V8amoFS9vrzBVkXo&t=2024-11-06T13%3A23%3A30.903Z" alt="Dr.Yogesh Kulkarni" className={styles.mentorImage} />
                <div className={styles.mentorInfo}>
                  <h3>Dr. Yogesh Kulkarni</h3>
                  <p>Assistant Professor</p>
                  <a href="https://scholar.google.com/citations?user=9GsTeoQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6" >
              {/* Faculty Mentor 3 */}
              <div className={styles.mentor}>
                <img src="Pratvina_mam.png" alt="Pratvina Talele" className={styles.mentorImage} />
                <div className={styles.mentorInfo}>
                  <h3>Prof. Pratvina Talele</h3>
                  <p>Project Mentor</p>
                  <a href="https://scholar.google.com/citations?hl=en&user=_sFHQ8UAAAAJ" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="team-members" className={styles.teamMembers + ' p-4'}>
            <h2>Team Members</h2>
            <div className="row">

              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/durgesh.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvZHVyZ2VzaC5qcGciLCJpYXQiOjE3MzA4OTk0MjksImV4cCI6MTc2MjQzNTQyOX0.Ble9MmyaEee2gi9rohqmZMBhzw3FuXKcpB2M1PHbGQU&t=2024-11-06T13%3A23%3A50.623Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Durgesh Deore</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/durgesh-deore-74a75a281/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/kavish.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3Mva2F2aXNoLmpwZWciLCJpYXQiOjE3MzA4OTk0NDMsImV4cCI6MTc2MjQzNTQ0M30.5HWHEPHvaOW2mmMg482IgDdznf_4riPKe0OvFyeAwUo&t=2024-11-06T13%3A24%3A03.938Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Kavish Jain</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/kavish-jain-38b812247/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/chinmay.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvY2hpbm1heS5qcGciLCJpYXQiOjE3MzA4OTk0NTgsImV4cCI6MTc2MjQzNTQ1OH0.gSjwCIfBD-4RzpQV1An3m8DfsKSQl9BrHznE3-VwEaM&t=2024-11-06T13%3A24%3A19.195Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Chinmay Huddar</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/chinmay-huddar-3536761ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Raghunandan</h3>
                    <p>Founder</p>
                    <a href="" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* President */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/taksh.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvdGFrc2guanBlZyIsImlhdCI6MTczMDg5OTUwMywiZXhwIjoxNzYyNDM1NTAzfQ.ROc-4Rk8X94krlBzfrb6sQ_NnhJDnlg3qt9Ct9wNu1Q&t=2024-11-06T13%3A25%3A04.575Z" alt="Team Member 1" />
                  <div className={styles.cardContent}>
                    <h3>Taksh Dhabalia</h3>
                    <p>President</p>
                    <a href="https://www.linkedin.com/in/taksh-dhabalia-2b6969202/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {/* <Link to="/portfolio/taksh" className={styles.button}>Portfolio</Link> */}
                  </div>
                </div>
              </div>
              {/* Vice President */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 2" />
                  <div className={styles.cardContent}>
                    <h3>Namra Doshi</h3>
                    <p>Vice President </p>
                    <a href="https://www.linkedin.com/in/namra-doshi-445976249/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TREASURER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Brandon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvQnJhbmRvbi5qcGciLCJpYXQiOjE3MzA4OTk1NDgsImV4cCI6MTc2MjQzNTU0OH0.O9ya6-3JyRxITVYPai7LgMgvGRXZaQMgSys4pdSKCBc&t=2024-11-06T13%3A25%3A48.983Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Brandon Cerejo</h3>
                    <p>Treasurer</p>
                    <a href="https://www.linkedin.com/in/brandon-cerejo-921275247/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* GS */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/grishma.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvZ3Jpc2htYS5qcGciLCJpYXQiOjE3MzA4OTk1NjEsImV4cCI6MTc2MjQzNTU2MX0.2LGuL_ErNJok5vfRGyxH-pJYLpAZcR2Kuq9D-XBAvlc&t=2024-11-06T13%3A26%3A02.521Z" alt="Team Member 4" />
                  <div className={styles.cardContent}>
                    <h3>Grishma Shinde</h3>
                    <p>General Secretary</p>
                    <a href="https://www.linkedin.com/in/grishma-shinde-835343294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TECH TEAM */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Kush.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvS3VzaC5qcGciLCJpYXQiOjE3MzA4OTk1ODEsImV4cCI6MTc2MjQzNTU4MX0.h-qtkXfADCCZGQxQpjTl4n8lHXmEUpLw6mR9VHH2ewI&t=2024-11-06T13%3A26%3A22.615Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Kushagra Singh</h3>
                    <p>Technical Head</p>
                    <a href="https://www.linkedin.com/in/kushagra-anit-singh/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TECH TEAM */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/gagan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvZ2FnYW4uanBnIiwiaWF0IjoxNzMwODk5NTk3LCJleHAiOjE3NjI0MzU1OTd9.6bW_qvw8a_ogyuA4YlgArpo85dLvK01_bJ7Jj9_i6Po&t=2024-11-06T13%3A26%3A38.333Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Gaganjot Kaur</h3>
                    <p>Project Team Head</p>
                    <a href="https://www.linkedin.com/in/gaganjot-kaur-badwal-4017062a7/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/*  TECH TEAM  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Purva.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvUHVydmEucG5nIiwiaWF0IjoxNzMwODk5NjEyLCJleHAiOjE3NjI0MzU2MTJ9.8wEZG8xzADRIehO4k1PVCbNvk6TWiqxuspC7v88X2Fc&t=2024-11-06T13%3A26%3A52.832Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Purva Rana</h3>
                    <p>Technical Team Member</p>
                    <a href="https://www.linkedin.com/in/purva-rana-b231a0253/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/*  RESEARCH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/nishad.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvbmlzaGFkLmpwZyIsImlhdCI6MTczMDg5OTYyNCwiZXhwIjoxNzYyNDM1NjI0fQ.GlmUGfInbB3cMZc9qnMEyo30_289Ih-uMcZsz9DMN_Y&t=2024-11-06T13%3A27%3A04.872Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Nishad Dhodapkar</h3>
                    <p>Research Head</p>
                    <a href="https://www.linkedin.com/in/nishad-dhodapkar/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/kawas.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3Mva2F3YXMuanBlZyIsImlhdCI6MTczMDg5OTY1NCwiZXhwIjoxNzYyNDM1NjU0fQ.Wnqbgr-aq-FCzKD_JiSPB7Kq8KPtJDBs2UQSJxqwWrE&t=2024-11-06T13%3A27%3A34.947Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3> Kaustubha M</h3>
                    <p>Marketing Head</p>
                    <a href="https://www.linkedin.com/in/kawas-nandan/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Riya.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvUml5YS5qcGciLCJpYXQiOjE3MzA4OTk2NjksImV4cCI6MTc2MjQzNTY2OX0.9DCTGF2NR50Nk8B-Z9HIW3nMBZnbZzbn3RcbXfs_jp8&t=2024-11-06T13%3A27%3A50.690Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Riya Kondawar</h3>
                    <p>Social Media Head</p>
                    <a href="https://www.linkedin.com/in/riyakondawar/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Richa.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvUmljaGEuanBnIiwiaWF0IjoxNzMwODk5NjgxLCJleHAiOjE3NjI0MzU2ODF9.EAVrXAUyTlvyWXqjOnJcUyLpkKJM3zJBHnrIJ1IzT6M&t=2024-11-06T13%3A28%3A02.636Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Richa Shukla</h3>
                    <p>Event Operation Head</p>
                    <a href="https://www.linkedin.com/in/richa-shukla-026516258/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/Parth.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvUGFydGguanBnIiwiaWF0IjoxNzMwODk5NzAwLCJleHAiOjE3NjI0MzU3MDB9.Da175WwbZ6zQB-1s4pNztkYXeMXEDFWwiBrf7JoGofg&t=2024-11-06T13%3A28%3A21.678Z" alt="Team Member 6" />
                  <div className={styles.cardContent}>
                    <h3>Parth Ware</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/parth-ware-48993324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/dhyey.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3MvZGh5ZXkuanBnIiwiaWF0IjoxNzMwODk5NzEzLCJleHAiOjE3NjI0MzU3MTN9.y67XhTlFiIxKGkRumzB-1-qr169HfWsFJELhftDJxHY&t=2024-11-06T13%3A28%3A34.645Z" alt="Team Member 7" />
                  <div className={styles.cardContent}>
                    <h3>Dhyey Ladani</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/dhyey-ladani/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Photos/sarthak.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9QaG90b3Mvc2FydGhhay5qcGVnIiwiaWF0IjoxNzMwODk5NzMyLCJleHAiOjE3NjI0MzU3MzJ9.hjLFTPbgqi12Bm6gayMZGe9ldHYnwnI6cO9JBBXUHkY&t=2024-11-06T13%3A28%3A53.677Z" alt="Team Member 8" />
                  <div className={styles.cardContent}>
                    <h3>Sarthak Patil</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/sarthak-patil-aa453a219/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default About;
