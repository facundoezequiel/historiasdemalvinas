import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
  width: 70%;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 0px solid #000000;
  cursor: pointer;
  font-family: var(--proximasoft);
  font-weight: 600;
  padding: 3.7% 0% 3.7% 0%;
  color: var(--white);
  background-color: var(--orange);
  letter-spacing: 0.07em;
  font-size: 0.85em;
  margin-top: 6%;
  transition: 0.2s;

  :hover {
    background-color: var(--inputgray);
    color: var(--inputgrayfont);
  }

  ${(props) =>
    props.backgroundColor === "blue" &&
    css`
      background-color: var(--blue);
      color: var(--white);
    `}

  ${(props) =>
    props.backgroundColor === "orange" &&
    css`
      background-color: var(--orange);
      color: var(--white);
    `}

    ${(props) =>
      props.design === "homeSearch" &&
      css`
        width: 23%;
        margin-right: 5%;
        margin-left: 0% !important;
        padding: 1.5% 0% 1.5% 0%;
      `}

    ${(props) =>
      props.design === "homeGrid" &&
      css`
        width: 35%;
        margin: 0%;
        margin-left: 8% !important;
        padding: 2.3% 0% 2.3% 0%;
      `}
`;

export { ButtonContainer };
