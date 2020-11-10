import styled from "styled-components";
import { breakpoints } from "@/constants/media";

/* Principal container */
const HomeGridContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6% 0% 2% 0%;
  background-color: var(--gray2);

  section {
    width: 72%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 1em;
    display: flex;
    flex-wrap: wrap;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      width: 82%;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      width: 92%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 97%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  .titleButtonsContainer {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 4%;
  }

  .titleButtonsContainer div {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-right: 1.3%;
  }

  h3 {
    margin-left: 2%;
    color: var(--black);
    margin: 0;
    width: 40%;
    margin-left: 1.3%;
  }
`;

export { HomeGridContainer };
