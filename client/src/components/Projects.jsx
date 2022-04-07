/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhotoGallery from './PhotoGallery.jsx';
import projectOneImg from '../../dist/images/renovation1.jpg';
import projecttwoImg from '../../dist/images/instillation1.jpg';

const projectData = [
  { title: 'Renovation', img: projectOneImg },
  { title: 'Instillation', img: projecttwoImg },
];

function Projects() {
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  const titles = projectData.map((item, index) => (
    <Typography
      key={index}
      variant="h5"
      sx={{ color: currentProjectImage === index && '#39C5FE' }}
    >
      {item.title}
    </Typography>
  ));

  const images = projectData.map((item, index) => {
    const { title, img } = item;
    return (
      <Box component="img" key={index} src={img} alt={title} sx={{ width: '40%', height: '40%' }} />
    );
  });

  function nextProject() {
    if (currentProjectImage === titles.length - 1) {
      setCurrentProjectImage(0);
    } else {
      setCurrentProjectImage(currentProjectImage + 1);
    }
  }
  function prevProject() {
    if (currentProjectImage === 0) {
      setCurrentProjectImage(titles.length - 1);
    } else {
      setCurrentProjectImage(currentProjectImage - 1);
    }
  }

  return (
    <Grid id="projects" container justifyContent="center" alignItems="center" sx={{ height: 600, padding: 2 }}>

      <Grid item xs={4} container direction="column" alignItems="center">
        {titles}
      </Grid>

      <Grid item container alignItems="center" justifyContent="center" xs={4}>
        <ArrowBackIosNewIcon onClick={prevProject} />
        {images[currentProjectImage]}
        <ArrowForwardIosIcon onClick={nextProject} />
      </Grid>

      <PhotoGallery title={projectData[currentProjectImage].title} />

    </Grid>
  );
}

export default Projects;
