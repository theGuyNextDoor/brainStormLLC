import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Grid, Box, Typography } from '@mui/material';
import logo from '../../dist/logo.png';

function Header() {
  return (
    <BrowserRouter>
      <Grid container backgroundColor="#0C0A22" color="#FFF" sx={{ position: 'fixed' }}>

        <Grid item container xs={3} alignItems="center">
          <Box component="img" sx={{ width: 50, height: 50, paddingLeft: 5 }} src={logo} alt="Logo" />
        </Grid>

        <Grid item container xs={6} alignItems="center" justifyContent="space-around">
          <Link to="#about" smooth style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography>About</Typography>
          </Link>

          <Link to="#services" smooth style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography>Services</Typography>
          </Link>

          <Link to="#projects" smooth style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography>Projects</Typography>
          </Link>

          <Link to="#contact" smooth style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography>Contact</Typography>
          </Link>
        </Grid>

        <Grid item container xs={3}>
          <Typography>Email: phillip@philltsanggroup.co</Typography>
          <Typography>Phone: (408) 320-8628</Typography>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default Header;
