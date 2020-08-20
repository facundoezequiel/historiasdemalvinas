import styled from "styled-components";
import backgroundPoints from "./BackgroundPoints.png";

const HomeVideoContainer = styled.section`
  width: 60%;
  background-color: var(--white);
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 3% 0% 3% 0%;

  .textContainer {
    width: 45%;
    padding-top: 4%;
  }

  h3 {
    color: var(--black);
    width: 100%;
  }

  p {
    width: 100%;
    margin-top: 6%;
  }
`;

export { HomeVideoContainer };
