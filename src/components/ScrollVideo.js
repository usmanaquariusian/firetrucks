import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollVid from '../content/videos/ft.mp4';
import VidImage from '../content/images/vidcover.JPG';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background: #fff;
  transition: width 0.3s ease;
  width: ${(props) => (props.$progress / 7) * 100}%;
`;

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const handleWheel = (event) => {
        event.preventDefault();
        if (isPlaying) return;

        const { deltaY } = event;
        const newScrollIndex = Math.min(
          8,
          Math.max(0, scrollIndex + (deltaY > 0 ? 1 : -1))
        );

        if (newScrollIndex !== scrollIndex) {
          setScrollIndex(newScrollIndex);
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isInView, isPlaying, scrollIndex]);

  useEffect(() => {
    const video = videoRef.current;

    if (video && scrollIndex > 0 && scrollIndex <= 7) {
      setIsPlaying(true);
      video.currentTime = (scrollIndex - 1) * 3;
      video.play();
      const timeout = setTimeout(() => {
        video.pause();
        setIsPlaying(false);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (scrollIndex === 8) {
      const nextSection = containerRef.current.nextElementSibling;
      if (nextSection) {
        setScrollIndex(9); // To ensure it doesn't keep transitioning
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (scrollIndex === 0) {
      const prevSection = containerRef.current.previousElementSibling;
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollIndex]);

  return (
    <VideoWrapper ref={containerRef}>
      <video
        ref={videoRef}
        muted
        preload="metadata"
        poster={VidImage}
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src={ScrollVid} type="video/mp4" />
      </video>
      <ProgressBar $progress={scrollIndex} />
    </VideoWrapper>
  );
};

export default ScrollVideo;
