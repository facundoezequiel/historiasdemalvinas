import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./logohomedeg.json";

class LogoAnimationLottie extends Component {
  render() {
    const animationOptions = {
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
        <Lottie options={animationOptions} height={450} width={450} />
      </div>
    );
  }
}

export default LogoAnimationLottie;
