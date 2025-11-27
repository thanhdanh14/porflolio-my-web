import { useEffect } from 'react';
import './ChessBoardBackground.css';

const ChessBoardBackground = () => {
  useEffect(() => {
    // Add chess board background class to hero
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('chess-board-bg');
    }
    
    return () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.remove('chess-board-bg');
      }
    };
  }, []);

  return (
    <div className="chess-pattern-overlay">
      <svg className="chess-pattern" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="chessBoard" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Grid lines */}
            <rect width="100" height="100" fill="rgba(245, 222, 179, 0.05)" />
            <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(139, 69, 19, 0.1)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(139, 69, 19, 0.1)" strokeWidth="1" />
            
            {/* Decorative dots at intersections */}
            <circle cx="0" cy="0" r="2" fill="rgba(139, 69, 19, 0.15)" />
            <circle cx="50" cy="50" r="2" fill="rgba(139, 69, 19, 0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chessBoard)" />
      </svg>
      
      {/* Floating Chinese chess pieces */}
      <div className="floating-pieces">
        <div className="piece piece-1">🏰</div>
        <div className="piece piece-2">🐴</div>
        <div className="piece piece-3">🐘</div>
        <div className="piece piece-4">👑</div>
        <div className="piece piece-5">💣</div>
        <div className="piece piece-6">⚔️</div>
        <div className="piece piece-7">🛡️</div>
        <div className="piece piece-8">🏯</div>
      </div>
    </div>
  );
};

export default ChessBoardBackground;
