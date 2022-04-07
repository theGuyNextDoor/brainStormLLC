import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  height: 100vh;
  width: 100vw;
  background-image: url('/background.jpg');
  background-size: cover;
  padding-right: 10%;
  margin-bottom: 5vh;
`;
const Text = styled.span`
  text-shadow: 0 0 3px #39C5FE, 0 0 5px #FFF;
  /* color: #39C5FE; */
`;

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
