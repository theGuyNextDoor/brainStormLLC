import styled from 'styled-components';

export const NavBar = styled.header`
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 0 1em;
  border-top: solid;
  border-bottom: solid;
`;
export const Logo = styled.span`
  flex: 1;
`;
export const Menu = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;

  /* border: solid; */
`;

export const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  /* justify-content: space-evenly; */

  /* border: solid; */
`;
