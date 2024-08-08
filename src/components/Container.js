import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Container = ({ children, borderColor, borderSizes, clip, backgroundColor }) => {
  const { topLeft, topRight, bottomRight, bottomLeft } = clip;
  const { topLeft: topLeftBorder, topRight: topRightBorder, bottomRight: bottomRightBorder, bottomLeft: bottomLeftBorder } = borderSizes;

  const clipPath = `polygon(
    ${topLeft[0]}% ${topLeft[1]}%, 
    ${100 - topRight[0]}% ${topRight[1]}%, 
    ${100 - bottomRight[0]}% ${100 - bottomRight[1]}%, 
    ${bottomLeft[0]}% ${100 - bottomLeft[1]}%
  )`;

  const containerStyles = {
    backgroundColor,
    padding: '10px',
    position: 'relative',
    clipPath,
    background: `
      linear-gradient(to right, ${borderColor} ${topLeftBorder}, transparent ${topLeftBorder}) top right, /* Top border */
      linear-gradient(to bottom, ${borderColor} ${topRightBorder}, transparent ${topRightBorder}) top left, /* Right border */
      linear-gradient(to left, ${borderColor} ${bottomRightBorder}, transparent ${bottomRightBorder}) bottom left, /* Bottom border */
      linear-gradient(to top, ${borderColor} ${bottomLeftBorder}, transparent ${bottomLeftBorder}) bottom right /* Left border */
    `,
    backgroundSize: '100% 1px, 1px 100%, 100% 1px, 1px 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left, top right, bottom right, bottom left',
  };

  return <Box sx={containerStyles}>{children}</Box>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
  borderSizes: PropTypes.shape({
    topLeft: PropTypes.string,
    topRight: PropTypes.string,
    bottomRight: PropTypes.string,
    bottomLeft: PropTypes.string,
  }),
  clip: PropTypes.shape({
    topLeft: PropTypes.arrayOf(PropTypes.number),
    topRight: PropTypes.arrayOf(PropTypes.number),
    bottomRight: PropTypes.arrayOf(PropTypes.number),
    bottomLeft: PropTypes.arrayOf(PropTypes.number),
  }),
  backgroundColor: PropTypes.string,
};

Container.defaultProps = {
  borderColor: '#393c41',
  borderSizes: {
    topLeft: '1px',
    topRight: '1px',
    bottomRight: '1px',
    bottomLeft: '1px',
  },
  clip: {
    topLeft: [0, 0],
    topRight: [0, 0],
    bottomRight: [0, 0],
    bottomLeft: [0, 0],
  },
  backgroundColor: '#f0f0f004',
};

export default Container;
