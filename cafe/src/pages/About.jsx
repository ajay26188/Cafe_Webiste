import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-page">
      <div className="about-text">
        <h2>About Café Aroma</h2>
        <p>
          Nestled in the heart of the city, Café Aroma is your cozy escape from the daily hustle.
          Since our doors opened in 2017, we've been passionate about crafting the perfect cup of coffee
          while offering a warm, welcoming environment for everyone.
        </p>
        <p>
          Our beans are ethically sourced, roasted in-house, and brewed with care by trained baristas.
          Whether you're grabbing a quick espresso on the go, catching up with a friend over a latte,
          or indulging in a buttery croissant with your book, we’re here to make your moments better.
        </p>
        <p>
          We believe in quality, sustainability, and community. Our space is filled with good music, the smell of fresh pastries,
          and friendly faces—just how a neighborhood café should feel.
        </p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/images/gallery/cafe1.jpg" alt="Café interior" />
        </div>
        <div className="gallery-item">
          <img src="/images/gallery/cafe2.jpg" alt="Barista pouring coffee" />
        </div>
        <div className="gallery-item">
          <img src="/images/gallery/cafe3.jpg" alt="Pastries display" />
        </div>
        <div className="gallery-item">
          <img src="/images/gallery/cafe4.jpg" alt="Customers enjoying coffee" />
        </div>
      </div>

    </section>
  );
}

export default About;
