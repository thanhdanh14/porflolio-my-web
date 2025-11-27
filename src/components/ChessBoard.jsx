import { motion } from 'framer-motion';
import './ChessBoard.css';

const ChessBoard = () => {
  // Quân cờ tướng với emoji
  const pieces = [
    // Đỏ (dưới)
    { emoji: '🏰', pos: { x: 0, y: 9 }, color: 'red' },
    { emoji: '🐴', pos: { x: 1, y: 9 }, color: 'red' },
    { emoji: '🐘', pos: { x: 2, y: 9 }, color: 'red' },
    { emoji: '🛡️', pos: { x: 3, y: 9 }, color: 'red' },
    { emoji: '👑', pos: { x: 4, y: 9 }, color: 'red' },
    { emoji: '🛡️', pos: { x: 5, y: 9 }, color: 'red' },
    { emoji: '🐘', pos: { x: 6, y: 9 }, color: 'red' },
    { emoji: '🐴', pos: { x: 7, y: 9 }, color: 'red' },
    { emoji: '🏰', pos: { x: 8, y: 9 }, color: 'red' },
    { emoji: '💣', pos: { x: 1, y: 7 }, color: 'red' },
    { emoji: '💣', pos: { x: 7, y: 7 }, color: 'red' },
    { emoji: '⚔️', pos: { x: 0, y: 6 }, color: 'red' },
    { emoji: '⚔️', pos: { x: 2, y: 6 }, color: 'red' },
    { emoji: '⚔️', pos: { x: 4, y: 6 }, color: 'red' },
    { emoji: '⚔️', pos: { x: 6, y: 6 }, color: 'red' },
    { emoji: '⚔️', pos: { x: 8, y: 6 }, color: 'red' },
    
    // Đen (trên)
    { emoji: '🏯', pos: { x: 0, y: 0 }, color: 'black' },
    { emoji: '🦄', pos: { x: 1, y: 0 }, color: 'black' },
    { emoji: '🦣', pos: { x: 2, y: 0 }, color: 'black' },
    { emoji: '🛡️', pos: { x: 3, y: 0 }, color: 'black' },
    { emoji: '👸', pos: { x: 4, y: 0 }, color: 'black' },
    { emoji: '🛡️', pos: { x: 5, y: 0 }, color: 'black' },
    { emoji: '🦣', pos: { x: 6, y: 0 }, color: 'black' },
    { emoji: '🦄', pos: { x: 7, y: 0 }, color: 'black' },
    { emoji: '🏯', pos: { x: 8, y: 0 }, color: 'black' },
    { emoji: '🎯', pos: { x: 1, y: 2 }, color: 'black' },
    { emoji: '🎯', pos: { x: 7, y: 2 }, color: 'black' },
    { emoji: '🗡️', pos: { x: 0, y: 3 }, color: 'black' },
    { emoji: '🗡️', pos: { x: 2, y: 3 }, color: 'black' },
    { emoji: '🗡️', pos: { x: 4, y: 3 }, color: 'black' },
    { emoji: '🗡️', pos: { x: 6, y: 3 }, color: 'black' },
    { emoji: '🗡️', pos: { x: 8, y: 3 }, color: 'black' },
  ];

  return (
    <div className="chess-board-container">
      <motion.div 
        className="chess-board"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Board grid */}
        <svg className="board-grid" viewBox="0 0 450 500" xmlns="http://www.w3.org/2000/svg">
          {/* Horizontal lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) => (
            <line
              key={`h-${row}`}
              x1="0"
              y1={row * 50}
              x2="450"
              y2={row * 50}
              stroke="rgba(139, 69, 19, 0.3)"
              strokeWidth="2"
            />
          ))}
          
          {/* Vertical lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
            <g key={`v-${col}`}>
              <line
                x1={col * 50 + 25}
                y1="0"
                x2={col * 50 + 25}
                y2="200"
                stroke="rgba(139, 69, 19, 0.3)"
                strokeWidth="2"
              />
              <line
                x1={col * 50 + 25}
                y1="250"
                x2={col * 50 + 25}
                y2="450"
                stroke="rgba(139, 69, 19, 0.3)"
                strokeWidth="2"
              />
            </g>
          ))}
          
          {/* Palace diagonals - Top */}
          <line x1="175" y1="0" x2="225" y2="50" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="225" y1="0" x2="175" y2="50" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="175" y1="50" x2="225" y2="100" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="225" y1="50" x2="175" y2="100" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          
          {/* Palace diagonals - Bottom */}
          <line x1="175" y1="350" x2="225" y2="400" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="225" y1="350" x2="175" y2="400" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="175" y1="400" x2="225" y2="450" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          <line x1="225" y1="400" x2="175" y2="450" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="2" />
          
          {/* River text */}
          <text x="100" y="230" fill="rgba(139, 69, 19, 0.4)" fontSize="20" fontWeight="bold">楚河</text>
          <text x="280" y="230" fill="rgba(139, 69, 19, 0.4)" fontSize="20" fontWeight="bold">漢界</text>
        </svg>

        {/* Chess pieces */}
        {pieces.map((piece, index) => (
          <motion.div
            key={index}
            className={`chess-piece ${piece.color}`}
            style={{
              left: `${piece.pos.x * 50 + 25}px`,
              top: `${piece.pos.y * 50}px`,
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: index * 0.05,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 }
            }}
          >
            {piece.emoji}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ChessBoard;
