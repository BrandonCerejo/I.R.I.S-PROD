import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects1.module.css';
const Projects1 = () => {
  return (
    <>
      <div className={styles.Projectpage}>
        
        <main className="container">
          <div className={styles.content}>
            
            <h1 className={styles.title}>I.R.I.S CLUB WEBSITE </h1>
           

        <div className={styles.aboutwebsite}>
            <h3> ABOUT OUR WEBSITE </h3>
              <p> 
              The I.R.I.S. club website is a dynamic platform designed to unite our community of innovators, learners, and leaders. Acting as a central hub, it provides essential information about events, announcements, and achievements while facilitating communication with members, alumni, and external partners. The site not only showcases our events and podcast episodes but also serves as a vital resource for attracting new members and enhancing our visibility on campus.
             </p>
             <p>
             This website consolidates all details about I.R.I.S. for sponsors, partners, teachers, and participants in our workshops and hackathons. It highlights our collective work, including research, projects, and past events, fostering collaboration and engagement. By promoting events and offering seamless registration, the I.R.I.S. website boosts participation and streamlines operations, while connecting members with external groups. Ultimately, it supports our community by providing information and opportunities for involvement in various activities, such as hackathons, seminars, and podcasts.
             </p>
            </div>

            <section className={styles.websitefeatures}>
              <h3>Wesbite Features</h3>
              <ol>
                <li>Event Management: Displays upcoming and past events with registration options. </li>
                <li>Podcasts: Showcases podcasts related to events and industry trends. </li>
                <li>Payment Integration: Razorpay gateway for smooth event registrations.</li>
                <li>Responsive Design: Mobile-friendly with Bootstrap-based layout.</li>
                <li>Dynamic Content: Regular updates to reflect the latest activities and members.</li>
              </ol>
              
            </section>

            <section className={styles.webtechnologies}>
              <h3>Plan and Research</h3>
              <p>Our team planned intensively in order to make sure a smooth development process for the website. Our team held multiple meetings spanned across a few weeks to finalize the plan and to research
              </p>
              <h3> Development</h3>
                <ol>
                <li>React JS: React JS is the library on which I.R.I.S’s website is made. </li>
                <li>Bootstrap Bootstrap is a very popular CSS framework that we used to make I.R.I.S Website more responsive in multiple types of screens and displays.</li>
                <li>Razorpay:Razorpay is a payment gateway API which is used to handle online payments for the hackathon and our future ventures and events. </li>
                <li>Github:</li>
                <li>Supabase SQL:Github is an industry standard service used for version controlling and collaboration. Our team used github throughout the production phase to collaborate with everyone</li>
                </ol>
                <h3>Built & Test</h3>
                <p>
                During our building & testing phase, we used Vercel extensively to check for bugs and to increase security in our code.
                </p>
                <h3>Deployement</h3>
                <p> 
                We have used Vercel to deploy both our front and back end because of their reputation of being secure and their seamless integration with github.

                </p>
            </section>
            </div>
        </main>
      </div>
    </>
  );
};

export default Projects1;
