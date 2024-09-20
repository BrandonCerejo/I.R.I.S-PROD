import React, { useState } from 'react';
import { supabase } from '../supabase';
import './event2.css';
import { useNavigate } from 'react-router-dom';

const Event2 = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    leader_name: '',
    leader_phone: '',
    leader_email: '',
    leader_prn: '',
    leader_branch: '',
    member2_name: '',
    member2_phone: '',
    member2_email: '',
    member2_prn: '',
    member2_branch: '',
    member3_name: '',
    member3_phone: '',
    member3_email: '',
    member3_prn: '',
    member3_branch: '',
    member4_name: '',
    member4_phone: '',
    member4_email: '',
    member4_prn: '',
    member4_branch: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/checkoutPayment', { state: { formData } });
  };

  return (
    <div className="event2">
      <main>
        <h1 className="title">Upcoming Event: INNOVATION HACKATHON</h1>
        <p>Dates: September 26-28, 2024</p>
        <div className="image-container">
          <img src="/sephackathon.jpg" alt="Event 2 Image" className="event-image" />
        </div>
        <div className="checkout-box">
          <h2 className="title2">*Registration Fee: INR 250*</h2>
          <form onSubmit={handleSubmit}>
            <h3 className="centered-header">Team Information:</h3>
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Team Name"
            />

            <h3 className="centered-header">Leader:</h3>
            <input
              type="text"
              name="leader_name"
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="Leader Name"
            />
            <input
              type="tel"
              name="leader_phone"
              value={formData.leader_phone}
              onChange={handleChange}
              placeholder="Leader Phone Number"
            />
            <input
              type="email"
              name="leader_email"
              value={formData.leader_email}
              onChange={handleChange}
              placeholder="Leader Email ID"
            />
            <input
              type="text"
              name="leader_prn"
              value={formData.leader_prn}
              onChange={handleChange}
              placeholder="Leader PRN"
            />
            <input
              type="text"
              name="leader_branch"
              value={formData.leader_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3 className="centered-header">Member 2:</h3>
            <input
              type="text"
              name="member2_name"
              value={formData.member2_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member2_phone"
              value={formData.member2_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member2_email"
              value={formData.member2_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member2_prn"
              value={formData.member2_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member2_branch"
              value={formData.member2_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3 className="centered-header">Member 3:</h3>
            <input
              type="text"
              name="member3_name"
              value={formData.member3_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member3_phone"
              value={formData.member3_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member3_email"
              value={formData.member3_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member3_prn"
              value={formData.member3_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member3_branch"
              value={formData.member3_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3 className="centered-header">Member 4:</h3>
            <input
              type="text"
              name="member4_name"
              value={formData.member4_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member4_phone"
              value={formData.member4_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member4_email"
              value={formData.member4_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member4_prn"
              value={formData.member4_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member4_branch"
              value={formData.member4_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <button type="submit" className="submit-btn">Save & Proceed to Checkout</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Event2;
