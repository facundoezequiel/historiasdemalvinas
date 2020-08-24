import styled from "styled-components";

/* Principal container */
const HomeSearchContainer = styled.section`
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);

  /* Secundary container */
  .searchDiv {
    width: 70%;
    margin: 0 auto;
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
  }

  /* Input and buttons container */
  .searchInput {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Buttons container */
  .buttonsSearch {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 5%;
    display: flex;
    justify-content: center !important;
  }

  /* Paragraph */
  p {
    text-align: center;
    width: 100%;
    padding-bottom: 9%;
  }
`;

export { HomeSearchContainer };
