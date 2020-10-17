import styled, { css } from "styled-components";

const LogoContainer = styled.img`
  width: 100%;
`;

const LogoRoute = styled.a`
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.size === "8.7" &&
    css`
      width: 8.7%;
    `}

  ${(props) =>
    props.size === "125.2px" &&
    css`
      width: 125.2px;
      min-width: 125.2px !important;
    `}

  ${(props) =>
    props.size === "10" &&
    css`
      width: 10%;
    `}

  ${(props) =>
    props.size === "11" &&
    css`
      width: 11%;
    `}

  ${(props) =>
    props.size === "16" &&
    css`
      width: 16%;
    `}
`;

export { LogoContainer, LogoRoute };
