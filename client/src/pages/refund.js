import React from 'react';
import './refund.css';

function Refund() {
  return (
    <div className="refund">
      <main>
        <div className='refund-container'>
          <h1>Refund Policy</h1>
          <h3>At I.R.I.S., we value your satisfaction and provide a refund policy for eligible transactions made through Razorpay.</h3>
          
          <div className='cards-container'>
            <div className="policy-card">
              <h2>Eligibility for Refunds</h2>
              <p><strong>Full Refund:</strong> You may be eligible for a refund if you cancel a registration within the stipulated period before the event or transaction date.</p>
              <p><strong>No Refunds:</strong> No refunds are issued for last-minute cancellations or failure to attend the event.</p>
            </div>

            <div className="policy-card">
              <h2>Refund Process</h2>
              <p><strong>Request Submission:</strong> To request a refund, contact us at iris@mitwpu.edu.in with transaction details.</p>
              <p><strong>Processing Time:</strong> Refunds are processed within 15-20 days, credited to the original payment method used via Razorpay.</p>
            </div>

            <div className="policy-card">
              <h2>Event Cancellation</h2>
              <p>If an event is canceled or postponed by I.R.I.S., participants are eligible for a refund or can transfer registration to a future event.</p>
            </div>

            <div className="policy-card">
              <h2>Non-Refundable Fees</h2>
              <p>Transaction processing fees from Razorpay are non-refundable unless the event is canceled by I.R.I.S.</p>
            </div>

            <div className="policy-card">
              <h2>Changes to This Policy</h2>
              <p>We may modify this refund policy as needed. Any updates will be posted on our website.</p>
            </div>

            <p className="text">For further inquiries, contact us at: iris@mitwpu.edu.in</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Refund;
