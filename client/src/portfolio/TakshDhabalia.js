import React from 'react';
import './TakshDhabalia.css'; // Add a CSS file for styling

const skills = {
  languages: [
    { name: 'Python', logo: 'https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' }
  ],
  packages: [
    { name: 'Music21', logo: 'https://avatars.githubusercontent.com/u/29660943?v=4' },
    { name: 'OpenCV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/OpenCV_logo_black.svg/1200px-OpenCV_logo_black.svg.png' },
    { name: 'Pandas', logo: 'https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/pandas-logo.png' },
    { name: 'NumPy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0WMo9USP6o7gpVcLisXP0rJnZG41dsffJg&s' },
    { name: 'TensorFlow', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPBk9JOT2-C39hu2yCyFiGAPE6o2kgpvecw&s' },
    { name: 'PyGame', logo: 'https://miro.medium.com/v2/resize:fit:640/0*nr8xfIriulC1eIkW.png' }
  ],
  electronics: [
    { name: 'Raspberry Pi', logo: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/10/raspberry_pi_logo/16166824-1-eng-GB/Raspberry_Pi_logo.jpg' },
    { name: 'STM32', logo: 'https://media.licdn.com/dms/image/C4D12AQFdgJiMnrzu2g/article-cover_image-shrink_600_2000/0/1622631819905?e=2147483647&v=beta&t=vPGjeJ65p7AAWZbkT6RD8Hik6QtFgfBiUn6-sIerB-M' },
    { name: 'Node-RED', logo: 'https://nodered.org/about/resources/media/node-red-icon-2.png' },
    { name: 'ESP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y7rnv3rFIgxF28eohT_axZ2DUiM9LjLxng&s' },
    { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png' }
  ],
  protocols: [
    { name: 'MQTT', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UMBosVW7K30mwZqv2U1PuHwWex7hoJzbaQ&s' },
    { name: 'LoRaWAN', logo: 'https://www.weble.ch/wp-content/uploads/2019/12/lw.png' },
    { name: 'ESP-Now', logo: 'https://store.kidbright.info/upload/cover-image/1565963104-nLyoHV.png' },
    { name: 'Cellular', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4MsOTIDyF8cpnOvf5ExA-wG24IJKlaUbng&s' },
    { name: 'NB-IoT', logo: 'https://toppng.com/uploads/preview/arrow-band-narrow-band-iot-logo-11562989975rlvbscfbtc.png' }
  ]
};

const projects = [
  {
    title: 'Tarzan',
    points: [
      'Developing an autonomous vehicle portable module for non-ADAS enabled cars.',
      'Uses an app to input images and run custom deep learning models (YOLOv8) to make decisions for car steering angle, acceleration, and braking values.',
      'Takes surroundings like other cars, potholes, barricades, etc., to make its decisions.',
      'Worked on making simulations using MATLAB with pure-pursuit modeling.'
    ],
    link: 'https://github.com/TakshDhabalia/TarzanIRIS', // Add the correct GitHub link
    image: 'https://github.com/TakshDhabalia/TarzanIRIS/raw/main/Simulation_Results/Simulation_ongoing.jpg' // Add the correct image URL
  },
  {
    title: 'IRIS Website',
    points: [
      'Developed an official site for the club, handling multiple concurrent real-time payments and updating entries for events.',
      'Utilized Razorpay, Supabase Database, and Vercel for deployment.'
    ],
    link: 'https://github.com/IRIS-MITWPU/I.R.I.S-Prod-Website', // Add the correct GitHub link
    image: '/website_img.png' // Add the correct image URL
  },
  {
    title: 'Real-Time Parking Management System',
    points: [
      'Developed a system that takes in a live video feed and allocates parking based on availability.',
      'Uses OpenCV and Threading with YOLOv8 for real-time allocation, speeding up the process by 40%.',
      'Implemented using CCTV cameras and Raspberry Pi.'
    ],
    link: 'https://github.com/TakshDhabalia/Driving_Optimization', // Add the correct GitHub link
    image: '/TakshProj1.jpg' // Add the correct image URL
  },
  {
    title: 'Doom on Web',
    points: [
      'Achieved a 30% performance improvement in FPS and a 10% improvement on web platforms by implementing core algorithms natively.',
      'Leverages Ray-Casting for its core engine algorithm and uses BFS and DFS for NPC algorithms.',
      'Developing multiplayer and squad-up features (WIP).'
    ],
    link: 'https://github.com/TakshDhabalia/Doom', // Add the correct GitHub link
    image: '/TakshProj2.jpg' // Add the correct image URL
  },
  {
    title: 'Music_Gen',
    points: [
      'Produced music from input using LSTMs in real-time.',
      'Utilized open-source KERN datasets for German songs to generate unique melodies based on the input provided, giving continuations of them as a result.'
    ],
    link: 'https://github.com/TakshDhabalia/Research-and-MusicGeneration', // Add the correct GitHub link
    image: 'https://via.placeholder.com/300?text=Music_Gen' // Add the correct image URL
  }
];

const experiences = [
  {
    logo: 'https://th.bing.com/th/id/R.6b6427406233274233e6654f503091a2?rik=V0yJ08JCJrC2DQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-S22Wb-TC5A0%2fUcvDWp02pGI%2fAAAAAAAAAF4%2fcMfVyM-_WuA%2fs1600%2flogo.jpg&ehk=AJTTfx0QjbYuNLU3FaKEth969092fkDmSRdYAQBnpi4%3d&risl=&pid=ImgRaw&r=0',
    company: 'IIIT-Delhi',
    role: 'System Design and Embedded Software Developer Intern',
    location: 'Delhi',
    date: 'Jan - Aug 2024',
    description: [
      'Designed and implemented a water management system with an app and cloud integration.',
      'Developed the overall hardware and cloud architecture, deployed on STM32 micro controllers.',
      'Developed the entire app for the project written in Dart using the Flutter framework. Used Firebase for the backend.',
      'Demonstrated skills in micro-controller architecture, low-level embedded systems programming, system design and architecture, PCB designing, and Flutter development.',
    ],
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQG6wb9iYfvhSg/company-logo_200_200/company-logo_200_200/0/1695361560497/teamboltmitwpu_logo?e=1743638400&v=beta&t=IGM2RVZ2VNOIDQ97XkBe5xflNauz-mjGpSNV-e0H0MY',
    company: 'Team Bolt',
    role: 'Vice Lead, Electronics',
    location: 'Pune',
    date: 'June 2023 - Jan 2024',
    description: [
      'Secured All India Rank 4 in FMAE Moto Student India - Electric Superbike Building Competition and overall rank 2 in cost report and endurance test.',
      'Led the innovations and electronics department, developing 4 new innovations including GPS tracking and SOS impact sensors.',
      'Contributed to wiring and circuitry for GLVS and HVS systems.',
    ],
  },
];

const roles = [
  {
    image: 'https://www.iris-club.in/logo.png',
    role: 'IRIS [Student Club, MIT-WPU] - President',
    date: 'June 2024-Current',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E0BAQG6wb9iYfvhSg/company-logo_200_200/company-logo_200_200/0/1695361560497/teamboltmitwpu_logo?e=1743638400&v=beta&t=IGM2RVZ2VNOIDQ97XkBe5xflNauz-mjGpSNV-e0H0MY',
    role: 'Team Bolt [Student Club, MIT-WPU] - Vice-Lead for Innovations and Electronics',
    date: '2022-2024',
  },
];

const achievements = [
  'All India Rank 4 in FMAE Moto Student India.',
  'Rank 2 in Cost report and Endurance test in FMAE Moto Student India',
];

function TakshDhabalia() {
  return (
    <div>
      {/* Background Video */}
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Videos/vid2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9WaWRlb3MvdmlkMi5tcDQiLCJpYXQiOjE3MzA5MDA1MDcsImV4cCI6MTc2MjQzNjUwN30.qMfRi7Uxvtpz4rRnaN6bTSQzEE_AtxrRQMBp2qR5YEI&t=2024-11-06T13%3A41%3A48.487Z"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="https://avatars.githubusercontent.com/u/77263611?v=4?s=400"
            alt="Taksh Dhabalia"
            className="hero-image"
          />
          <div className="hero-text">
            <h2>Hi, I'm Taksh Dhabalia</h2>
            <p>I'm a passionate web developer with experience in creating dynamic and responsive websites. I love to learn new technologies and solve real-world problems.</p>
            <div className="social-links">
              <a href="https://in.linkedin.com/in/taksh-dhabalia-2b6969202" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIN" class="icon"></img>LinkedIn</a>
              <a href="https://github.com/TakshDhabalia" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="icon"></img>GitHub</a>
              <a target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail" class="gmail-icon"></img>taksh.dhabalia@gmail.com</a>
            </div>
            <div className="section-links">
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#roles-achievements">Roles & Achievements</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
              <div className="experience-details">
                <div className="experience-header">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <div className="experience-subheader">
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <ul>
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <p><strong>{project.title}</strong></p>
                <ul>
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {Object.keys(skills).map((category) => (
            <div className="skills-category" key={category}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {skills[category].map((skill) => (
                  <div className="skill-box" key={skill.name}>
                    <img src={skill.logo} alt={`${skill.name} Logo`} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>

    <section id="roles-achievements">
      <h2>Roles and Achievements</h2>
      <div className="roles-achievements-container">
        {/* Roles Box */}
        <div className="roles-box">
          <h3>Roles</h3>
          <div className="roles-list">
            {roles.map((roleData, index) => (
              <div className="role-item" key={index}>
                <div className="role-left">
                <img
                    src={roleData.image}
                    alt={`${roleData.role} logo`}
                    className="role-image"
                  />
                  <p>{roleData.role}</p>
                </div>
                <div className="role-right">
                  <span className="role-date">{roleData.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Box */}
        <div className="achievements-box">
          <h3>Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div className="achievement-item" key={index}>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default TakshDhabalia;
