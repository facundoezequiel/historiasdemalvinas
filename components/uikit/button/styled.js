import styled, { css } from "styled-components";
import { breakpoints } from "@/constants/media";

/* Principal container */
const ButtonContainer = styled.button`
  width: 70%;
  border-radius: 7px 7px 7px 7px;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border: 0px solid #000000;
  cursor: pointer;
  font-family: var(--inter);
  font-weight: 600;
  padding: 3.7% 0% 3.7% 0%;
  color: var(--white);
  background-color: var(--orange);
  letter-spacing: 0.07em;
  font-size: 0.8em;
  margin-top: 6%;
  transition: all 0.2s;

  :hover {
    transform: scale(1.07);
  }

  /* Props principal container */
  /* Color props */
  ${(props) =>
    props.backgroundColor === "blue" &&
    css`
      background: #105cff;
      background: -moz-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
      background: -webkit-gradient(
        left bottom,
        right top,
        color-stop(0%, #105cff),
        color-stop(100%, #05cdff)
      );
      background: -webkit-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
      background: -o-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
      background: -ms-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
      background: linear-gradient(45deg, #105cff 0%, #05cdff 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#105cff', endColorstr='#05cdff', GradientType=1 );
      color: var(--white);
    `}

  ${(props) =>
    props.backgroundColor === "orange" &&
    css`
      background: #ff6a00;
      background: -moz-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
      background: -webkit-gradient(
        left bottom,
        right top,
        color-stop(0%, #ff6a00),
        color-stop(100%, #ffbb00)
      );
      background: -webkit-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
      background: -o-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
      background: -ms-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
      background: linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6a00', endColorstr='#ffbb00', GradientType=1 );
      color: var(--white);
    `}

    ${(props) =>
    props.backgroundColor === "gray" &&
    css`
      background-color: var(--gray);
      color: var(--black);
    `}

    /* Design props */
    ${(props) =>
    props.design === "iniciarSesion" &&
    css`
      width: 70% !important;
      margin: 0 auto;
      margin-top: 6%;
    `}

    ${(props) =>
    props.design === "homeSearch" &&
    css`
      width: 23%;
      margin-right: 2.5%;
      margin-left: 2.5%;
      padding: 2.5% 1.5% 2.5% 1.5%;

      @media (max-width: ${breakpoints.mobile}) {
        width: 37.5%;
        padding: 3.5% 1.5% 3.5% 1.5%;
      }
    `}

    ${(props) =>
    props.design === "homeGrid" &&
    css`
      width: 35%;
      margin: 0%;
      margin-left: 8% !important;
      padding: 4% 0% 4% 0%;
    `}
`;

export { ButtonContainer };
