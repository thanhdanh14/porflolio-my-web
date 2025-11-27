import { useEffect, useState } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const currentTime = Date.now();
      // Throttle trail creation to every 30ms for better performance
      if (currentTime - lastTime > 30) {
        const newTrail = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        
        setTrails(prev => [...prev.slice(-15), newTrail]); // Keep last 15 trails
        lastTime = currentTime;
      }
    };

    // Cleanup old trails
    const cleanupTrails = () => {
      setTrails(prev => {
        const now = Date.now();
        return prev.filter(trail => now - trail.id < 1000);
      });
      animationFrameId = requestAnimationFrame(cleanupTrails);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(cleanupTrails);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="cursor-dot"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      
      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trails.length,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
