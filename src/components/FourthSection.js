import React from 'react';
import { Box, Typography } from '@mui/material';
import '../App.css'; // Optional: for external CSS


const FourthSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        color: 'white',
        padding: '20px',
      }}
    >
   <div className="grid-container">
      <div className="grid-item1">1</div>
      <div className="grid-item2">2</div>
      <div className="grid-item3">3</div>
      <div className="grid-item4">4</div>
    </div>
</Box>

);
};
export default FourthSection;
