import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';
import AboutImg from '../Image/AboutImg';

const TypewriterText = ({ texts, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className="hero__typewriter">
      {displayText}
      <span className="cursor" />
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: delay,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const typewriterTexts = ['Java Developer', 'Backend Engineer', 'Problem Solver'];

  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" />

      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__label" variants={itemVariants}>
          Software Engineer
        </motion.div>

        <motion.h1 className="hero__title" variants={itemVariants}>
          Hi, I'm{' '}
          <span className="name">Tyler</span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <TypewriterText texts={typewriterTexts} delay={0.5} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:tyler7nguyen@duck.com"
            className="hero__cta"
          >
            <span>Get in touch</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;