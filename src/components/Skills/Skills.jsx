import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Languages & Core Tools',
    icon: FaCode,
    items: ['Java', 'Python', 'SQL', 'Bash'],
    description: 'My daily drivers for building and shipping software.',
  },
  {
    category: 'Frameworks & Libraries',
    icon: FaServer,
    items: ['Spring Boot', 'React JS'],
    description: 'Spring Boot for scalable backend services, React for interactive frontends.',
  },
  {
    category: 'Data & Infrastructure',
    icon: FaDatabase,
    items: ['PostgreSQL', 'MongoDB'],
    description: 'Comfortable in Linux environments and love a good shell script.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills__label">What I work with</span>
          <h2 className="skills__title">Tech Stack</h2>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="skill-card"
              variants={cardVariants}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <group.icon size={24} />
                </div>
                <h3 className="skill-card__category">{group.category}</h3>
              </div>

              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-card__tag">
                    {item}
                  </span>
                ))}
              </div>

              <p className="skill-card__description">{group.description}</p>

              <div className="skill-card__terminal">
                <span className="skill-card__prompt">$</span>
                <span className="skill-card__command">
                  show expertise --{group.items[0].toLowerCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;