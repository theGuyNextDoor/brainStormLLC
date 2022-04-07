/* eslint-disable import/extensions */
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import service1 from '../../dist/images/renovation1.jpg';
import service2 from '../../dist/images/instillation1.jpg';

const data = [
  { name: 'Renovation', image: service1 },
  { name: 'Instillation', image: service2 },
];

function Services() {
  const svc = data.map((item, index) => {
    const { name, image } = item;
    return (
      <Grid key={index} item xs={3} container direction="column" alignItems="center">
        <Box component="img" src={image} alt="service info" sx={{ width: 150, height: 150, borderRadius: 50 }} />
        <Typography>{name}</Typography>
      </Grid>
    );
  });

  return (
    <Grid
      id="services"
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: 2, height: 300 }}
    >
      <Typography variant="h3">Why Choose Us?</Typography>
      <Grid container justifyContent="center">
        {svc}
      </Grid>

    </Grid>
  );
}

export default Services;
