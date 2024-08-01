// src/components/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(17, 17, 17, 1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderTop: '3px solid white', // 3px top border
  borderRight: 'none',
  borderBottom: 'none',
  borderLeft: 'none',
  color: 'white', // Assuming var(--tds-color-ct-h2) is white
  fontSize: '14px', // Assuming var(--tds-font-size-20) is 20px
  fontStyle: 'normal',
  fontWeight: 500, // Assuming var(--tds-font-weight-bold, 500) is 500
  height: '35px', // Assuming var(--tds-size-5x) is 50px
  letterSpacing: '1.2px',
  lineHeight: 'normal',
  marginTop: '4px',
  opacity: 0.9, // Assuming var(--tds-btn--default-opacity) is 0.9
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: 0, // Removing curved corners
  padding: '3px 0px 0px 0px', // Adding padding inside the button
  '&:hover': {
    backgroundColor: 'rgba(17, 17, 17, 0.10)',
  },
}));

const CustomButton = ({ children }) => {
  return (
    <StyledButton variant="contained">
      {children}
    </StyledButton>
  );
};

export default CustomButton;
