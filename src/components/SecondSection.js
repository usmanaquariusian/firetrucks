// src/components/SecondSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Second-Hero-Desktop.jpg';

const SecondSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white',
        padding: '20px',
      }}
    >
      <Box display="flex" justifyContent="space-around" mb={2}>
        <Box 
          sx={{
            border: '1px solid white', 
            padding: '20px',
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Feature 1</Typography>
          <Typography variant="body1">Description of feature 1.</Typography>
        </Box>
        <Box 
          sx={{
            border: '1px solid white', 
            padding: '20px',
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Feature 2</Typography>
          <Typography variant="body1">Description of feature 2.</Typography>
        </Box>
        <Box 
          sx={{
            border: '1px solid white', 
            padding: '20px',
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Feature 3</Typography>
          <Typography variant="body1">Description of feature 3.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
