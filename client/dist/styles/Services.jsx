import styled from 'styled-components';

export const Container = styled.div`
  height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid;

  /* border: solid; */
`;
export const Title = styled.span` // MAYBE MAKE A GLOBAL STYLE
  flex: 1;
`;

export const SvcContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;

  /* border: solid; */
`;

export const SvcBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Img = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
`;

export const Text = styled.span``; // MAYBE MAKE A GLOBAL STYLE
