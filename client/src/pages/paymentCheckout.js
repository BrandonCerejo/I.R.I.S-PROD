import React from 'react';
import { useLocation } from 'react-router-dom';
import './paymentCheckout.css';

const CheckoutPayment = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    let amount = 250; // Amount in INR
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return false; // Payment failed due to SDK not loading
    }

    return new Promise((resolve, reject) => {
      const options = {
        key: "rzp_test_DEvIsmgNnBeEH2", // API key from Razorpay dashboard
        amount: parseInt(amount * 100), // Amount in paise
        currency: "INR", // Currency code
        name: "I.R.I.S. MIT WPU", // Project or transaction name
        description: "Hackathon Registration Fee",
        image: "https://avatars.githubusercontent.com/u/160888318?v=4", // Logo
        handler: function (response) {
          if (response.razorpay_payment_id) {
            alert('Payment successful!');
          } else {
            alert('Payment failed.');
          }
        },
        prefill: {
          name: formData?.leader_name || "",
          email: formData?.leader_email || "",
        },
        notes: {
          address: "India",
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', (response) => {
        alert('Payment failed.');
      });
      paymentObject.open();
    });
  };

  return (
    <div className="checkoutPayment">
      <div className="invoiceCard">
        <h1>Invoice</h1>
        <div className="invoiceDetails">
          <p><strong>Event Registration Fee:</strong> INR 250</p>
          <p><strong>Taxes:</strong> Included</p>
          <p><strong>Total Amount:</strong> INR 250</p>
        </div>
        <button
          onClick={pay}
          className="payButton"
        >
          Pay Now
        </button>
        <div className="rpImage">
          <img src="/rp.png" alt="Razorpay" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
