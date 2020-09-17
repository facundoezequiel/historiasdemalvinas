import React from "react";
import { default as NextLink } from "next/link";
import { LogoContainer, LogoRoute } from "./styled";

const LogoCustomLink = React.forwardRef((props, ref) => {
  return (
    <LogoRoute ref={ref} {...props}>
      <LogoContainer src={props.imageLink} />
    </LogoRoute>
  );
});

function Logo({ size, imageLink, route }) {
  return (
    <NextLink href={route}>
      <a>pepe</a>
    </NextLink>
  );
}

export default Logo;
