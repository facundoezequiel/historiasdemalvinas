import React from "react";
import { H1, H2, H3, H4, H5 } from "./styled";

export default function Title({ level, texto, design }) {
  switch (level) {
    case 1:
      return <H1 design={design}>{texto}</H1>;

    case 2:
      return <H2>{texto}</H2>;

    case 3:
      return <H3>{texto}</H3>;

    case 4:
      return <H4>{texto}</H4>;

    case 5:
      return <H5>{texto}</H5>;

    default:
      return <H3>{texto}</H3>;
  }
}
