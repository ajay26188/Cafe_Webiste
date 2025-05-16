import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section hours">
        <h4>Opening Hours</h4>
        <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
        <p>Sat - Sun: 9:00 AM – 4:00 PM</p>
      </div>
      <div className="footer-section socials">
        <h4>Follow Us</h4>
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">X (Twitter)</a>
      </div>
      <div className="footer-section copyright">
        <p>&copy; {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
