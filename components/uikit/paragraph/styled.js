import styled, { css } from "styled-components";

/* Principal container */
const ParagraphContainer = styled.p`
  font-size: 1em;
  font-family: var(--inter);
  font-size: 0.8em;
  line-height: 26px;
  text-align: left;
  margin: 0 0 0 0;
  font-weight: 400;
  color: var(--black);

  /* Props principal container */
  /* Size proos */
  ${(props) =>
    props.size === "0.8" &&
    css`
      font-size: 0.8em !important;
    `}

  ${(props) =>
    props.size === "0.9" &&
    css`
      font-size: 0.9em !important;
    `}

  ${(props) =>
    props.size === "1" &&
    css`
      font-size: 1.08em !important;
    `}

  /* Design props */
  ${(props) =>
    props.design === "cardTitle" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1.6;
    `}

  ${(props) =>
    props.design === "cardTitleAbstract" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1.6;
      margin-top: 8% !important;
    `}

  ${(props) =>
    props.design === "cardText" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 400;
      letter-spacing: 0.5px;
      line-height: 1.6;
    `}

  ${(props) =>
    props.design === "donationPrice" &&
    css`
      color: var(--black);
      font-size: 0.8em;
      font-weight: 400;
      line-height: 1.6;
      text-align: center;
      font-family: var(--inter);
    `}

  ${(props) =>
    props.design === "registroCarta" &&
    css`
      color: var(--black);
      width: 100%;
      font-weight: 400;
      line-height: 26px;
      text-align: left;
      font-family: var(--inter);
    `}

  ${(props) =>
    props.design === "registroYaTengoCuenta" &&
    css`
      color: var(--black);
      width: 100%;
      font-weight: 400;
      line-height: 26px;
      text-align: center;
      font-family: var(--inter);
    `}

    ${(props) =>
    props.design === "historia" &&
    css`
      color: var(--black);
      width: 100%;
      font-weight: 200;
      line-height: 34px;
      letter-spacing: -0.003em;
      text-align: left;
      font-family: "Merriweather", serif;
      white-space: pre-line;
      margin-bottom: 35%;
    `}

    ${(props) =>
    props.design === "historiaTitleCategoria" &&
    css`
      color: var(--black);
      width: 100%;
      font-weight: 200;
      line-height: 34px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      text-align: left;
      font-family: var(--inter);
    `}

    ${(props) =>
    props.design === "historiaTitleDescripcion" &&
    css`
      color: var(--black);
      width: 100%;
      font-weight: 200;
      line-height: 30px;
      letter-spacing: 0.1em;
      text-align: left;
      font-family: "Merriweather", serif;
      margin-top: 5%;
    `}
`;

export { ParagraphContainer };
