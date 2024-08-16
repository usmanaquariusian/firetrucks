// src/components/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from '../content/images/Cybertruck-Main.avif';
import Mainbutton from './Mainbutton';

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
    <Box 
  display="flex" 
  flexDirection="column" 
  alignItems="center" 
  textAlign="center"
>
  <Typography variant="h2" marginBottom={40}>Cybertruck</Typography>
  <Mainbutton 
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
