import React, { useState } from 'react';
import styles from '../../assets/styles/Home/Testimonial.module.css';
import { FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'HR Manager, TechCorp',
    text: 'The CMS has streamlined our employee management process. It\'s user-friendly and highly efficient.',
    icon: <FaUserCircle />,
  },
  {
    name: 'John Smith',
    role: 'CEO, Innovate Inc.',
    text: 'The AI features have significantly improved our HR processes. Excellent support and great value for money.',
    icon: <FaUserCircle />,
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director, Growth Ltd.',
    text: 'A top-notch CMS that handles all our needs. The digital marketing tools are fantastic and easy to use.',
    icon: <FaUserCircle />,
  },
  {
    name: 'Michael Brown',
    role: 'Project Manager, DevWorks',
    text: 'The integration with our existing tools was seamless. Highly recommended for any growing business.',
    icon: <FaUserCircle />,
  },
  {
    name: 'Sophia Davis',
    role: 'Product Lead, FinTech Co.',
    text: 'A game-changer for our payroll system. The user interface is intuitive, and the support team is excellent.',
    icon: <FaUserCircle />,
  },
  {
    name: 'David Wilson',
    role: 'CTO, Startup Hub',
    text: 'Impressive features and scalability. The CMS meets all our needs and provides great value for the price.',
    icon: <FaUserCircle />,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className={styles.testimonialCarousel}>
      <h2>What Our Clients Say</h2>
      <div className={styles.carouselContainer}>
        <button className={styles.prevButton} onClick={prevSlide}>❮</button>
        <div className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={styles.testimonialItem}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className={styles.icon}>{testimonial.icon}</div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
              <span>{testimonial.role}</span>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
