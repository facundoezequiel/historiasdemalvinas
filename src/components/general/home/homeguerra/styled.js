import styled from "styled-components";

const HomeGuerraContainer = styled.section`
  width: 65%;
  background-color: var(--white);
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3% 0% 3% 0%;
  align-items: center;

  .textContainer {
    width: 45%;
  }

  h3 {
    color: var(--black);
    width: 100%;
  }

  h3 span {
    font-weight: 400 !important;
  }

  p {
    width: 100%;
    margin-top: 6%;
  }

  p span {
    color: var(--orange);
  }

  .animationLottie {
    pointer-events: none;
  }

  .animationLottie div {
    margin: 0% 0% 0% 0% !important;
  }
`;

export { HomeGuerraContainer };
