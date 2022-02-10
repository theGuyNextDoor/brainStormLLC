/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
// import logo from '../../dist/Logo.png';

const NavBar = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  height: 5vh;
  width: 99vw;
  background-color: #0C0A22;
  color: #39C5fE;
`;
const Logo = styled.div`
  flex: 1;
  padding-left: 2%;
`;
const Menu = styled.div`
  /* position: fixed; // Here */
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;
const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  text-align: right;
  padding-right: 2%;
`;

function Header() {
  return (
    <NavBar>
      <Logo>
        <img src="https://files.slack.com/files-pri/T02RU5518NT-F0328P0BK8A/20085_phillip_tsang_jt_1-01.jpg" alt="Logo" />
      </Logo>
      <Menu>
        <span><a href="#about">about</a></span>
        <span>services</span>
        <span>projects</span>
        <span><a href="#contact">contact</a></span>
      </Menu>
      <Contact>
        <span>email: fakeemail@company.com</span>
        <span>phone: (415) 666-6666</span>
      </Contact>
    </NavBar>
  );
}

export default Header;
