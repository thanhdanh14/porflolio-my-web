import { motion } from 'framer-motion';
import './FloatingShapes.css';

const FloatingShapes = () => {
  const shapes = [
    { size: 100, duration: 20, delay: 0, left: '10%', top: '20%' },
    { size: 150, duration: 25, delay: 2, left: '80%', top: '10%' },
    { size: 80, duration: 18, delay: 4, left: '70%', top: '70%' },
    { size: 120, duration: 22, delay: 1, left: '20%', top: '80%' },
    { size: 90, duration: 19, delay: 3, left: '50%', top: '50%' },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
