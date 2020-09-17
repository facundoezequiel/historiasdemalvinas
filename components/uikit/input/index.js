import React from "react";
import { IconContainer, InputContainer, InputIconContainer } from "./styled";

export default function Input({ icon, text, type, design }) {
  return (
    <InputIconContainer design={design}>
      <IconContainer design={design}>{icon}</IconContainer>
      <InputContainer design={design} placeholder={text} type={type} />
    </InputIconContainer>
  );
}
