import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form
        className="contact-form"
        onSubmit={(e) => {
        e.preventDefault();
        alert('Message sent! Thank you 😊');
        e.target.reset();
        }}
    >   

        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Write your message..." required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
