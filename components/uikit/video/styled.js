import styled, { css } from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 32%;

  iframe {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  }

  ${(props) =>
    props.size === "65" &&
    css`
      width: 65%;
      padding-bottom: 36.6%;
      margin: 0 auto;
      margin-top: 5%;
    `}
`;

export { VideoContainer };
