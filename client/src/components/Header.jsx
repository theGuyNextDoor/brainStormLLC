/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const NavBar = styled.header`
  position: fixed;
  height: 5vh;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-right 5;
  padding-left: 5; */
  border-top: solid;
  border-bottom: solid;
`;
const Logo = styled.span`
  flex: 1;
`;
const Menu = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;

  /* border: solid; */
`;

const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  /* justify-content: space-evenly; */

  /* border: solid; */
`;

function Header() {
  return (
    <NavBar>
      <Logo>logo</Logo>
      <Menu>
        <span>home</span>
        <span>about</span>
        <span>services</span>
        <span>projects</span>
        <span>contact</span>
      </Menu>
      <Contact>
        <span>email</span>
        <span>phone</span>
      </Contact>
    </NavBar>
  );
}

export default Header;
