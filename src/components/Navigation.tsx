import React from 'react';
import './Navigation.css';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}) => {
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="navigation">
      <button
        className="nav-btn"
        onClick={onPrevious}
        disabled={isFirstSlide}
      >
        ← Previous
      </button>
      <button
        className="nav-btn"
        onClick={onNext}
        disabled={isLastSlide}
      >
        Next →
      </button>
    </div>
  );
};

export default Navigation;
