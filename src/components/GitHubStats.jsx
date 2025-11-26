import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './GitHubStats.css';

const GitHubStats = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const username = 'thanhdanh14';

  return (
    <section className="github-stats" ref={ref}>
      <motion.div
        className="github-stats-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="github-header">
          <FaGithub className="github-icon" />
          <h3>{t('github.title')}</h3>
        </div>

        <div className="stats-grid">
          {/* GitHub Stats Card */}
          <motion.div 
            className="stat-card-github"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=667eea&icon_color=764ba2&text_color=ffffff`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div 
            className="stat-card-github"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=667eea&text_color=ffffff`}
              alt="Top Languages"
              loading="lazy"
            />
          </motion.div>

          {/* GitHub Streak */}
          <motion.div 
            className="stat-card-github streak"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0D1117&ring=667eea&fire=764ba2&currStreakLabel=667eea`}
              alt="GitHub Streak"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-github-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>{t('github.viewProfile')}</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
