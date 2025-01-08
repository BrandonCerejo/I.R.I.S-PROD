import React from 'react';
import './KushagraSingh.css';

const skills = {
  languages: [
    { name: 'Python', logo: 'https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' }
  ],
  packages: [
    { name: 'Torch', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBCKLljP0a1I_98yD-P_2JvfYCAFHlit5Fg&s'},
    { name: 'OpenCV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/OpenCV_logo_black.svg/1200px-OpenCV_logo_black.svg.png' },
    { name: 'Pandas', logo: 'https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/pandas-logo.png' },
    { name: 'NumPy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0WMo9USP6o7gpVcLisXP0rJnZG41dsffJg&s' },
    { name: 'TensorFlow', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPBk9JOT2-C39hu2yCyFiGAPE6o2kgpvecw&s' },
    { name: 'Seaborn', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvsfXuwek_JdokX7xFPJBwxXF_5xJim-3og&s'},
    { name: 'Scikit-Learn', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi-OFOLzWln43z2Kz8YSgyN5cHsaXb0l7OA&s'},
    { name: 'Tkinter', logo: 'https://w7.pngwing.com/pngs/679/344/png-transparent-wing-ide-integrated-development-environment-python-computer-software-eric-raspberry-miscellaneous-monochrome-computer-program.png'},
    { name: 'StreamLit', logo: 'https://images.seeklogo.com/logo-png/45/2/streamlit-logo-png_seeklogo-458260.png?v=1957216667958097800'}
  ],
  electronics: [
    { name: 'Raspberry Pi', logo: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/10/raspberry_pi_logo/16166824-1-eng-GB/Raspberry_Pi_logo.jpg' },
    { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png'},
    { name: 'STM32', logo: 'https://media.licdn.com/dms/image/C4D12AQFdgJiMnrzu2g/article-cover_image-shrink_600_2000/0/1622631819905?e=2147483647&v=beta&t=vPGjeJ65p7AAWZbkT6RD8Hik6QtFgfBiUn6-sIerB-M'}
  ],
  webDevelopment: [
    { name: 'Next.js', logo: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' },
    { name: 'React', logo: 'https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png' },
    { name: 'Node.js', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiqSrQqj2siTEV3_c8yQVnRTkiwv9vPpvJw&s' },
    { name: 'Express.js', logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png' },
    { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png'},
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'},
    { name: 'JavaScript', logo: 'https://i.pinimg.com/originals/28/b0/d1/28b0d189571e22609f0e9378da7b09a4.png'},
    { name: 'Bootstrap', logo: 'https://e7.pngegg.com/pngimages/162/309/png-clipart-bootstrap-responsive-web-design-web-development-logo-django-others-miscellaneous-purple-thumbnail.png'}
  ],
  bigDataTechnology: [
    { name: 'Cloudera', logo: 'https://imageio.forbes.com/specials-images/imageserve/6732202d0f1f1f82e95d3de0/0x0.png?format=png&crop=375,375,x0,y0,safe&width=300' },
    { name: 'HDFS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLPrKtALpP2XA52JD9onMxQBZ05sIyatTIg&s' },
    { name: 'Apache Pig', logo: 'https://images.javatpoint.com/hadooppages/pig/images/apache-pig.png' },
    { name: 'Hive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Apache_Hive_logo.svg/1200px-Apache_Hive_logo.svg.png' },
    { name: 'HBase', logo: 'https://download.logo.wine/logo/Apache_HBase/Apache_HBase-Logo.wine.png'},
    { name: 'Apache Spark', logo: 'https://seekvectorlogo.com/wp-content/uploads/2018/12/apache-spark-vector-logo-small.png'}
  ],
  databases: [
    { name: 'MySQL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx25AX0zo1Hxz_tPZ2Oi3GpX9-TfcClBSHLg&s' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
    { name: 'PostgreSQL', logo: 'https://images.freeimages.com/vme/images/2/8/284731/postgresql_logo_preview' }
  ],
  software: [
    { name: 'AutoCAD', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iDZ14NlHB55_yQ2Hb0z-HR5z9uNpLEoHHw&s' },
    { name: 'TinkerCAD', logo: 'https://aeg.alpineschools.org/wp-content/uploads/sites/45/2023/08/Tinkercad.png' }
  ]
};

const projects = [
  {
    title: 'Tarzan [Ongoing]',
    points: [
      'Developing an autonomous vehicle portable module for non-ADAS enabled cars.',
      'Uses an app to input images and run custom deep learning models (YOLOv8) to make decisions for car steering angle, acceleration, and braking values.',
      'Takes surroundings like other cars, potholes, barricades, etc., to make its decisions.'
    ],
    link: 'https://github.com/kushagra-a-singh/Tarzan-I.R.I.S.',
    image: 'https://github.com/TakshDhabalia/TarzanIRIS/raw/main/Simulation_Results/Simulation_ongoing.jpg'
  },
  {
    title: 'IRIS Website',
    points: [
      'Developed an official website for the club to provide a centralized platform to share IRIS updates, event details, recruitments and resources.',
      'Handling multiple concurrent real-time payments and updating entries for events.',
      'Features include event registrations with a payment gateway, dynamic blogging with a voting system and comment section, club project highlights, recruitment and contact forms.',
      'Utilized Razorpay SDK, Supabase Database, and continuous deployment on Vercel with GitHub CI/CD integration.'
    ],
    link: 'https://github.com/IRIS-MITWPU/I.R.I.S-Prod-Website',
    image: '/website_img.png'
  },
  {
    title: 'ForVis- Formula 1 Analytics',
    points: [
      'Developed a dynamic GUI using PyQt5 to visualize Formula 1 race telemetry with real-time and historical data analysis.',
      'Integrated FastF1 APIs and stored telemetry in HDFS, achieving a 30% reduction in processing time using Apache Spark.',
      'Implemented Random Forest Classification and Linear Regression models for pit stop predictions and race strategy optimization with an 86% accuracy rate.',
      'Enabled multi-driver comparison, lap time analysis & tyre strategy insights via interactive dashboards.',
      'Currently trying to integrate a Kafka-based pipeline to handle real-time telemetry and analytics.'
    ],
    link: 'https://github.com/kushagra-a-singh/ForVis',
    image: '/KushagraProj1.png'
  },
  {
    title: 'Driver Safety Monitoring System',
    points: [
      'Integrated MQ3 alcohol sensor, accelerometer/gyroscope, GPS module, LED screen, GSM module and buzzer into a vehicle’s onboard system using C++ and Arduino.',
      'Developed a comprehensive system to monitor driver behavior, detect alcohol presence, and deliver real-time alerts to promote safe driving practices.',
      'Enabled timely feedback for enhanced driver safety, utilizing sensors for real-time monitoring and instant notifications.'
    ],
    link: 'https://github.com/kushagra-a-singh/Embedded-Arduino-System-for-Car-Road-Safety',
    image: '/KushagraProj2.jpg'
  },
];

const experiences = [
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Z4YVYbM6SAVHtlkuUqaFnyVFoQG54p-7A&s',
    company: 'Infosys Springboard',
    role: 'ML Project Intern',
    location: 'Remote',
    date: 'Oct 2024 - Nov 2024',
    description: [
      'Designed and implemented a handwritten digit recognition application using neural networks (MLP, CNN, LeNet5) for MNIST dataset classification.',
      'Developed custom PyTorch models with dropout, activation functions, and convolutional layers for efficient feature extraction and classification.',
      'Built an interactive web application using Streamlit to predict digits from uploaded images,     with support for model selection and real-time predictions. Achieved 90.04%, 98.93% & 98.95% accuracies respectively for each model on the test dataset.',
      'Utilized image preprocessing (grayscale conversion, normalization, resizing) and dataset augmentation for robust model performance.',
      'Created a digit visualization tool to save and display images from the MNIST dataset using Matplotlib.',
      'Deployed models with pre-trained weights and integrated custom UI design for a seamless user experience during prediction.',
    ],
  },
  {
    logo: 'https://www.iris-club.in/logo.png',
    company: 'IRIS',
    role: 'Technical Head',
    location: 'Pune',
    date: 'Aug 2024- Present',
    description: [
      'Spearheaded the development of the official I.R.I.S. club website, taking the lead in designing, coding, and deploying it for live hackathon event registrations for 200+ people, integrated with Razorpay payment gateway to enable seamless fee collection.',
      'Currently leading and managing the tech team to oversee website updates, changes, & new feature implementations. Provide mentorship and technical guidance while also directly contributing to challenging tasks, such as backend development for the blogging system, voting system authentication, & comment section functionality.',
      'Collaborate with faculty and peers to identify and initiate new tech-based projects, fostering innovation within the club.',
      'Led the website’s successful deployment during live events, ensuring smooth operation and scalability for real-time registrations and payments.',
      'Also developing an autonomous vehicle module for non-ADAS cars using YOLOv8 deep learning models and sensor-based simulations for decision-making and steering control',
    ],
  },
];

const roles = [
  {
    image: 'https://www.iris-club.in/logo.png',
    role: 'IRIS [Student Club, MIT-WPU]- Technical Head',
    date: 'Aug 2024- Present',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Z4YVYbM6SAVHtlkuUqaFnyVFoQG54p-7A&s',
    role: 'Infosys Springboard [Remote]- ML Intern',
    date: 'Oct 2024- Nov 2024',
  },
];

const achievements = [
  'Smart India Hackathon (SIH) 2024- Top 25 Finalist : Collaborated with a multidisciplinary team to qualify as one of the top 25 teams in the internal round of SIH 2024. Designed and developed PlantWise, an AI-powered Ayurvedic health companion for disease prediction and natural remedies.',
  'HackMITWPU’24 Ideathon- Finalist : Proposed DermDetect, an AI-powered tool for preliminary dermatological diagnosis using image processing for remote consultations and personalized skincare solutions for underserved regions, enhancing early detection and skin condition management.',
];

function KushagraSingh() {
  return (
    <div>
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
            src="/Kushagra.jpeg"
            className="hero-image"
          />
          <div className="hero-text">
            <h2>Hi, I'm Kushagra Singh</h2>
            <p>A third year student at MIT WPU, Pune. I have worked as an intern at IIIT-D and am the current President of the tech club IRIS. I have also been the vice-lead for innovations and electronics at Team Bolt where we have secured AIR 4 in MOTO STUDENT INDIA - superbike manufacturing and design competition. My current interests are Microcontrollers, Electronics & electrical, Distributed Systems and ML & DL in computer vision.</p>
            <div className="social-links">
              <a href="https://in.linkedin.com/in/kushagra-anit-singh" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIN" className="icon"></img>LinkedIn</a>
              <a href="https://github.com/kushagra-a-singh" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon"></img>GitHub</a>
              <a target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="gmail-icon"></img>kushagraa.n@gmail.com</a>
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
                <p className="project-title"><strong>{project.title}</strong></p>
                <ul className="project-points">
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

export default KushagraSingh;
