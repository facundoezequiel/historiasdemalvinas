import React from 'react';
import styled from 'styled-components';
import Burger from "./burger"
import LogoButton from "../../uikit/logobutton";


const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0;
  display: flex;
  position: fixed;
  top: 0 !important;
  z-index: 99;
  backdrop-filter: saturate(180%) blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  height: 60px;

  .navContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="navContainer">
        <LogoButton
            route="/"
            imageLink="./assets/logos/LogoHistoriasAzul.svg"
            size="125.2px"
          />
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar
