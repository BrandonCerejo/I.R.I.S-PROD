import React, { useState } from 'react';
import { supabase } from '../supabase'; // Import the Supabase client
import './event2.css'; // Make sure this file includes necessary styles
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCodeImage from './QRCode.jpeg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Event2 = () => {
  const [formData, setFormData] = useState({
    college_name: '',
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
    upi_transaction_id: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPrnFields, setShowPrnFields] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    // Check if PRN fields should be shown based on selected college
    if (name === 'college_name') {
      setShowPrnFields(value === 'MIT ADT' || value === 'MIT WPU');
    }
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/;
    const prnRegex = /^\d{10}$/;
    const upiRegex = /^\d{12}$/;

    // Basic required fields
    const requiredFields = [
      'college_name', 'team_name', 'leader_name', 'leader_phone', 'leader_email',
      'leader_branch', 'member2_name', 'member2_phone', 'member2_email',
      'member2_branch', 'member3_name', 'member3_phone', 'member3_email',
      'member3_branch', 'member4_name', 'member4_phone', 'member4_email',
      'member4_branch', 'upi_transaction_id'
    ];

    requiredFields.forEach((key) => {
      if (formData[key].trim() === '' && !key.includes('prn')) {
        newErrors[key] = 'This field is required';
      }
    });

    // Additional validation for college name if needed
    if (!formData.college_name) {
      newErrors.college_name = 'Please select a college';
    }

    if (showPrnFields) {
      // Validate PRN fields only if PRN fields are visible
      ['leader_prn', 'member2_prn', 'member3_prn', 'member4_prn'].forEach((key) => {
        if (!prnRegex.test(formData[key])) {
          newErrors[key] = 'Enter valid PRN';
        }
      });
    }

    ['leader_phone', 'member2_phone', 'member3_phone', 'member4_phone'].forEach((key) => {
      if (!phoneRegex.test(formData[key])) {
        newErrors[key] = 'Enter valid 10 digits number';
      }
    });

    if (!upiRegex.test(formData.upi_transaction_id)) {
      newErrors.upi_transaction_id = 'Enter valid UPI Transaction ID';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector(`input[name="${Object.keys(newErrors)[0]}"], select[name="${Object.keys(newErrors)[0]}"]`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      // Insert form data into Supabase
      const { data, error } = await supabase
        .from('event2_registrations') // Ensure this matches your Supabase table name
        .insert([{ ...formData, created_at: new Date().toISOString() }]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Registration successful:', data);
        setShowModal(true);
        setFormData({
          college_name: '',
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
          upi_transaction_id: ''
        });
        setErrors({});
        setShowPrnFields(false); // Reset PRN fields visibility
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const redirectToHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="event2">
      <header>
        {/* Include Header component here */}
      </header>
      <main>
        <h1 className="title">Upcoming Event: September Hackathon</h1>
        <p>This is a short description of the event.</p>
        <img src="/hackathon.png" alt="Event 2 Image" />
        <div className="checkout-box">
          <h2 className="title2">Registration Fee: INR 250</h2>
          <form onSubmit={handleSubmit}>
            <h3>College Name:</h3>
            {errors.college_name && <div className="error-text">{errors.college_name}</div>}
            <select
              name="college_name"
              value={formData.college_name}
              onChange={handleChange}
              placeholder="Select College"
            >
              <option value="" disabled>Select College</option>
              <option value="BVP">BVP</option>
              <option value="COEP">COEP</option>
              <option value="Cummins">Cummins</option>
              <option value="DY Patil">DY Patil</option>
              <option value="I2IT Pune">I2IT Pune</option>
              <option value="IIIT Pune">IIIT Pune</option>
              <option value="MIT ADT">MIT ADT</option>
              <option value="MIT WPU">MIT WPU</option>
              <option value="PCCOE">PCCOE</option>
              <option value="PICT">PICT</option>
              <option value="Sinhgad College">Sinhgad College</option>
              <option value="Symbiosis">Symbiosis</option>
              <option value="VIT Pune">VIT Pune</option>
            </select>

            <h3>Team Information:</h3>
            {errors.team_name && <div className="error-text">{errors.team_name}</div>}
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Team Name"
            />

            <h3>Leader:</h3>
            {errors.leader_name && <div className="error-text">{errors.leader_name}</div>}
            <input
              type="text"
              name="leader_name"
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="Leader Name"
            />
            {errors.leader_phone && <div className="error-text">{errors.leader_phone}</div>}
            <input
              type="tel"
              name="leader_phone"
              value={formData.leader_phone}
              onChange={handleChange}
              placeholder="Leader Phone Number"
            />
            {errors.leader_email && <div className="error-text">{errors.leader_email}</div>}
            <input
              type="email"
              name="leader_email"
              value={formData.leader_email}
              onChange={handleChange}
              placeholder="Leader Email ID"
            />
            {showPrnFields && (
              <>
                {errors.leader_prn && <div className="error-text">{errors.leader_prn}</div>}
                <input
                  type="text"
                  name="leader_prn"
                  value={formData.leader_prn}
                  onChange={handleChange}
                  placeholder="Leader PRN"
                />
              </>
            )}
            <input
              type="text"
              name="leader_branch"
              value={formData.leader_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3>Member 2:</h3>
            {errors.member2_name && <div className="error-text">{errors.member2_name}</div>}
            <input
              type="text"
              name="member2_name"
              value={formData.member2_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member2_phone && <div className="error-text">{errors.member2_phone}</div>}
            <input
              type="tel"
              name="member2_phone"
              value={formData.member2_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member2_email && <div className="error-text">{errors.member2_email}</div>}
            <input
              type="email"
              name="member2_email"
              value={formData.member2_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {showPrnFields && (
              <>
                {errors.member2_prn && <div className="error-text">{errors.member2_prn}</div>}
                <input
                  type="text"
                  name="member2_prn"
                  value={formData.member2_prn}
                  onChange={handleChange}
                  placeholder="PRN"
                />
              </>
            )}
            <input
              type="text"
              name="member2_branch"
              value={formData.member2_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3>Member 3:</h3>
            {errors.member3_name && <div className="error-text">{errors.member3_name}</div>}
            <input
              type="text"
              name="member3_name"
              value={formData.member3_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member3_phone && <div className="error-text">{errors.member3_phone}</div>}
            <input
              type="tel"
              name="member3_phone"
              value={formData.member3_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member3_email && <div className="error-text">{errors.member3_email}</div>}
            <input
              type="email"
              name="member3_email"
              value={formData.member3_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {showPrnFields && (
              <>
                {errors.member3_prn && <div className="error-text">{errors.member3_prn}</div>}
                <input
                  type="text"
                  name="member3_prn"
                  value={formData.member3_prn}
                  onChange={handleChange}
                  placeholder="PRN"
                />
              </>
            )}
            <input
              type="text"
              name="member3_branch"
              value={formData.member3_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3>Member 4:</h3>
            {errors.member4_name && <div className="error-text">{errors.member4_name}</div>}
            <input
              type="text"
              name="member4_name"
              value={formData.member4_name}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.member4_phone && <div className="error-text">{errors.member4_phone}</div>}
            <input
              type="tel"
              name="member4_phone"
              value={formData.member4_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {errors.member4_email && <div className="error-text">{errors.member4_email}</div>}
            <input
              type="email"
              name="member4_email"
              value={formData.member4_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            {showPrnFields && (
              <>
                {errors.member4_prn && <div className="error-text">{errors.member4_prn}</div>}
                <input
                  type="text"
                  name="member4_prn"
                  value={formData.member4_prn}
                  onChange={handleChange}
                  placeholder="PRN"
                />
              </>
            )}
            <input
              type="text"
              name="member4_branch"
              value={formData.member4_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />

            <h3>UPI Transaction ID:</h3>
            <img src={QRCodeImage} alt="QR Code" className="upi-qr" />
            {errors.upi_transaction_id && <div className="error-text">{errors.upi_transaction_id}</div>}
            <input
              type="text"
              name="upi_transaction_id"
              value={formData.upi_transaction_id}
              onChange={handleChange}
              placeholder="UPI Transaction ID"
            />

            <button type="submit" className="submit-btn">Register</button>
          </form>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Registration Successful!</h2>
                <p>Your team has been successfully registered for the event. Leader will receive an email.</p>
                <button onClick={redirectToHome} className="close-btn">Go to Home</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Event2;
