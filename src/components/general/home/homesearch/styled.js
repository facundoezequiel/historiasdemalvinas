import styled from "styled-components";
import backgroundMap from "./BackgroundMap.png";

const HomeSearchContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--greenlight);
  background-image: url(${backgroundMap});
  background-size: cover;
  background-position: center;

  * {
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  .searchCoverContainer {
    width: 70%;
    margin: 0 auto;
    padding-top: 11%;
    display: flex;
    justify-content: space-between;
  }

  .searchDiv {
    width: 50%;
  }

  .searchDiv img {
    margin-top: 2%;
  }

  .searchDiv div {
    display: flex;
    justify-content: flex-start;
  }

  .searchDiv div button {
    margin-bottom: 5%;
  }

  .coverImageDiv div {
    position: absolute !important;
    width: 28%;
    top: 0;
    left: 0;
    margin-top: 20%;
  }

  .coverImageDiv div img {
    display: block;
    margin-left: 91%;
    margin-bottom: 5%;
  }

  .coverImageDiv div p {
    line-height: 22px !important;
    color: var(--orange);
    text-align: right;
    width: 100%;
  }

  h3 {
    margin-top: 6%;
    width: 100%;
    font-weight: 400;
    color: var(--black);
  }

  h1 {
    width: 100%;
    margin-top: 1%;
    font-weight: 700;
    color: var(--black);
  }

  .searchDiv p {
    width: 75%;
    margin-top: 4%;
  }

  .coverImageDiv {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    position: relative;
  }
`;

export { HomeSearchContainer };
