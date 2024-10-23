import React from 'react';
import { Link } from 'react-router-dom';

const Projects1 = () => {
  return (
    <>
      <div className={"Projectpage"}>
        
        <main className="container">
          <div className={"content"}>
            
            <h1 className={"title"}>I.R.I.S WEBSITE </h1>
           

        <div className={"Aboutwesbite"}>
            <h3> ABOUT WEBSITE </h3>
              <p> 
              The I.R.I.S. club website is a dynamic platform designed to bring together our community of innovators, learners, and leaders. Built with a modern and responsive design, the website serves as the central hub for all club activities, from showcasing events and podcasts to facilitating seamless registration for our workshops, hackathons, and seminars.
              </p>
            </div>

            <section className={"Timeline"}>
                <h3> Timeline</h3>
              <p>Day 1: Planning & Setup</p>
              <p>Days 2-7: Frontend Development </p>
              <p>Days 8-13: Backend Development</p>
              <p>Days 14-18: Final Integration </p>
              <p>Days 19-26: Deployement & Final Project </p>
             </section>

            <section className={"journey"}>
              <h3>Our Journey</h3>
              <p>Our team planned intensively in order to make sure a smooth development process for the website. Our team held multiple meetings spanned across a few weeks to finalize the plan and to research for the our website
              </p>
            </section>
            </div>
        </main>
      </div>
    </>
  );
};

export default Projects1;
