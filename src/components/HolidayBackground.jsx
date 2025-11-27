import { useEffect } from 'react';
import { useHoliday } from '../contexts/HolidayContext';
import './HolidayBackground.css';

const HolidayBackground = () => {
  const { holidayTheme } = useHoliday();

  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add(`${holidayTheme}-bg`);
    }
    
    return () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.remove('normal-bg', 'christmas-bg', 'tet-bg');
      }
    };
  }, [holidayTheme]);

  const renderFloatingElements = () => {
    if (holidayTheme === 'normal') {
      // Quân cờ tướng
      return (
        <>
          <div className="floating-element element-1">🏰</div>
          <div className="floating-element element-2">🐴</div>
          <div className="floating-element element-3">🐘</div>
          <div className="floating-element element-4">👑</div>
          <div className="floating-element element-5">💣</div>
          <div className="floating-element element-6">⚔️</div>
          <div className="floating-element element-7">🛡️</div>
          <div className="floating-element element-8">🏯</div>
        </>
      );
    } else if (holidayTheme === 'christmas') {
      // Christmas elements
      return (
        <>
          <div className="floating-element element-1">🎄</div>
          <div className="floating-element element-2">⭐</div>
          <div className="floating-element element-3">🎁</div>
          <div className="floating-element element-4">🔔</div>
          <div className="floating-element element-5">🎅</div>
          <div className="floating-element element-6">⛄</div>
          <div className="floating-element element-7">🦌</div>
          <div className="floating-element element-8">🕯️</div>
        </>
      );
    } else if (holidayTheme === 'tet') {
      // Tet elements
      return (
        <>
          <div className="floating-element element-1">🌸</div>
          <div className="floating-element element-2">🏮</div>
          <div className="floating-element element-3">🧧</div>
          <div className="floating-element element-4">🎋</div>
          <div className="floating-element element-5">🍊</div>
          <div className="floating-element element-6">🎆</div>
          <div className="floating-element element-7">🐉</div>
          <div className="floating-element element-8">🌺</div>
        </>
      );
    }
  };

  return (
    <div className={`holiday-background ${holidayTheme}-theme`}>
      <svg className="pattern-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {holidayTheme === 'normal' && (
            <pattern id="chessPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="rgba(245, 222, 179, 0.05)" />
              <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(139, 69, 19, 0.1)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(139, 69, 19, 0.1)" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="rgba(139, 69, 19, 0.15)" />
            </pattern>
          )}
          
          {holidayTheme === 'christmas' && (
            <pattern id="christmasPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="rgba(0, 100, 0, 0.03)" />
              <text x="10" y="30" fontSize="30" opacity="0.1">🎄</text>
              <text x="70" y="80" fontSize="25" opacity="0.08">⭐</text>
            </pattern>
          )}
          
          {holidayTheme === 'tet' && (
            <pattern id="tetPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="rgba(255, 215, 0, 0.03)" />
              <text x="10" y="30" fontSize="30" opacity="0.1">🌸</text>
              <text x="70" y="80" fontSize="25" opacity="0.08">🏮</text>
            </pattern>
          )}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${holidayTheme}Pattern)`} />
      </svg>
      
      <div className="floating-elements">
        {renderFloatingElements()}
      </div>
    </div>
  );
};

export default HolidayBackground;
