import React from "react";
import { ParticlesBackgroundContainer } from "./styled";
import Particles from "react-particles-js";

class ParticlesBackground extends React.Component {
  render() {
    return (
      <ParticlesBackgroundContainer>
        <Particles
          params={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              color: {
                value: "#000000",
              },
              line_linked: {
                enable: true,
                opacity: 0.05,
              },
              move: {
                direction: "right",
                speed: 0.3,
              },
              size: {
                value: 1.2,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </ParticlesBackgroundContainer>
    );
  }
}

export default ParticlesBackground;
