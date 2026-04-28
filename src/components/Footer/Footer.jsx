import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          {networks.map((network) => {
            const { id, name, url } = network;
            const Icon = name === 'github' ? Github : Linkedin;

            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div className="footer__divider" />

        <Link
          to="hero"
          smooth
          duration={1000}
          className="footer__back-to-top"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </Link>

        <p className="footer__copyright">
          {new Date().getFullYear()} — Built by{' '}
          <a
            href="https://github.com/isthattyler"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__name"
          >
            Tyler Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;