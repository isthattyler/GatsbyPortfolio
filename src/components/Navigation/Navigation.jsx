import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navigation ${scrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <Link
          to="hero"
          smooth
          duration={800}
          className="navigation__logo"
        >
          <span className="navigation__logo-text">TN</span>
        </Link>

        <div className="navigation__links">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={800}
              className={`navigation__link ${
                activeSection === link.id ? 'navigation__link--active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;