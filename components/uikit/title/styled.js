import styled, { css } from "styled-components";

const H1 = styled.h1`
  font-size: 2.7em;
  margin: 0% 0% 0% 0%;
  font-family: var(--inter);
  font-weight: 700;

  span {
    font-weight: 200;
  }

  ${(props) =>
    props.design === "donationPrice" &&
    css`
      font-family: var(--inter) !important;
    `}
`;

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2em;
  font-family: var(--inter);
`;

const H3 = styled.h3`
  font-size: 1.8em;
  margin: 0% 0% 0% 0%;
  font-family: var(--inter);
`;

const H4 = styled.h4`
  font-size: 1.4em;
  font-family: var(--inter);
  margin: 0 0 0 0;
`;

const H5 = styled.h5`
  font-size: 1em;
  font-weight: 400;
  color: #eeeeee;
  font-family: var(--inter);
`;

export { H1, H2, H3, H4, H5 };
