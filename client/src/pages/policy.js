import React from 'react';
import './policy.css';

function Policy() {
  return (
    <div className="policy"> 
      <main>
        <div className='policy-container'>
          <h1>Our Privacy Policy</h1>
          <h3>At I.R.I.S, we prioritize your privacy and are committed to safeguarding your personal information. This policy explains how we collect, use, and protect your data through Razorpay for payment processing.</h3>
          
          <div className='policy-content-container'>
            <div className='cards-container'>
              <div className="policy-card">
                <h2>Information We Collect</h2>
                <p>We may collect personal information such as your name, email address, contact number, and payment details to facilitate transactions through Razorpay.</p>
                <p>Payment details such as credit card numbers or bank information are collected and processed securely through Razorpay's payment gateway.</p>
                <p>We may also collect data on how you interact with our website for event registrations and other activities.</p>
              </div>

              <div className="policy-card">
                <h2>Use of Information</h2>
                <p>Your personal information is used to manage registrations, provide updates, and handle customer support. Payment details are used only for processing fees and are securely managed through Razorpay.</p>
                <p>We may use your email to send updates, notifications, or other necessary information related to our events and services.</p>
              </div>

              <div className="policy-card">
                <h2>Data Sharing</h2>
                <p>Your payment information is shared with Razorpay for secure transaction processing.</p>
                <p>We may also disclose personal information if legally required to do so.</p>
              </div>

              <div className="policy-card">
                <h2>Data Security</h2>
                <p>We take reasonable steps to protect your data. While no online transaction is completely secure, we rely on Razorpay's industry-standard security measures.</p>
              </div>

              <div className="policy-card">
                <h2>Your Rights</h2>
                <p>You may request access to, correction, or deletion of your personal data by contacting us directly.</p>
              </div>

              <div className="policy-card">
                <h2>Third-Party Services</h2>
                <p>We use Razorpay as our payment processor. Please review their privacy policy for additional details on their data handling practices.</p>
              </div>

              <div className="policy-card">
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. Any changes will be posted here.</p>
                <p>For more information, contact us at: iris@mitwpu.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Policy;
