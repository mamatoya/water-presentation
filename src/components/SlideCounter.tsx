import React from 'react';
import './SlideCounter.css';

interface SlideCounterProps {
  currentSlide: number;
  totalSlides: number;
}

const SlideCounter: React.FC<SlideCounterProps> = ({ currentSlide, totalSlides }) => {
  return (
    <div className="slide-counter">
      <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
    </div>
  );
};

export default SlideCounter;
