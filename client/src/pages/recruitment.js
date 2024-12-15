import React, { useState } from "react";
import { supabase } from '../supabase';
import styles from "./recruitment.module.css";
import backgroundVideo from "./vid2.mp4";
import "bootstrap/dist/css/bootstrap.min.css";

function Recruitment() {
  const [formData, setFormData] = useState({
    name: "",
    prn: "",
    cgpa: "",
    reason: "",
    project: "",
    email: "",
    phone: "",
    file: null,
  });

  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePrn = (prn) => {
    const prnRegex = /^[0-9]{10}$/;
    return prnRegex.test(prn);
  };

  const validateEmail = (email) => {
    const emailRegex = /^(.*@gmail\.com|.*@mitwpu\.edu\.in)$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "file") {
      const file = e.target.files[0];
      if (file && file.size > 100 * 1024) {
        setError("File size should not exceed 100 kB");
        return;
      } else {
        setError("");
      }
      setFormData({ ...formData, file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.prn || !formData.email || !formData.phone || !formData.reason || !formData.project || !formData.file) {
      setError("Please fill in all the required fields.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    if (!validatePrn(formData.prn)) {
      setError("PRN must be exactly 10 digits.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address with @gmail.com or @mitwpu.edu.in domain.");
      return;
    }

    const filePath = `cvs/${formData.name}-${Date.now()}.pdf`;
    const { data, error: uploadError } = await supabase
      .storage
      .from('cv_bucket')
      .upload(filePath, formData.file);

    if (uploadError) {
      setError("Error uploading file: " + uploadError.message);
      return;
    }

    const fileUrl = supabase.storage.from('cv_bucket').getPublicUrl(data.path).publicURL;

    const { error: insertError } = await supabase
      .from('recruitment_forms')
      .insert([
        {
          name: formData.name,
          prn: formData.prn,
          email: formData.email,
          phone: formData.phone,
          cgpa: formData.cgpa,
          project: formData.project,
          reason: formData.reason,
          experience: formData.experience,
          contribution: formData.contribution,
          cv_url: fileUrl,
        },
      ]);

    if (insertError) {
      setError("Error submitting form: " + insertError.message);
      return;
    }

    setShowNotification(true);
    setFormData({
      name: "",
      prn: "",
      cgpa: "",
      reason: "",
      project: "",
      email: "",
      phone: "",
      file: "",
      contribution: "",
      experience: "",
    });
  };

  const handleOkayButton = () => {
    setShowNotification(false);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Club Recruitment Form</h1>
        <p className={styles.titleDesc}>
          Fill out the below recruitment form to join I.R.I.S.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="prn">PRN*</label>
            <input
              type="text"
              id="prn"
              name="prn"
              value={formData.prn}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cgpa">CGPA</label>
            <input
              type="number"
              step="0.01"
              id="cgpa"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="project">Select a Domain*</label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              className="form-control"
            >
              <option value="" disabled>
                Choose a domain.
              </option>
              <optgroup label="Tech">
                <option value="Project A">TARZAN: Autonomous Vehicle Navigation</option>
                <option value="Project B">I.R.I.S Website</option>
              </optgroup>
              <optgroup label="Non-tech">
                <option value="content-writing">Content Writing</option>
                <option value="content-creation">Content Creation (Video Creation, Video Hosting)</option>
                <option value="photo-video-editor">Photo/Video Editor</option>
                <option value="designer-posts">Designer for Posts</option>
                <option value="event-ops">Event and Ops (Event Management)</option>
                <option value="marketing">Marketing</option>
                <option value="sponsorship-outreach">Sponsorship and Outreach</option>
              </optgroup>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="file">Resume or CV (rename the PDF with your name)*</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf"
              onChange={handleChange}
              required
            />
            {error && <p className="text-danger">{error}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="reason">What are your area of interests?*</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="experience">Any past experiences in your area of interest?*</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contribution">Why do you want to join IRIS and how will you be able to contribute?*</label>
            <textarea
              id="contribution"
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {showNotification && (
        <div className={styles.notificationPopup}>
          <div className={styles.notificationContent}>
            <h2>Thank you for registering!</h2>
            <p>Your form has been successfully submitted.</p>
            <button onClick={handleOkayButton}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recruitment;
