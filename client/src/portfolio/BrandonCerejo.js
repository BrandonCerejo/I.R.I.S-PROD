import React from 'react';
import './KushagraSingh.css';

const camelCaseToWords = (text) => {
  return text.replace(/([a-z])([A-Z])/g, '$1 $2'); // Adds space between camelCase
};

const skills = {
  languages: [
    { name: 'Python', logo: 'https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' }
  ],
  packages: [
    { name: 'OpenCV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/OpenCV_logo_black.svg/1200px-OpenCV_logo_black.svg.png' },
    { name: 'Pandas', logo: 'https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/pandas-logo.png' },
    { name: 'NumPy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0WMo9USP6o7gpVcLisXP0rJnZG41dsffJg&s' },
    { name: 'TensorFlow', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPBk9JOT2-C39hu2yCyFiGAPE6o2kgpvecw&s' },
    { name: 'Seaborn', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvsfXuwek_JdokX7xFPJBwxXF_5xJim-3og&s'},
    { name: 'Scikit-Learn', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi-OFOLzWln43z2Kz8YSgyN5cHsaXb0l7OA&s'},
    { name: 'Tkinter', logo: 'https://w7.pngwing.com/pngs/679/344/png-transparent-wing-ide-integrated-development-environment-python-computer-software-eric-raspberry-miscellaneous-monochrome-computer-program.png'}
  ],
  electronics: [
    { name: 'Raspberry Pi', logo: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/10/raspberry_pi_logo/16166824-1-eng-GB/Raspberry_Pi_logo.jpg' },
    { name: 'Arduino', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png'},
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
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' }
  ],
  visualizationTools: [
    { name: 'Tableau', logo: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png' },
    { name: 'PowerBI', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hzOS5W2J2PjB4JssJDrmx1b7xFn0yt0uCw&s' }
  ]
};

const projects = [
  {
    title: 'ForVis - Formula 1 Analytics',
    points: [
      'Tools used: Apache Spark, HDFS, Machine Learning Models, Scikit-Learn, PyQt5, Dash',
      'Developed a dynamic GUI using PyQt5 to visualize Formula 1 race telemetry with real-time and historical data analysis.',
      'Multi-driver comparison, lap time analysis & tire strategy insights via interactive dashboards.',
      'Integrated FastF1 APIs and stored telemetry in HDFS, achieving a 30% reduction in processing time using Apache Spark.',
      'Implemented Random Forest Classification and Linear Regression models for pit stop predictions and optimization of race strategy with an accuracy rate of 86%.',
      'Currently, a Kafka-based pipeline is being tested to handle real-time telemetry and analytics.'
    ],
    link: 'https://github.com/BrandonCerejo/ForVis-Formula1-Data-Visualization-and-ML-Models',
    image: '/KushagraProj1.png'
  },
  {
    title: 'IRIS Website',
    points: [
      'Tools used: MERN Stack, Handling payments, database real-time CRUD, APIs',
      'Developed an official website for the club to provide a centralized platform to share IRIS updates, event details, recruitments and resources.',
      'Handling multiple concurrent real-time payments and updating entries for events.',
      'Features include event registrations with a payment gateway, dynamic blogging with a voting system and comment section, club project highlights, recruitment and contact forms.',
      'Utilized Razorpay SDK, Supabase Database, and continuous deployment on Vercel with GitHub CI/CD integration.'
    ],
    link: 'https://github.com/BrandonCerejo/I.R.I.S-PROD',
    image: '/website_img.png'
  },
  {
    title: 'Magic Board- Mathematical Equation Recognition and Calculation',
    points: [
      'Tools used: OCR, ML Models, SciPy, Sympy, Scikit-Learn, MatPlotLib',
      'Developed a Convolutional Neural Network (CNN) model to accurately detect handwritten numbers and basic mathematical operators, trained on a dataset of over 10,000 images.',
      'Achieved 98% recognition accuracy for handwritten mathematical equations.',
      'Utilized SciPy to compute the solutions for the recognized mathematical equations, enabling real-time calculations.',
      'Integrated Matplotlib to visualize the equations as graphs.'
    ],
    link: 'https://github.com/BrandonCerejo/Magic-board/tree/third',
    image: '/BrandonProj1.jpg'
  },
  {
    title: 'Driver Drowsiness Detection and Alert System',
    points: [
      'Tools Used: Python, DLib, Raspberry PI',
      'Developed a real-time driver drowsiness detection system using the Dlib library, integrated with a Raspberry Pi and a connected camera.',
      'Implemented facial landmark detection using Haar cascades and Dlib’s pre-trained model to monitor eye aspect ratio (EAR) for prolonged eye closure and lip distance for yawning detection.',
      'Achieved over 95% accuracy in detecting drowsiness using advanced facial landmark detection algorithms.',
      'Implemented real-time alerts for drowsiness through audio signals and notifications to enhance driver safety.'
    ],
    link: 'https://github.com/BrandonCerejo/Driver-Drowsiness-Detection-And-Alert-System',
    image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/118354029/400884528-76c6207b-4132-4dbc-8268-b5dc2b0e67e1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250109T225246Z&X-Amz-Expires=300&X-Amz-Signature=d3dd0a09317508d75479757bf319227a1f6714a127b648c185c586313c969162&X-Amz-SignedHeaders=host'
  },
];

const experiences = [
  {
    logo: 'https://www.iris-club.in/logo.png',
    company: 'IRIS',
    role: 'Treasurer and Tech team member',
    location: 'Pune',
    date: 'Aug 2024 - Present',
    description: [
      'Successfully managing the financial operations of the I.R.I.S. club, overseeing budgeting, expense tracking, and fund allocation to ensure smooth execution of club activities and events.',
      'Coordinating with higher college authorities to get event budgets approved, presenting comprehensive financial plans and justifications for fund utilization.',
      'Collaborating with the technical and non-technical teams to ensure efficient resource allocation, facilitating seamless event organization and execution.',
      'Actively engaging with the leadership team to identify new opportunities for club growth and innovation, ensuring financial feasibility and strategic alignment.',
      'Worked with a team to develop a website for the club. My main role was focusing on the frontend aspects to ensure an intuitive and user-friendly design.'
    ],
  },
];

const roles = [
  {
    image: 'https://www.iris-club.in/logo.png',
    role: 'IRIS [Student Club, MIT-WPU] - Treasurer',
    date: 'Aug 2024 - Present',
  },
  {
    image: 'https://www.iris-club.in/logo.png',
    role: 'IRIS [Student Club, MIT-WPU] - Tech Team Member',
    date: 'Jan 2024 - Current',
  },
];

const achievements = [
  'Hands-on approach to AI for Real-World Applications- Organized by IIT Kharagpur AI4ICPS I HUB Foundation and TCS iON. Completed on: December 6th 2023',
  'Data Sciecnce and Machine Learning Bootcamp with R- Udemy. Completed on: December 2024',
];

function BrandonCerejo() {
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
            src="https://media.licdn.com/dms/image/v2/D4D03AQHwI2FGamvHXw/profile-displayphoto-shrink_800_800/B4DZQ_NM7FHUAc-/0/1736227216483?e=1741824000&v=beta&t=kGszUfwD9GLHuiSzpKyNScjfFf20Wfn58-cCR2xStho"
            className="hero-image"
          />
          <div className="hero-text">
            <h2>Hi, I'm Brandon Cerejo</h2>
            <p>I am a third-year Computer Science Engineering student at MIT-WPU, Pune, with practical experience in Machine Learning, Data Science, Iot, and Web Development. Currently, I serve as the Treasurer of IRIS, a student club at MIT-WPU, where I also contribute as a member of the development team for the IRIS website. I am highly motivated by challenges, eager to learn and developing practical, user-friendly solutions</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/brandon-cerejo-921275247/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIN" className="icon"></img>LinkedIn</a>
              <a href="https://github.com/BrandonCerejo" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon"></img>GitHub</a>
              <a target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="gmail-icon"></img>brandoncerejo39@gmail.com</a>
            </div>
            <div className="section-links">
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#roles-achievements">Roles & Certifications</a>
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
              <h3>{camelCaseToWords(category.charAt(0).toUpperCase()) + camelCaseToWords(category.slice(1))}</h3>
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
      <h2>Roles and Certifications</h2>
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
          <h3>Certifications</h3>
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

export default BrandonCerejo;
