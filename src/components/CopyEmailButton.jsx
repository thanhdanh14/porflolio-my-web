import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './CopyEmailButton.css';

const CopyEmailButton = ({ email = 'bienthanhdanh@email.com' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="copy-email-wrapper">
      <motion.button
        className="copy-email-btn"
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={false}
          animate={{ rotate: copied ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {copied ? <FaCheck /> : <FaCopy />}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            className="copy-toast"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            ✓ Email copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyEmailButton;
