import styled from "styled-components";
import { breakpoints } from "@/constants/media";

/* Principal container */
const HomeSearchContainer = styled.section`
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);

  /* Secundary container */
  .searchDiv {
    width: 70%;
    margin: 0 auto;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      width: 80%;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      width: 90%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 95%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  /* Title container */
  .titleType {
    display: flex;
    width: 100%;
    padding-top: 10%;
    padding-bottom: 4%;
    flex-wrap: wrap;
    height: 337px !important;
    min-height: 337px !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      height: 294px !important;
      min-height: 294px !important;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      height: 230px !important;
      min-height: 230px !important;
    }
    @media (max-width: ${breakpoints.tablet}) {
      height: 160px !important;
      min-height: 160px !important;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 130px !important;
      min-height: 130px !important;
      padding-top: 20%;
      padding-bottom: 10%;
    }
  }

  /* Title "Historias de" */
  h1 {
    width: 100%;
    font-weight: 800;
    color: #000000;
    text-align: center;
    font-size: 8em;
    font-family: var(--inter);
    vertical-align: bottom;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      font-size: 6.3em;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      font-size: 5.1em;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 3.4em;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2.8em;
    }
  }

  /* Title "Malvinas, argentinos, heroes" */
  span {
    width: 100%;
    font-weight: 800;
    background: #105cff;
    background: -moz-linear-gradient(45deg, #105cff 0%, #00fbff 100%);
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, #105cff),
      color-stop(100%, #00fbff)
    );
    background: -webkit-linear-gradient(45deg, #105cff 0%, #00fbff 100%);
    background: -o-linear-gradient(45deg, #105cff 0%, #00fbff 100%);
    background: -ms-linear-gradient(45deg, #105cff 0%, #00fbff 100%);
    background: linear-gradient(45deg, #105cff 0%, #00fbff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#105cff', endColorstr='#00fbff', GradientType=1 );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 2.9em;
    font-family: var(--inter);
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      font-size: 2.5em;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      font-size: 2.2em;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.9em;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.7em;
    }
  }

  /* Input and buttons container */
  .searchInput {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      width: 80%;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      width: 90%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 95%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  /* Buttons container */
  .buttonsSearch {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 5%;
    display: flex;
    justify-content: center !important;
    /* Responsive */
    @media (max-width: ${breakpoints.monitorMedium}) {
      width: 80%;
    }
    @media (max-width: ${breakpoints.monitorSmall}) {
      width: 90%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 95%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  /* Paragraph */
  p {
    text-align: center;
    width: 100%;
    padding-bottom: 9%;
  }
`;

export { HomeSearchContainer };
