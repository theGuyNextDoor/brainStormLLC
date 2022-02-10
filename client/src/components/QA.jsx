import React from 'react';
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
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content:space-evenly;
  width: 40%;
  height: 100%;
`;
const Item = styled.div`
  display: flex;
  height: 15%;
  padding-left: 2%;
  align-items: center;
  background-color: #0C0A22;
  border: thick double #D22FFF;
  color: #39C5FE;
  /* justify-content: center; */
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
  const questions = questionsData.map((item, index) => {
    return (
      <Item key={index}>
        <span>{item}</span>
      </Item>
    )
  });
  const answers = answersData.map((item, index) => {
    return (
      <Item key={index}>
        <span>{item}</span>
      </Item>
    )
  });
  return (
    <Background>
      <Box>
        <Text>questions</Text>
        {questions}
      </Box>
      <Box>
        <Text>answers</Text>
        {answers}
      </Box>
    </Background>
  );
}

export default QA;
