import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 200px;
  height: 200px;

  @keyframes loading2 {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 8px;
      left: 8px;
      width: 176px;
      height: 176px;
      opacity: 0;
    }
  }

  .loading2 div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: loading2 0.9803921568627451s cubic-bezier(0, 0.2, 0.8, 1)
      infinite;
  }

  .loading2 div:nth-child(1) {
    border-color: #105aff;
  }

  .loading2 div:nth-child(2) {
    border-color: #ff6b00;
    animation-delay: -0.49019607843137253s;
  }

  .loading1 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }

  .loading2 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  .loading2 div {
    box-sizing: content-box;
  }
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <div className="loading1">
        <div className="loading2">
          <div></div>
          <div></div>
        </div>
      </div>
    </LoadingContainer>
  );
}
