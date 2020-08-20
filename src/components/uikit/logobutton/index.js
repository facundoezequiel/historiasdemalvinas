import React from "react";
import { withRouter, Link } from "react-router-dom";
import { LogoContainer, LogoRoute } from "./styled";

const LogoCustomLink = React.forwardRef((props, ref) => {
    return (
        <LogoRoute ref={ref} size={props.size} {...props}>
            <LogoContainer src={props.imageLink} />
        </LogoRoute>
    );
});

function Logo({ size, imageLink, route }) {
    return <Link to={route} component={LogoCustomLink} size={size} imageLink={imageLink} />;
}

export default withRouter(Logo);
