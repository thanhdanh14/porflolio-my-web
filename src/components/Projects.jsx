import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'CV Analyzer',
      titleVi: 'Phân Tích CV',
      description: 'AI-powered CV analysis tool that helps job seekers optimize their resumes with intelligent feedback and suggestions.',
      descriptionVi: 'Công cụ phân tích CV bằng AI giúp người tìm việc tối ưu hóa CV với phản hồi và gợi ý thông minh.',
      tech: ['React', 'Python', 'AI/ML', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      github: 'https://github.com/thanhdanh14/cv-analyzer',
      demo: 'https://cv-analyzer-db.vercel.app/'
    }
  ];

  // Nếu chưa có dự án, hiển thị message
  if (projects.length === 0) {
    return (
      <section id="projects" className="projects" ref={ref}>
        <div className="projects-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('projects.title')}
          </motion.h2>
          
          <motion.div 
            className="coming-soon"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="coming-soon-content">
              <motion.div
                className="coming-soon-icon"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🚀
              </motion.div>
              <h3>{t('projects.comingSoon')}</h3>
              <p>{t('projects.description')}</p>
              <motion.div 
                className="skills-preview"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span>{t('skills.techUsing')}</span>
                <div className="tech-badges">
                  {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
                    <motion.span 
                      key={i}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.github && (
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{t('language') === 'vi' && project.titleVi ? project.titleVi : project.title}</h3>
                <p>{t('language') === 'vi' && project.descriptionVi ? project.descriptionVi : project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
