import React from 'react';
import './terms.css';

function Terms() {
  return (
    <div className="terms">
      <main>
        <div className='terms-container'>
          <h1>Terms and Conditions</h1>
          <h3>By using our website and services, you agree to these terms and conditions. Please review them carefully.</h3>
          
          <div className='cards-container'>
            <div className="policy-card">
              <h2>Eligibility</h2>
              <p>To use our services, you must be at least 16 years old or have parental consent if under 16.</p>
            </div>

            <div className="policy-card">
              <h2>Code of Conduct</h2>
              <p>Users must adhere to our Code of Conduct, including respectful behavior, compliance with website rules, and avoiding harassment.</p>
            </div>

            <div className="policy-card">
              <h2>Use of Our Website</h2>
              <p>Our website is to be used for lawful purposes only. You agree not to misuse it in any way that could harm others.</p>
            </div>

            <div className="policy-card">
              <h2>Intellectual Property</h2>
              <p>All content on our website is owned by us or our licensors. You may not copy or distribute our content without permission. Any intellectual property you create remains yours, with I.R.I.S. retaining a non-exclusive license to use it for promotional purposes.</p>
            </div>

            <div className="policy-card">
              <h2>Liability</h2>
              <p>We are not liable for any damages arising from your use of our website or services. This includes any issues arising from third-party services like Razorpay.</p>
            </div>

            <div className="policy-card">
              <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. Please review our Privacy Policy to understand our data practices with Razorpay.</p>
            </div>

            <div className="policy-card">
              <h2>Changes to Terms</h2>
              <p>We may update these Terms and Conditions at any time. Continued use of our services constitutes acceptance of any new terms.</p>
            </div>

            <div className="policy-card">
              <h2>Governing Law</h2>
              <p>These Terms and Conditions are governed by Indian law. Disputes will be resolved in Indian courts.</p>
            </div>

            <div className="policy-card">
              <h2>Contact Us</h2>
              <p>For questions about these terms, reach us at iris@mitwpu.edu.in.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Terms;
