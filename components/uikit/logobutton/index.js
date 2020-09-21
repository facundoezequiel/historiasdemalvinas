import React from "react";
import { default as NextLink } from "next/link";
import { LogoContainer, LogoRoute } from "./styled";

function LogoButton({ size, imageLink, route }) {
  return (
    <NextLink href={route}>
      <LogoRoute size={size}>
        <LogoContainer src={imageLink} />
      </LogoRoute>
    </NextLink>
  );
}

export default LogoButton;
