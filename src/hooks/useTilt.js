import { useEffect, useRef } from 'react';

export const useTilt = (options = {}) => {
  const ref = useRef(null);
  const {
    max = 15,
    speed = 400,
    glare = true,
    maxGlare = 0.5,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeout;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      const rotateY = percentX * max;
      const rotateX = -percentY * max;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glare) {
        const glareElement = element.querySelector('.tilt-glare');
        if (glareElement) {
          const glareX = (percentX + 1) * 50;
          const glareY = (percentY + 1) * 50;
          glareElement.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${maxGlare}) 0%, transparent 50%)`;
        }
      }
    };

    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        const glareElement = element.querySelector('.tilt-glare');
        if (glareElement) {
          glareElement.style.background = 'transparent';
        }
      }, speed);
    };

    const handleMouseEnter = () => {
      clearTimeout(timeout);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeout);
    };
  }, [max, speed, glare, maxGlare]);

  return ref;
};
