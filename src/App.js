import React from 'react';
import RegisterForm from './components/RegistrationForm';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faDiscord,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  const socialLinks = [
    { icon: faTwitter, url: 'https://twitter.com/Aditya_22e', label: 'Twitter' },
    { icon: faDiscord, url: 'https://discord.gg/', label: 'Discord' },
    { icon: faLinkedin, url: 'https://linkedin.com/company/', label: 'LinkedIn' },
    { icon: faInstagram, url: 'https://instagram.com/aditya_22e', label: 'Instagram' },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Register for DotCode 3.0</h1>
        <p>Secure your spot in the ultimate coding battle!</p>
      </header>
      <RegisterForm />
      <footer className="footer">
        <p>
          Back to{' '}
          <a href="https://aditya-task-3.vercel.app" target="_blank" rel="noopener noreferrer">
            DotCode 3.0
          </a>
        </p>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.label}`}
              className="social-icon"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
        <p>© 2025 Growth Driven Pioneers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;