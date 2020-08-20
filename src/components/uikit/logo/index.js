import React from "react";
import { LogoContainer } from "./styled";

export default function Logo({
    size,
    imageLink,
}) {
    return (
        <LogoContainer size={size} src={imageLink}></LogoContainer>
    );
}
