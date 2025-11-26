import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaTimes, FaDownload } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './ViewCVModal.css';

const ViewCVModal = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        className="view-cv-btn"
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEye />
        <span>{t('resume.viewCV')}</span>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="cv-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="cv-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cv-modal-close"
                onClick={() => setShowModal(false)}
                title={t('resume.close')}
              >
                <FaTimes />
              </button>
              
              <div className="cv-modal-header">
                <h3>CV - Biện Thành Danh</h3>
                <p>{t('resume.frontendDeveloper')}</p>
              </div>

              <div className="cv-iframe-wrapper">
                <iframe
                  src="https://drive.google.com/file/d/1rdD_6ihJGV8c--mJx-_fUL8Znz90ra8w/preview"
                  title="CV Preview"
                  className="cv-iframe"
                  allow="autoplay"
                />
              </div>

              <div className="cv-modal-footer">
                <a 
                  href="https://drive.google.com/uc?export=download&id=1rdD_6ihJGV8c--mJx-_fUL8Znz90ra8w" 
                  download="CV-Bien-Thanh-Danh.pdf"
                  className="cv-download-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload />
                  <span>{t('resume.downloadCV')}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ViewCVModal;
