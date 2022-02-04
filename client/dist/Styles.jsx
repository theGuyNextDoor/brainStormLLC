import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColContainer = styled.div`
  height: 35vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid;

  /* border: solid; */`;

export const RowContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 35vh;
  border-bottom: solid;
  /* margin-bottom: 2em; */
  `;
