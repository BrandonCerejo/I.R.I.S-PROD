import React, { useState, useRef } from "react";
import { supabase } from '../supabase';
import styles from "./recruitment.module.css";
import backgroundVideo from "./vid2.mp4";
import "bootstrap/dist/css/bootstrap.min.css";

function Recruitment() {
  const [formData, setFormData] = useState({
    name: "",
    prn: "",
    cgpa: "",
    interests: "",
    domain: "",
    email: "",
    phone: "",
    file: null,
    school: "",
    branch: "",
    currentYear: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    prn: "",
    email: "",
    phone: "",
    cgpa: "",
    school: "",
    branch: "",
    currentYear: "",
    domain: "",
    file: "",
    interests: "",
    experience: "",
    contribution: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const fileInputRef = useRef(null);

  const schoolsList = [
    "WPU School of Economics and Commerce",
    "Ramcharan School of Leadership",
    "WPU School of Business",
    "Faculty of Governance",
    "WPU School of Engineering and Technology",
    "WPU School of Consciousness",
    "WPU School of Law",
    "Department of Liberal Arts",
    "Department of Biosciences and Technology",
    "Department of Pharmaceutical Science",
    "Department of Visual Arts",
    "Department of Design",
    "WPU School of Photography",
    "WPU School of Computer Science and Engineering",
    "WPU School of Science & Environmental Studies",
    "Others"
  ];
  const uniqueSchools = [...new Set(schoolsList)];

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
  const validatePrn = (prn) => /^[0-9]{10}$/.test(prn);
  const validateEmail = (email) => /^(.*@gmail\.com|.*@mitwpu\.edu\.in)$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "file") {
      const file = e.target.files[0];
      if (file && file.size > 100 * 1024) {
        setFormErrors({ ...formErrors, file: "File size should not exceed 100 kB" });
        return;
      } else {
        setFormErrors({ ...formErrors, file: "" });
      }
      setFormData({ ...formData, file });
    } else {
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" }); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  

    const newErrors = {};
    let formIsValid = true;

    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "cgpa" && field !== "file") {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        formIsValid = false;
      }
    });

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Phone number.";
      formIsValid = false;
    }

    if (!validatePrn(formData.prn)) {
      newErrors.prn = "Please enter a valid PRN.";
      formIsValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    if (!formData.experience) {
      newErrors.experience = "Experience in your area of interest is required.";
      formIsValid = false;
    }

    if (!formData.contribution) {
      newErrors.contribution = "This field is required.";
      formIsValid = false;
    }

    if (!formData.file) {
      newErrors.file = "Please upload your resume (PDF).";
      formIsValid = false;
    }

    setFormErrors(newErrors);

    if (!formIsValid) {
      const firstErrorField = Object.keys(newErrors)[0];
      const firstErrorElement = document.getElementById(firstErrorField);
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const cgpaValue = formData.cgpa ? parseFloat(formData.cgpa) : null;

    const filePath = `cvs/${formData.name}-${Date.now()}.pdf`;
    const { data, error: uploadError } = await supabase
      .storage
      .from('cv_bucket')
      .upload(filePath, formData.file);

    if (uploadError) {
      setFormErrors({ ...formErrors, file: "Error uploading file: " + uploadError.message });
      return;
    }

    const fileUrl = supabase.storage.from('cv_bucket').getPublicUrl(data.path).publicURL;

    const { error: insertError } = await supabase
      .from('recruitment_forms')
      .insert([{
        name: formData.name,
        prn: formData.prn,
        email: formData.email,
        phone: formData.phone,
        cgpa: cgpaValue,
        domain: formData.domain,
        interests: formData.interests,
        experience: formData.experience,
        contribution: formData.contribution,
        cv_url: fileUrl,
        school: formData.school,
        branch: formData.branch,
        current_year: formData.currentYear
      }]);

    if (insertError) {
      setFormErrors({ ...formErrors, form: "Error submitting form: " + insertError.message });
      return;
    }

    setShowNotification(true);

    setFormData({
      name: "",
      prn: "",
      cgpa: "",
      interests: "",
      domain: "",
      email: "",
      phone: "",
      file: null,
      contribution: "",
      experience: "",
      school: "",
      branch: "",
      currentYear: ""
    });

    fileInputRef.current.value = null;
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
            />
            {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="prn">PRN*</label>
            <input
              type="text"
              id="prn"
              name="prn"
              value={formData.prn}
              onChange={handleChange}
            />
            {formErrors.prn && <p className="text-danger">{formErrors.prn}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <p className="text-danger">{formErrors.phone}</p>}
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
            {formErrors.cgpa && <p className="text-danger">{formErrors.cgpa}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="school">School*</label>
            <select
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="form-control"
            >
              <option value="" disabled>Choose a school</option>
              {uniqueSchools.map((school, index) => (
                <option key={index} value={school}>{school}</option>
              ))}
            </select>
            {formErrors.school && <p className="text-danger">{formErrors.school}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="branch">Branch*</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="form-control"
            />
            {formErrors.branch && <p className="text-danger">{formErrors.branch}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="currentYear">Current Year*</label>
            <select
              id="currentYear"
              name="currentYear"
              value={formData.currentYear}
              onChange={handleChange}
              className="form-control"
            >
              <option value="" disabled>Choose your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
            {formErrors.currentYear && <p className="text-danger">{formErrors.currentYear}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="domain">Select a Domain*</label>
            <select
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="form-control"
            >
              <option value="" disabled>Choose a domain</option>
              <optgroup label="Tech">
                <option value="Tarzan">TARZAN - Autonomous Vehicle Project</option>
                <option value="Website">I.R.I.S. Website - Development & Updates</option>
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
            {formErrors.domain && <p className="text-danger">{formErrors.domain}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="file">Resume or CV (rename the PDF with your name)*</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf"
              onChange={handleChange}
              ref={fileInputRef}
            />
            {formErrors.file && <p className="text-danger">{formErrors.file}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="interests">What are your area of interests?*</label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
            />
            {formErrors.interests && <p className="text-danger">{formErrors.interests}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="experience">Any past experiences in your area of interest?*</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            {formErrors.experience && <p className="text-danger">{formErrors.experience}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contribution">Why do you want to join IRIS and how will you be able to contribute?*</label>
            <textarea
              id="contribution"
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
            />
            {formErrors.contribution && <p className="text-danger">{formErrors.contribution}</p>}
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
