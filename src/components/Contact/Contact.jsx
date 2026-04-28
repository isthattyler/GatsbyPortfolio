import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact || {};

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="contact__label">Get in touch</span>
        <h2 className="contact__title">Let's Work Together</h2>
        <p className="contact__description">
          {cta || "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."}
        </p>

        <a
          href={email ? `mailto:${email}` : '#'}
          className="contact__magnetic-btn"
        >
          <FaEnvelope size={20} />
          <span>{btn || 'Email Me'}</span>
          <FaArrowRight size={20} />
        </a>

        <p className="contact__email">
          Or reach me directly at{' '}
          <a href={`mailto:${email}`}>{email || 'tyler7nguyen@duck.com'}</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;