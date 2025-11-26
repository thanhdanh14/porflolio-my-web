import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t('about.title')}
        </motion.h2>
        
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>{t('about.intro1')}</p>
            <p>{t('about.intro2')}</p>
          </div>
          
          <motion.div 
            className="about-stats"
            variants={containerVariants}
          >
            {[
              { number: "4+", label: t('about.stats.yearsExperience') },
              { number: "15+", label: t('about.stats.projectsCompleted') },
              { number: "3", label: t('about.stats.majorCompanies') }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
