import React from 'react';
import { Grid, Box, Typography, Paper} from '@mui/material';
import styled from 'styled-components';
import { Text } from '../../dist/Styles.jsx'

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 35vh;
  background-image: url('https://image.shutterstock.com/image-photo/abstract-city-building-skyline-metropolitan-260nw-1622580361.jpg');
  background-size: cover;
  margin-bottom: 5vh;
`;
// const Box = styled.div`
  // display: flex;
  // flex-direction: column;
  // text-align: center;
  // justify-content:space-evenly;
  // width: 40%;
  // height: 100%;
// `;
const Item = styled.div`
  display: flex;
  height: 15%;
  padding-left: 2%;
  align-items: center;
  background-color: #0C0A22;
  border: thick double #39C5FE;
  color: #F3F3F3;
`;

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
      variant="outlined"
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
      variant="outlined"
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
        backgroundImage: "url('/background_2.png')",
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
