import React from 'react';
import styled from 'styled-components';
import { Text } from '../../dist/Styles.jsx'

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 35vh;
  width: 100%;
  background-image: url('/background-2.png');
  background-position: center;
  background-size: cover;
  margin-bottom: 5vh;
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
  border: thick double #F3F3F3;
  color: #F3F3F3;
`;

const questionsData = [
  'this is a dummy question 1?',
  'this is a dummy question 2?',
  'this is a dummy question 3?',
  // 'this is a dummy question 4?',
];
const answersData = [
  'this is a dummy answer question 1',
  'this is a dummy answer question 2',
  'this is a dummy answer question 3',
  // 'this is a dummy answer question 4',
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
    <Background id="questions">
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
