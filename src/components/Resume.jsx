import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaHeart, FaDownload, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import ViewCVModal from './ViewCVModal';
import './Resume.css';

const Resume = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: t('resume.educationData.degree'),
      school: t('resume.educationData.school'),
      period: t('resume.educationData.period'),
      description: t('resume.educationData.description')
    }
  ];

  const experience = t('resume.experienceData');

  const certifications = t('resume.certificationsData');

  const hobbies = t('resume.hobbiesData');

  const funFacts = t('resume.funFactsData');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className="resume-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('resume.title')}
        </motion.h2>

        {/* View & Download Resume Buttons */}
        <motion.div 
          className="download-resume"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <ViewCVModal />
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1rdD_6ihJGV8c--mJx-_fUL8Znz90ra8w"
            download="CV-Bien-Thanh-Danh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>{t('resume.download')}</span>
          </motion.a>
        </motion.div>

        {/* Timeline Section */}
        <div className="resume-grid">
          {/* Education */}
          <motion.div 
            className="resume-section"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h3>{t('resume.education')}</h3>
            </div>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{item.degree}</h4>
                    <p className="timeline-place">{item.school}</p>
                    <p className="timeline-period">{item.period}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            className="resume-section"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h3>{t('resume.experience')}</h3>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p className="timeline-place">{item.company}</p>
                    <p className="timeline-period">{item.period}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="certifications-section"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="section-header">
            <FaAward className="section-icon" />
            <h3>{t('resume.certifications')}</h3>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="cert-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <FaAward className="cert-icon" />
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div 
          className="hobbies-section"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="section-header">
            <FaHeart className="section-icon" />
            <h3>{t('resume.hobbies')}</h3>
          </div>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index}
                className="hobby-card"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="hobby-icon">{hobby.icon}</span>
                <h4>{hobby.name}</h4>
                <p>{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div 
          className="funfacts-section"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="section-header">
            <FaLightbulb className="section-icon" />
            <h3>{t('resume.funFacts')}</h3>
          </div>
          <div className="funfacts-grid">
            {funFacts.map((fact, index) => (
              <motion.div 
                key={index}
                className="fact-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <span className="fact-bullet">▸</span>
                <p>{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
