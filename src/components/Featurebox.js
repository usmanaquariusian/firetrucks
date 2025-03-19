// src/components/Featurebox.js
// src/components/Featurebox.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Featurebox = ({
  borderTop = '1px solid white',
  borderLeft = 'none',
  paddingTop = '10px',
  paddingLeft = '10px',
  width = '100%',
  title,
  description,
  secondaryDescription, // New prop for secondary description
  titleColor = '#c7c7c7',
  descriptionColor = '#A2A3A5',
  titleFontSize = '28px',
  descriptionFontSize = '12px'
}) => {
  return (
    <Box
      sx={{
        borderTop: borderTop,
        borderLeft: borderLeft,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        width: width,
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          background: 'rgba(57, 60, 65, 0.7)', // Transparent background
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex', // Align children horizontally
            flexDirection: 'row', // Arrange children in a row
            alignItems: 'center', // Center items vertically
            justifyContent: 'center', // Center items horizontally
            gap: '8px', // Space between the title and description
          }}
        >
          <Typography variant="h6" sx={{ color: titleColor, fontSize: titleFontSize }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: descriptionColor, fontSize: descriptionFontSize }}>
            {description}
          </Typography>
        </Box>
        {secondaryDescription && ( // Conditionally render the secondary description if provided
          <Typography variant="body1" sx={{ color: descriptionColor, fontSize: descriptionFontSize }}>
            {secondaryDescription}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Featurebox;

