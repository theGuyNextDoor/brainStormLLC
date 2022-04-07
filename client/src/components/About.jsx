import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      component="div"
      id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'right',
        height: '100vh',
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        paddingRight: '10%',
        marginottom: '5vh',
      }}
    >
      <Typography sx={{ textShadow: '0 0 3px #39C5FE, 0 0 5px #FFF' }}>welcome / short description</Typography>
    </Box>
  );
}

export default About;
