import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { default as NextLink } from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/uikit/title";
import LogoButton from "../../uikit/logobutton";

const BackHeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0;
  display: flex;
  align-items: center;
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

  .navContainer div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 80px 0px 0px;
  }

  .backArrow {
    font-size: 1.3em;
    color: var(--black);
  }

  a p {
    margin: 0px 0px 0px 13px;
    color: var(--black);
    font-size: 0.77em !important;
    font-family: var(--poppins);
    font-weight: 400;
  }
`;

export default function BackHeader({ text }) {
  return (
    <BackHeaderContainer>
      <div className="navContainer">
        <div>
          <LogoButton
            route="/inicio"
            imageLink="./assets/logos/LogoHistoriasAzul.svg"
            size="125.2px"
          />
          <Title texto={text} level={4} />
        </div>
        <NextLink href="/inicio">
          <a>
            <FontAwesomeIcon icon={faArrowLeft} className="backArrow" />
            <p>Volver al inicio</p>
          </a>
        </NextLink>
      </div>
    </BackHeaderContainer>
  );
}
