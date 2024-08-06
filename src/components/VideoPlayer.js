import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getClipPath = (clip) => {
  const { topLeft, topRight, bottomRight, bottomLeft } = clip;
  return `polygon(
    0% ${topLeft[0]}%, ${topLeft[1]}% 0%,
    ${100 - topRight[1]}% 0%, 100% ${topRight[0]}%,
    100% ${100 - bottomRight[0]}%, ${100 - bottomRight[1]}% 100%,
    ${bottomLeft[1]}% 100%, 0% ${100 - bottomLeft[0]}%
  )`;
};

const VideoContainer = styled.div`
  width: 1350px; // Fixed width for larger screens
  height: 900px; // Fixed height for larger screens
  overflow: hidden;
  background: black;
  clip-path: ${(props) => getClipPath(props.clip)};

  @media (max-width: 1700px) {
    width: 100%; // Full width for smaller screens
    height: auto; // Maintain aspect ratio
  }

  video { 
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayPauseButton = styled.button`
  bottom: 20px;
  left: 50px;
  transform: translateX(10%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 20px;
  cursor: pointer;
  display: ${(props) => (props.showButton ? 'block' : 'none')};
`;

const VideoPlayer = ({ src, type, showButton, clip }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <VideoContainer clip={clip}>
      <video ref={videoRef} onClick={togglePlayPause}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      <PlayPauseButton showButton={showButton} onClick={togglePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </PlayPauseButton>
    </VideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  clip: PropTypes.shape({
    topLeft: PropTypes.arrayOf(PropTypes.number),
    topRight: PropTypes.arrayOf(PropTypes.number),
    bottomRight: PropTypes.arrayOf(PropTypes.number),
    bottomLeft: PropTypes.arrayOf(PropTypes.number),
  }),
};

VideoPlayer.defaultProps = {
  showButton: true,
  clip: {
    topLeft: [0, 0],
    topRight: [0, 0],
    bottomRight: [0, 0],
    bottomLeft: [0, 0],
  },
};

export default VideoPlayer;
