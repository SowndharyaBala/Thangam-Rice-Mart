// Footer.js
import React from 'react';
import '../Footer/Footer.css' // Optional, for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p >&copy; {new Date().getFullYear()} <b>Thangam Rice Mart.</b> All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
