import styled, { css } from "styled-components";

const ParagraphContainer = styled.p`
  font-size: 1em;
  font-family: var(--inter);
  font-size: 0.8em;
  line-height: 26px;
  text-align: left;
  margin: 0 0 0 0;
  font-weight: 400;
  color: var(--black);

  ${(props) =>
    props.align === "right" &&
    css`
      text-align: right; !important;
    `}

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
    props.design === "cardTitle" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 1.6;
    `}

  ${(props) =>
    props.design === "cardTitleAbstract" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 1.6;
      margin-top: 8% !important;
    `}

  ${(props) =>
    props.design === "cardText" &&
    css`
      color: var(--black);
      font-size: 0.75em;
      font-weight: 400;
      letter-spacing: 1px;
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
`;

export { ParagraphContainer };
