import React, { useEffect } from "react";
import { ParagraphContainer } from "./styled";

export default function Paragraph({ size, text, design, align, colorTag }) {
  return (
    <ParagraphContainer size={size} design={design} align={align}>
      {text}
    </ParagraphContainer>
  );
}
