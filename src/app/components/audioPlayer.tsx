"use client"

// components/AudioPlayer.tsx
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative bg-pink-300 w-14 h-14 rounded-full">
      <audio ref={audioRef} preload="auto">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleAudio}
        className="absolute top-0 left-0 bg-transparent border-none cursor-pointer"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-4xl absolute left-4 top-3" />
      </button>
    </div>
  );
};

export default AudioPlayer;
