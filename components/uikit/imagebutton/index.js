import React from "react";
import { withRouter, Link } from "react-router-dom";
import { ImageContainer, ImageRoute } from "./styled";

const ImageCustomLink = React.forwardRef((props, ref) => {
  return (
    <ImageRoute
      size={props.size}
      ref={ref}
      {...props}
    >
      <ImageContainer design={props.design} src={props.imageLink} />
    </ImageRoute>
  );
});

function Image({ imageLink, route, design, size, }) {
  return (
    <Link
      to={route}
      component={ImageCustomLink}
      imageLink={imageLink}
      design={design}
      size={size}
    />
  );
}

export default withRouter(Image);
