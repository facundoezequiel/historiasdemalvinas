import styled from "styled-components";

/* Principal container */
const HomeActualidadContainer = styled.section`
  width: 70%;
  background-color: var(--white);
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 4% 0% 4% 0%;

  /* Title and text container */
  .textContainer {
    width: 45%;
  }

  /* Title "El proyecto" */
  h3 {
    color: var(--black);
    width: 100%;
  }

  /* Title "#NoLosOlvidamos" */
  h3 span {
    font-weight: 400 !important;
  }

  /* Text */
  p {
    width: 100%;
    margin-top: 6%;
  }

  /* Text orange */
  p span {
    color: var(--orange);
  }

  /* Animation lottie */
  .animationLottie {
    pointer-events: none;
    margin: 0% 0% 0% 0% !important;
    width: 45%;
  }

  .animationLottie img {
    width: 100%;
  }
`;

export { HomeActualidadContainer };
