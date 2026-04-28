import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import PortfolioContext from '../../context/context';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const codePreviews = {
    'Flappy Bird Engine': [
      'class Bird extends Entity {',
      '  void update(float dt) {',
      '    velocity += gravity * dt;',
      '    position.y += velocity;',
      '  }',
      '}',
    ],
    'Algorithm Sandbox': [
      'def binary_search(arr, target):',
      '    lo, hi = 0, len(arr) - 1',
      '    while lo <= hi:',
      '        mid = (lo + hi) // 2',
      '        if arr[mid] == target:',
      '            return mid',
      '    return -1',
    ],
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__label">Featured work</span>
          <h2 className="projects__title">Projects</h2>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => {
            const { title, info, info2, url, repo, id } = project;
            const preview = codePreviews[title] || codePreviews['Algorithm Sandbox'];

            return (
              <motion.div key={id} className="project-card" variants={cardVariants}>
                <div className="project-card__terminal">
                  <div className="project-card__terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="project-card__terminal-title">{title}.java</span>
                </div>

                <div className="project-card__content">
                  <h3 className="project-card__title">{title}</h3>
                  <p className="project-card__subtitle">{info2}</p>
                  <p className="project-card__description">{info}</p>

                  <div className="project-card__code-preview">
                    {preview.map((line, idx) => (
                      <div key={idx} className="project-card__code-line">
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className="project-card__links">
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link project-card__link--primary"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    )}
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;