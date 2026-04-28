import React from 'react';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => {
  return (
    <div className="about-image-wrapper">
      <div className="about-image-glow" />
      <img
        src={`/src/images/Profile/${filename}`}
        alt={alt}
        className="about-image"
      />
    </div>
  );
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;