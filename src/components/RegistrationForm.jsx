import React, { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 
import './RegistrationForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    teamName: '',
    teamSize: '1',
    experienceLevel: 'Beginner',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.teamName) newErrors.teamName = 'Team Name is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Submit to Firestore
        await addDoc(collection(db, 'registrations'), {
          fullName: formData.fullName,
          email: formData.email,
          teamName: formData.teamName,
          teamSize: formData.teamSize,
          experienceLevel: formData.experienceLevel,
          timestamp: new Date(),
        });
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting registration:', error);
        setErrors({ submit: 'Failed to submit. Please try again.' });
      }
    }
  };

  return (
    <section className="register-form">
      {submitted ? (
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>You're now part of DotCode Hackathon 2025. Check your email for confirmation.</p>
          <a href="https://aditya-task-3.vercel.app" className="back-link">
            Back to Home
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Join the Cybernetic Sprint</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Enter your team name"
            />
            {errors.teamName && <span className="error">{errors.teamName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="teamSize">Team Size</label>
            <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="experienceLevel">Experience Level</label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              I agree to the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </a>
            </label>
            {errors.consent && <span className="error">{errors.consent}</span>}
          </div>
          {errors.submit && <span className="error">{errors.submit}</span>}
          <button type="submit">Register</button>
        </form>
      )}
    </section>
  );
}

export default RegisterForm;