import React, { useState } from 'react';
import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "“The best latte I've ever had. Warm staff and a peaceful vibe. A perfect study spot or chill-out café.”",
    author: "- Mia L., local regular",
  },
  {
    text: "“Café Aroma is my happy place. Their pastries are heavenly and the ambience is unmatched.”",
    author: "- Jonas V., student",
  },
  {
    text: "“Love the vegan options and the chill music. Super cozy, especially in the evenings.”",
    author: "- Priya R., freelancer",
  },
];

function Home() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Café Aroma</h1>
          <p>Freshly brewed coffee, cozy atmosphere, and warm smiles await you.</p>
          <a href="/menu" className="hero-button">View Menu</a>
        </motion.div>
      </section>

      <section className="features">
        <h2>Why You'll Love Us</h2>
        <div className="feature-grid">
          <div className="feature-item">☕ Locally Roasted Coffee</div>
          <div className="feature-item">🌱 Vegan & Gluten-Free Options</div>
          <div className="feature-item">📶 Free High-Speed Wi-Fi</div>
          <div className="feature-item">🐾 Pet-Friendly Atmosphere</div>
          <div className="feature-item">🪑 Cozy Indoor & Outdoor Seating</div>
        </div>
      </section>

      <section className="testimonial">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-slider">
          <button onClick={handlePrev} className="slider-btn">‹</button>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[index].text}
              <br />
              <span>{testimonials[index].author}</span>
            </motion.blockquote>
          </AnimatePresence>

          <button onClick={handleNext} className="slider-btn">›</button>
        </div>
      </section>

      <section className="visit-us">
        <a href="/contact" className="visit-button">Visit Us Today →</a>
      </section>
    </>
  );
}

export default Home;
