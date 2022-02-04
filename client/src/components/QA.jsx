import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 35vh;
  width: 100vw;
  background-image: url('https://image.shutterstock.com/image-photo/abstract-city-building-skyline-metropolitan-260nw-1622580361.jpg');
  background-size: cover;
  border-bottom: solid;
  margin-bottom: 2em;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 70%;
  border: solid;
`;

function QA() {
  return (
    <Background>
      <Box>questions</Box>
      <Box>answers</Box>
    </Background>
  );
}

export default QA;
