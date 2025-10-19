import React, { useState, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop autoPlay>
        <source src="/Desert Water AI music rough draft.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
};

export default AudioPlayer;
