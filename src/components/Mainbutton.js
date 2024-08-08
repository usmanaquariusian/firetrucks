// src/components/MainButton.js
import React from 'react';
import { Box, Button } from '@mui/material';

const Mainbutton = ({ onClick, text, background = '#121212', hoverBackground = '#12121280', textColor = '#8e8e8e' }) => {
  return (
    <Box
      textAlign="center"
      sx={{
        width: '70%',
        borderTop: '4px solid #8e8e8e',
        paddingTop: '1px',
        borderRadius: '1px',
      }}
    >
      <Button
        variant='contained'
        sx={{
          background: background,
          textAlign: 'center',
          alignItems: 'center',
          width: '100%',
          color: textColor,
          padding: '5px 20px',
          borderRadius: '1px',
          '&:hover': {
            backgroundColor: hoverBackground,
          },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
  );
};

export default Mainbutton;
