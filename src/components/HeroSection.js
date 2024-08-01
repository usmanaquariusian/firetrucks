// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Main.avif';

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
        <Button variant='contained'>Order Now</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
