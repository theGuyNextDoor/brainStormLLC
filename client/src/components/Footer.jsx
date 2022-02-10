import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2%;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2%;
`;
const Socials = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 10%;
  height: 80%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function Footer() {
  return (
    <Container id="contact">
      <Logo>
        <img src="" alt="Logo" />
        <span>Additional text</span>
      </Logo>
      <Contact>
        <span>Company name</span>
        <span>email: fakeemail@company.com</span>
        <span>phone: (415) 666-6666</span>
        <Socials>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png" alt="instagram" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="facebook" />
          <Image src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" alt="twitter" />
        </Socials>
      </Contact>
    </Container>
  );
}

export default Footer;
