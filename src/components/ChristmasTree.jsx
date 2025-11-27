import { useState } from 'react';
import { motion } from 'framer-motion';
import './ChristmasTree.css';

const ChristmasTree = () => {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="christmas-tree-container">
      <motion.div 
        className="christmas-tree"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Star on top */}
        <motion.div 
          className="star"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⭐
        </motion.div>

        {/* Tree structure with SVG for better look */}
        <svg className="tree-svg" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
          {/* Tree triangles */}
          <polygon points="100,30 50,90 150,90" fill="#0d5c0d" />
          <polygon points="100,70 40,140 160,140" fill="#0f6e0f" />
          <polygon points="100,110 30,190 170,190" fill="#117d11" />
          <polygon points="100,150 20,240 180,240" fill="#138f13" />
          
          {/* Trunk */}
          <rect x="85" y="240" width="30" height="40" fill="#5c3317" rx="3" />
          
          {/* Decorations - only show when lights are on */}
          {lightsOn && (
            <>
              <circle cx="100" cy="60" r="4" fill="#ff0000" opacity="0.9" />
              <circle cx="75" cy="100" r="4" fill="#ffd700" opacity="0.9" />
              <circle cx="125" cy="105" r="4" fill="#00bfff" opacity="0.9" />
              <circle cx="60" cy="150" r="4" fill="#ff1493" opacity="0.9" />
              <circle cx="140" cy="155" r="4" fill="#00ff00" opacity="0.9" />
              <circle cx="50" cy="200" r="4" fill="#ff4500" opacity="0.9" />
              <circle cx="150" cy="205" r="4" fill="#9370db" opacity="0.9" />
              <circle cx="100" cy="180" r="4" fill="#ffff00" opacity="0.9" />
              <circle cx="80" cy="220" r="4" fill="#00ced1" opacity="0.9" />
              <circle cx="120" cy="225" r="4" fill="#ff69b4" opacity="0.9" />
            </>
          )}
        </svg>

        {/* Christmas lights with glow */}
        {lightsOn && (
          <>
            <motion.div 
              className="light light-red light-1"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.div 
              className="light light-yellow light-2"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.15 }}
            />
            <motion.div 
              className="light light-blue light-3"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="light light-pink light-4"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.45 }}
            />
            <motion.div 
              className="light light-green light-5"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div 
              className="light light-orange light-6"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.75 }}
            />
            <motion.div 
              className="light light-purple light-7"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.9 }}
            />
            <motion.div 
              className="light light-yellow light-8"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div 
              className="light light-cyan light-9"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="light light-pink light-10"
              animate={{ 
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 }}
            />
          </>
        )}

        {/* Gifts under tree */}
        <div className="gifts">
          <motion.div 
            className="gift gift-1"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎁
          </motion.div>
          <motion.div 
            className="gift gift-2"
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            🎁
          </motion.div>
          <motion.div 
            className="gift gift-3"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎁
          </motion.div>
        </div>

        {/* Toggle button */}
        <motion.button
          className="lights-toggle"
          onClick={() => setLightsOn(!lightsOn)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {lightsOn ? '💡' : '🔌'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ChristmasTree;
