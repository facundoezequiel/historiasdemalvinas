import styled, { css } from "styled-components";

const ImageContainer = styled.img`
  width: 100%;

  ${(props) =>
    props.design === "headerProfile" &&
    css`
      display: block;
      border-radius: 200px 200px 200px 200px;
      -moz-border-radius: 200px 200px 200px 200px;
      -webkit-border-radius: 200px 200px 200px 200px;
      border: 0px solid #000000;
    `}

  ${(props) =>
    props.design === "coverHome" &&
    css`
      display: block;
      border: 0px solid #000000;
      -moz-user-select: none;
      -ms-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    `}

    ${(props) =>
    props.design === "coverCard" &&
    css`
      display: block;
      border: 0px solid #000000;
      width: 100%;
      height: 30%;
      object-fit: cover;
      border-radius: 7px 7px 0px 0px;
      -moz-border-radius: 7px 7px 0px 0px;
      -webkit-border-radius: 7px 7px 0px 0px;
      margin: 0 auto;
    `}

    ${(props) =>
    props.design === "firmaRegistro" &&
    css`
      display: block;
      border: 0px solid #000000;
      width: 100%;
      object-fit: cover;
      margin-top: 5%;
      margin-left: 60%;
    `}

    ${(props) =>
    props.design === "imagenPerfilHeader" &&
    css`
      display: block;
      border: 0px solid #000000;
      border-radius: 200px 200px 200px 200px;
      -moz-border-radius: 200px 200px 200px 200px;
      -webkit-border-radius: 200px 200px 200px 200px;
    `}

    ${(props) =>
    props.design === "imagenPerfil" &&
    css`
      display: block;
      border: 0px solid #000000;
      border-radius: 200px 200px 200px 200px;
      -moz-border-radius: 200px 200px 200px 200px;
      -webkit-border-radius: 200px 200px 200px 200px;
      object-fit: cover;
    `}  

    ${(props) =>
    props.size === "5" &&
    css`
      object-fit: cover;
      display: block;
      width: 27px;
      height: 27px;
    `}

    ${(props) =>
    props.size === "10" &&
    css`
      display: block;
      object-fit: contain;
      width: 10%;
    `}

    ${(props) =>
    props.size === "13" &&
    css`
      display: block;
      object-fit: contain;
      width: 13%;
    `}

    ${(props) =>
    props.size === "15" &&
    css`
      display: block;
      width: 250px;
      height: 250px;
    `}

    ${(props) =>
    props.size === "25" &&
    css`
      display: block;
      object-fit: contain;
      width: 25%;
    `}

    ${(props) =>
    props.size === "95.7" &&
    css`
      width: 95.7%;
      display: block;
    `}
`;

export { ImageContainer };
