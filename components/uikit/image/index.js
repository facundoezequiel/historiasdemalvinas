import React from "react";
import { ImageContainer } from "./styled";

export default function Image({ size, imageLink, design }) {
  return (
    <ImageContainer
      design={design}
      size={size}
      src={imageLink}
    ></ImageContainer>
  );
}
