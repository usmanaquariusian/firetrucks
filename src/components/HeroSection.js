// src/components/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Main.avif';
import MainButton from './MainButton';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2">Cybertruck</Typography>
        <MainButton 
          text="Order Now" 
          background="#121212" 
          hoverBackground="#12121280" 
          textColor="#8e8e8e"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
