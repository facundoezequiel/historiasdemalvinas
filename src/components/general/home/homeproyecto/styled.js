import styled from "styled-components";

/* Principal container */
const HomeProyectoContainer = styled.section`
  width: 70%;
  background-color: var(--white);
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3% 0% 3% 0%;
  align-items: center;

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
  }

  /* Animation Lottie div */
  .animationLottie div {
    margin: 0% 0% 0% 0% !important;
  }
`;

export { HomeProyectoContainer };
