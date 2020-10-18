import styled from "styled-components";
import { breakpoints } from "@/constants/media";

/* Principal container */
const HomeProyectoContainer = styled.div`
  width: 70%;
  background-color: var(--white);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2% 0% 2% 0%;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }

  /* Title and text container */
  .textContainer {
    width: 45%;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      margin: 10% 0% 0% 0%;
    }
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

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1em !important;
      line-height: 32px;
    }
  }

  /* Text orange */
  p span {
    color: var(--orange);
  }

  /* Animation lottie */
  .animationLottie {
    pointer-events: none;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 auto !important;
      width: 100% !important;
    }
  }

  /* Animation Lottie div */
  .animationLottie div {
    margin: 0% 0% 0% 0% !important;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 auto !important;
      width: 100% !important;
    }
  }
`;

export { HomeProyectoContainer };
