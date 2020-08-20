import styled, { css } from "styled-components";

const DonarCardContainer = styled.div`
  width: 24.7%;
  margin: 4% 0% 4% 0%;
  color: #000000;
  text-align: center;

  p,
  h1 {
    margin-bottom: 10%;
  }

  a {
    text-decoration: none;
    color: var(--white);
    display: block;
    padding: 3.2% 0% 3.2% 0%;
    margin: 0 auto;
    margin-top: 12%;
    width: 32%;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    font-size: 0.8em;
    font-family: var(--inter);
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: 0.2s all;
    background-color: #000000;
    color: var(--white);
  }

  a:hover {
    background-color: var(--orange);
  }

  a:hover h1 {
    color: var(--orange);
  }

  ${(props) =>
    props.border === "active" &&
    css`
      border-right: 1px solid var(--gray);
    `}
`;

export { DonarCardContainer };
