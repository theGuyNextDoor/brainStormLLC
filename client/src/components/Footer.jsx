import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  border-bottom: solid;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return (
    <Container>
      <Box>
        <img src="" alt="Logo" />
        <span>Additional text</span>
      </Box>
      <Box>
        <span>Company name</span>
        <span>Phone</span>
        <span>Email</span>
        <span>Social links</span>
      </Box>
    </Container>
  );
}

export default Footer;
