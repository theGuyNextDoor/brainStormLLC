import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import renovation1 from '../../dist/images/renovation1.jpg';
import renovation2 from '../../dist/images/renovation2.jpg';
import renovation3 from '../../dist/images/renovation3.jpg';
import renovation4 from '../../dist/images/renovation4.jpg';

import instillation1 from '../../dist/images/instillation1.jpg';
import instillation2 from '../../dist/images/instillation2.jpg';
import instillation3 from '../../dist/images/instillation3.jpg';
import instillation4 from '../../dist/images/instillation4.jpg';
import instillation5 from '../../dist/images/instillation5.jpg';
import instillation6 from '../../dist/images/instillation6.jpg';

const renovationData = [
  { name: 'image 1', img: renovation1 },
  { name: 'image 2', img: renovation2 },
  { name: 'image 3', img: renovation3 },
  { name: 'image 4', img: renovation4 },
];

const instillationData = [
  { name: 'image 1', img: instillation1 },
  { name: 'image 2', img: instillation2 },
  { name: 'image 3', img: instillation3 },
  { name: 'image 4', img: instillation4 },
  { name: 'image 5', img: instillation5 },
  { name: 'image 6', img: instillation6 },
];

function PhotoGallery({ title }) {
  const [featured, setFeatured] = useState({});

  function makeFeaturedImage(img, name) {
    setFeatured({ img, name });
  }

  const renovation = renovationData.map((item, index) => {
    const { name, img } = item;
    return (
      <Grid
        key={index}
        item
        component="img"
        src={img} alt={name}
        onClick={() => makeFeaturedImage(img, name)}
        sx={{ height: '90%', width: '25%' }}
      />
    );
  });

  const instillation = instillationData.map((item, index) => {
    const { name, img } = item;
    return (
      <Grid
        key={index}
        item
        xs={3}
        component="img"
        src={img} alt={name}
        onClick={() => makeFeaturedImage(img, name)}
        sx={{ height: '90%', width: '25%' }}
      />
    );
  });

  useEffect(() => {
    if (title === 'Renovation') {
      setFeatured({ img: renovation[0].img, name: renovation[0].name });
    }
    if (title === 'Instillation') {
      setFeatured({ img: instillation[0].img, name: instillation[0].name });
    }
  }, [title]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: 300, padding: 2 }}
    >
      {featured.img ? (
        <Box
          component="img"
          src={featured.img}
          alt={featured.name}
          sx={{ height: '100%', width: '30%' }}
        />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '30%' }}>
          <Typography>Select an image</Typography>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100%',
        }}
      >
        <Grid container sx={{ height: '50%' }}>
          {title === 'Renovation' && renovation}
          {title === 'Instillation' && instillation}
        </Grid>
      </Box>
    </Grid>
  );
}

export default PhotoGallery;
