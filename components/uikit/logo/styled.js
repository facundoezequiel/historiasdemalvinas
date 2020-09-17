import styled, { css } from "styled-components";

const LogoContainer = styled.img`
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;

  ${(props) =>
    props.size === "2" &&
    css`
      width: 2%;
    `}

  ${(props) =>
    props.size === "4" &&
    css`
      width: 4%;
    `}

  ${(props) =>
    props.size === "9" &&
    css`
      width: 9%;
    `}

  ${(props) =>
    props.size === "12" &&
    css`
      width: 12%;
    `}

  ${(props) =>
    props.size === "13" &&
    css`
      width: 13%;
    `}

  ${(props) =>
    props.size === "15" &&
    css`
      width: 15%;
    `}

  ${(props) =>
    props.size === "17" &&
    css`
      width: 17%;
    `}

  ${(props) =>
    props.size === "25" &&
    css`
      width: 25%;
    `}

  ${(props) =>
    props.size === "35" &&
    css`
      width: 35%;
    `}
`;

export { LogoContainer };
