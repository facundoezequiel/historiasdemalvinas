import styled, { css } from "styled-components";

const DonarCardContainer = styled.div`
  margin: 2% 0% 4% 0%;
  color: #000000;
  text-align: center;
  align-content: center;
  align-items: center;
  width: 16.31%;

  p,
  h1 {
    margin-bottom: 15%;
  }

  h1 {
    font-weight: 800 !important;
  }

  a {
    text-decoration: none;
    color: var(--white);
    display: block;
    padding: 6% 0% 6% 0%;
    margin: 0 auto;
    margin-top: 12%;
    width: 55%;
    border-radius: 7px 7px 7px 7px;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    font-size: 0.8em;
    font-family: var(--inter);
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: 0.2s all;
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
    font-family: var(--inter);
    font-weight: 600;
  }

  a:hover {
    transform: scale(1.07);
  }

  a:hover h1 {
    color: var(--orange);
  }
`;

export { DonarCardContainer };
