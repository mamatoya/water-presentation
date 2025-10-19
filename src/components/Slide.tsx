import React from 'react';
import type { SlideContent } from '../types';
import { teamMembers } from '../slidesData';
import TeamGrid from './TeamGrid';
import './Slide.css';

interface SlideProps {
  slide: SlideContent;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  return (
    <div className={`slide ${isActive ? 'active' : ''} ${slide.type === 'team' ? 'slide-team' : ''}`}>
      {slide.type === 'title' && (
        <>
          <h1>{slide.title}</h1>
          <h2>{slide.subtitle}</h2>
          {slide.tagline && <p className="tagline">{slide.tagline}</p>}
          {slide.content}
        </>
      )}

      {slide.type === 'team' && (
        <>
          <h2>{slide.title}</h2>
          <TeamGrid members={teamMembers} />
        </>
      )}

      {slide.type === 'content' && (
        <>
          <h2>{slide.title}</h2>
          {slide.content}
        </>
      )}

      {slide.type === 'data' && (
        <>
          <h2>{slide.title}</h2>
          {slide.content}
        </>
      )}
    </div>
  );
};

export default Slide;
