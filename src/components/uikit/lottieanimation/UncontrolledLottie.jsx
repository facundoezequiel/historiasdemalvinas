// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./LogoHomeDeg.json";

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      renderer: "svg",
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    );
  }
}

export default UncontrolledLottie;
