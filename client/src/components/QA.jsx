import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const questionsData = [
  'this is a dummy question 1?',
  'this is a dummy question 2?',
  'this is a dummy question 3?',
  'this is a dummy question 4?',
];
const answersData = [
  'this is a dummy answer question 1',
  'this is a dummy answer question 2',
  'this is a dummy answer question 3',
  'this is a dummy answer question 4',
];

function QA() {
  const questions = questionsData.map((item, index) => (
    <Paper
      key={index}
      elevation={6}
      sx={{
        width: '100%',
        color: '#FFF',
        backgroundColor: '#0C0A22',
        padding: 1,
        marginBottom: '2%',
      }}
    >
      <Typography>{item}</Typography>
    </Paper>
  ));

  const answers = answersData.map((item, index) => (
    <Paper
      key={index}
      elevation={6}
      sx={{
        width: '100%',
        color: '#FFF',
        backgroundColor: '#0C0A22',
        padding: 1,
        marginBottom: '2%',
      }}
    >
      <Typography>{item}</Typography>
    </Paper>
  ));

  return (
    <Grid
      id="questions"
      container
      justifyContent="space-around"
      sx={{
        padding: 2,
        height: 300,
        color: '#FFF',
        backgroundImage: "url('/images/background_2.png')",
        backgroundSize: 'cover',
      }}
    >
      <Grid item xs={5} container direction="column" alignItems="center">
        <Typography variant="h5">Questions</Typography>
        {questions}
      </Grid>
      <Grid item xs={5} container direction="column" alignItems="center">
        <Typography variant="h5">Answers</Typography>
        {answers}
      </Grid>
    </Grid>
  );
}

export default QA;
