import React, { useEffect } from "react";
import { ParagraphLinkContainer } from "./styled";
import { default as NextLink } from "next/link";

export default function ParagraphLink({
  size,
  text,
  design,
  align,
  colorTag,
  buttonLink,
  textLink,
}) {
  return (
    <ParagraphLinkContainer size={size} design={design} align={align}>
      {text}
      <NextLink href={buttonLink}>
        <a className="linkColor">{textLink}</a>
      </NextLink>
    </ParagraphLinkContainer>
  );
}
