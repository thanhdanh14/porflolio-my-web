import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React.js', level: 95, icon: <FaReact />, color: '#61DAFB' },
    { name: 'SolidJs', level: 90, icon: <FaReact />, color: '#2C4F7C' },
    { name: 'JavaScript', level: 95, icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: '#3178C6' },
    { name: 'HTML5', level: 95, icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', level: 95, icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Redux', level: 90, icon: <SiExpress />, color: '#764ABC' },
    { name: 'Node.js', level: 75, icon: <FaNodeJs />, color: '#339933' },
    { name: 'Tailwind', level: 85, icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', level: 90, icon: <FaGitAlt />, color: '#F05032' }
  ];

  // Logo carousel items
  const logoItems = [
    { icon: <FaReact />, color: '#61DAFB', name: 'React' },
    { icon: <FaNodeJs />, color: '#339933', name: 'Node.js' },
    { icon: <SiTypescript />, color: '#3178C6', name: 'TypeScript' },
    { icon: <SiNextdotjs />, color: '#ffffff', name: 'Next.js' },
    { icon: <SiMongodb />, color: '#47A248', name: 'MongoDB' },
    { icon: <SiPostgresql />, color: '#4169E1', name: 'PostgreSQL' },
    { icon: <SiTailwindcss />, color: '#06B6D4', name: 'Tailwind' },
    { icon: <SiExpress />, color: '#ffffff', name: 'Express' },
    { icon: <FaPython />, color: '#3776AB', name: 'Python' },
    { icon: <SiGraphql />, color: '#E10098', name: 'GraphQL' },
    { icon: <FaDocker />, color: '#2496ED', name: 'Docker' },
    { icon: <SiRedis />, color: '#DC382D', name: 'Redis' },
    { icon: <FaAws />, color: '#FF9900', name: 'AWS' },
    { icon: <FaGitAlt />, color: '#F05032', name: 'Git' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('skills.title')}
        </motion.h2>

        {/* Infinite Logo Carousel */}
        <motion.div 
          className="logo-carousel-wrapper"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="logo-carousel">
            <div className="logo-track">
              {/* Duplicate items for seamless loop */}
              {[...logoItems, ...logoItems, ...logoItems].map((item, index) => (
                <motion.div
                  key={index}
                  className="logo-item"
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="logo-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="logo-name">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ background: skill.color }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
