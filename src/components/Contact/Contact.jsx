import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email } = contact || {};
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (email) {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

        <div className="contact__email-wrapper">
          <a href={`mailto:${email}`} className="contact__email-link">
            {email || 'tyler7nguyen@duck.com'}
          </a>
          <button
            className="contact__copy-btn"
            onClick={handleCopy}
            aria-label="Copy email to clipboard"
          >
            {copied ? <FaCheck size={18} /> : <FaCopy size={18} />}
          </button>
        </div>

        <p className="contact__hint">Click to copy or email directly</p>
      </motion.div>
    </section>
  );
};

export default Contact;