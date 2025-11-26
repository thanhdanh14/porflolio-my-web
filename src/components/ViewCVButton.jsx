import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaTimes } from 'react-icons/fa';
import './ViewCVButton.css';

const ViewCVButton = () => {
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
        <span>Xem CV</span>
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cv-modal-close"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
              <iframe
                src="/assets/CV-Bien-Thanh-Danh.pdf"
                title="CV Preview"
                className="cv-iframe"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ViewCVButton;
