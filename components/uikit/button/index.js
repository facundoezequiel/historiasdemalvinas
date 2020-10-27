import React from "react";
import { ButtonContainer } from "./styled";

export default function Button({
  text,
  type,
  design,
  backgroundColor,
  ...props
}) {
  return (
    <ButtonContainer
      design={design}
      backgroundColor={backgroundColor}
      type={type}
      {...props}
    >
      {text}
    </ButtonContainer>
  );
}
