import React from "react";
import styled from "styled-components";
import Burger from "./burger";
import LogoButton from "../../uikit/logobutton";
import { breakpoints } from "@/constants/media";

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0;
  display: flex;
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  }
`;

export default function SecondHeader() {
  return (
    <Nav>
      <div className="navContainer">
        <LogoButton
          route="/inicio"
          imageLink="/assets/logos/LogoHistoriasAzul.svg"
          size="125.2px"
        />
        <Burger />
      </div>
    </Nav>
  );
}
