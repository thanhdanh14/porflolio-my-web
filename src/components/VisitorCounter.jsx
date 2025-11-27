import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    // Get or initialize visitor count
    const storedCount = localStorage.getItem('visitorCount');
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // New visitor
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('visitorCount', newCount);
      localStorage.setItem('hasVisited', 'true');
      setCount(newCount);
      setIsNew(true);
    } else {
      // Returning visitor
      setCount(storedCount ? parseInt(storedCount) : 1);
      setIsNew(false);
    }
  }, []);

  // Convert number to array of digits with leading zeros
  const getDigits = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  return (
    <motion.div 
      className="visitor-counter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="counter-label">
        <span className="retro-text">👁️ VISITORS</span>
      </div>
      <div className="counter-display">
        {getDigits(count).map((digit, index) => (
          <motion.div
            key={index}
            className="digit-container"
            initial={{ rotateX: -90 }}
            animate={{ rotateX: 0 }}
            transition={{ 
              delay: index * 0.1 + 0.5,
              duration: 0.5,
              type: "spring"
            }}
          >
            <div className="digit">{digit}</div>
          </motion.div>
        ))}
      </div>
      {isNew && (
        <motion.div 
          className="new-visitor-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          🎉 You're visitor #{count}!
        </motion.div>
      )}
    </motion.div>
  );
};

export default VisitorCounter;
