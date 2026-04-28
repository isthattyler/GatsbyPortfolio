import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  const { about } = React.useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 900);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section id="about" className="about">
      <motion.div
        className="about__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="about__content" variants={itemVariants}>
          <span className="about__intro">About me</span>
          <h2 className="about__title">Turning complex problems into clean, reliable systems</h2>

          <p className="about__description">{paragraphOne}</p>
          <p className="about__description">{paragraphTwo}</p>
          <p className="about__description">{paragraphThree}</p>

          <div className="about__details">
            <span className="about__detail">UConn Computer Science Graduate</span>
            <span className="about__detail">Currently @Optum as Software Engineer</span>
            <span className="about__detail">Backend-focused with full-stack capabilities</span>
          </div>

          {resume && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="about__resume-btn"
            >
              <span>View Resume</span>
              <ExternalLink size={18} />
            </a>
          )}
        </motion.div>

        <motion.div className="about__visual" variants={imageVariants}>
          <AboutImg alt="Tyler Nguyen" filename={img} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;