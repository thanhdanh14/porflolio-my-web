import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span className="logo-text">Biện Thành Danh</span>
          </div>
          
          <div className="footer-links">
            <a href="#hero">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#skills">{t('nav.skills')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#resume">{t('nav.resume')}</a>
            <a href="#music">{t('nav.music')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </div>

          <div className="footer-social">
            <motion.a 
              href="https://github.com/thanhdanh14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/bienthanhdanh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:bienthanhdanh@email.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {currentYear} Biện Thành Danh. {t('footer.madeWith')} <FaHeart className="heart-icon" /> {t('footer.using')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
