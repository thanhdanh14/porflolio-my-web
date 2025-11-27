import { useState } from 'react';
import { motion } from 'framer-motion';
import './TetTree.css';

const TetTree = () => {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="tet-tree-container">
      <motion.div 
        className="tet-tree"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Lantern on top */}
        <motion.div 
          className="lantern"
          animate={{ 
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏮
        </motion.div>

        {/* Mai tree SVG - Beautiful version */}
        <svg className="mai-tree-svg" viewBox="0 0 280 350" xmlns="http://www.w3.org/2000/svg">
          {/* Main trunk */}
          <rect x="130" y="220" width="20" height="130" fill="#6B4423" rx="4">
            <animate attributeName="opacity" values="1;0.95;1" dur="3s" repeatCount="indefinite" />
          </rect>
          
          {/* Branches - More natural curves */}
          <path d="M140 220 Q100 200 60 170 Q50 160 45 150" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M140 220 Q180 200 220 170 Q230 160 235 150" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          
          <path d="M140 200 Q110 185 80 165 Q70 155 65 145" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M140 200 Q170 185 200 165 Q210 155 215 145" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
          
          <path d="M140 180 Q115 170 90 155 Q80 145 75 135" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M140 180 Q165 170 190 155 Q200 145 205 135" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
          
          <path d="M140 160 Q120 150 100 135 Q90 125 85 115" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M140 160 Q160 150 180 135 Q190 125 195 115" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round" />
          
          <path d="M140 140 Q125 130 110 115 Q100 105 95 95" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M140 140 Q155 130 170 115 Q180 105 185 95" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round" />
          
          {/* Mai flowers - Beautiful 5-petal flowers */}
          {lightsOn && (
            <g className="mai-flowers">
              {/* Create multiple beautiful mai flowers */}
              {[
                {x: 45, y: 150}, {x: 235, y: 150},
                {x: 65, y: 145}, {x: 215, y: 145},
                {x: 75, y: 135}, {x: 205, y: 135},
                {x: 85, y: 115}, {x: 195, y: 115},
                {x: 95, y: 95}, {x: 185, y: 95},
                {x: 60, y: 170}, {x: 220, y: 170},
                {x: 80, y: 165}, {x: 200, y: 165},
                {x: 90, y: 155}, {x: 190, y: 155},
                {x: 100, y: 135}, {x: 180, y: 135},
                {x: 110, y: 115}, {x: 170, y: 115},
                {x: 70, y: 180}, {x: 210, y: 180},
                {x: 55, y: 160}, {x: 225, y: 160}
              ].map((pos, i) => (
                <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
                  {/* 5 petals */}
                  {[0, 72, 144, 216, 288].map((angle, j) => (
                    <ellipse
                      key={j}
                      cx="0"
                      cy="-4"
                      rx="3"
                      ry="5"
                      fill="#FFD700"
                      transform={`rotate(${angle})`}
                      opacity="0.9"
                    />
                  ))}
                  {/* Center */}
                  <circle cx="0" cy="0" r="2" fill="#FFA500" />
                  <circle cx="0" cy="0" r="1" fill="#FFFF00" opacity="0.8" />
                </g>
              ))}
            </g>
          )}
        </svg>

        {/* Red envelopes (lì xì) */}
        <motion.div 
          className="red-envelope envelope-1"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🧧
        </motion.div>
        <motion.div 
          className="red-envelope envelope-2"
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          🧧
        </motion.div>

        {/* Toggle button */}
        <motion.button
          className="lights-toggle"
          onClick={() => setLightsOn(!lightsOn)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {lightsOn ? '🌸' : '🌑'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TetTree;
