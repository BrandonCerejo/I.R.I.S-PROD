import React, { useState } from 'react';
import { supabase } from '../supabase';
import './event2.css';

import { useNavigate } from 'react-router-dom';
const Event2 = () => {

  return (
    <div className="event2">
      <main>
        <h1 className="title">INNOVATION HACKATHON 2024</h1>
        <p>Dates: September 26-28, 2024</p>
        <div className="image-container">
          <img src="/sephackathon.jpg" alt="Event 2 Image" className="event-image" />
        </div>
        <div className="transparentBox">
          <a
            href="/IRIS Hackathon GUIDELINES for participants.pdf"
            download="IRIS Hackathon GUIDELINES.pdf"
            className="downloadLink me-2"
          >
            Innovation Hackathon GUIDELINES
          </a>
          <a
            href="/IRIS-ppt-template-for-participants.pptx"
            download="InnovationHackathon_PPT_Template.pptx"
            className="downloadLink"
          >
            Innovation Hackathon PPT Template
          </a>
        </div>
        <div className="transparentBox">
            <h3 className="title">Registrations Closed</h3>
            <h3 className="title">Stay Tuned For More Updates!!</h3>
        </div>
      </main>
    </div>
  );
};

export default Event2;