import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../content/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="hero-title text-center">
              Sorry. What you're looking for is not here{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
};