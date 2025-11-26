import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EasterEgg.css';

const EasterEgg = () => {
  const [showEgg, setShowEgg] = useState(false);
  const [sequence, setSequence] = useState([]);
  
  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = [...sequence, e.key].slice(-10);
      setSequence(newSequence);

      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowEgg(true);
        setSequence([]);
        setTimeout(() => setShowEgg(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sequence]);

  return (
    <AnimatePresence>
      {showEgg && (
        <motion.div
          className="easter-egg-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="easter-egg-content"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="egg-emoji">🎉</div>
            <h2>Konami Code Activated!</h2>
            <p>You found the secret! 🚀</p>
            <div className="confetti">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{
                    y: [0, -200, -400],
                    x: [0, Math.random() * 200 - 100],
                    rotate: [0, Math.random() * 360],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: 'easeOut'
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    background: `hsl(${Math.random() * 360}, 70%, 60%)`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
