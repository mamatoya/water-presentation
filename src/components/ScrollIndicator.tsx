import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after scrolling
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="scroll-indicator">
      <div className="scroll-arrow">↓</div>
      <div className="scroll-text">Scroll</div>
    </div>
  );
};

export default ScrollIndicator;
