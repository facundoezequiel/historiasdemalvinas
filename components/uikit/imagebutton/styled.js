import styled, { css } from "styled-components";

const ImageRoute = styled.a`
  width: 100%;

  ${(props) =>
    props.size === "10" &&
    css`
      width: 10%;
      display: block;
    `}

    ${(props) =>
    props.size === "94.6" &&
    css`
      width: 94.6%;
      display: block;
    `}
`;

const ImageContainer = styled.img`
  width: 100%;

  ${(props) =>
    props.design === "headerProfile" &&
    css`
      width: 100%;
      display: block;
      border-radius: 200px 200px 200px 200px;
      -moz-border-radius: 200px 200px 200px 200px;
      -webkit-border-radius: 200px 200px 200px 200px;
      border: 0px solid #000000;
    `}

    ${(props) =>
    props.design === "coverHome" &&
    css`
      width: 100%;
      display: block;
      border: 0px solid #000000;
      -moz-user-select: none;
      -ms-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    `}
`;

export { ImageContainer, ImageRoute };
