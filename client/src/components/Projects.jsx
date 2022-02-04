import React from 'react';
import styled from 'styled-components';
import { RowContainer } from '../../dist/Styles.jsx';

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  height: 70%;

  border: solid;
  `;
const ImgBox = styled.div`
  width: 50%;
  height: 70%;

  border: solid;
`;

const data = ['item 1', 'item 2', 'item 3'];

function Projects() {
  const list = data.map((item, index) => <span key={index}>{item}</span>);

  return (
    <RowContainer>
      <ListBox>
        {list}
      </ListBox>
      <ImgBox>
        <img src="" alt="project" />
      </ImgBox>
    </RowContainer>
  );
}

export default Projects;
