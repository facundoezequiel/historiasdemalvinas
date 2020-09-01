import React from "react";
import { HomePlanetaContainer } from "./styled";
import ReactGlobe from "react-globe";
import markers from "./markers";
import ParticlesBackground from "./../../../uikit/particlesbackground";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default function HomePlaneta() {
  const options = {
    ambientLightColor: "white",
    cameraRotateSpeed: 0.5,
    cameraAutoRotateSpeed: 0.4,
    focusAnimation: 1000,
    focusEasingFunction: ["Cubic", "Out"],
    enableMarkerGlow: false,
    enableGlobeGlow: false,
    pointLightColor: "white",
    pointLightIntensity: 0,
    enableCameraZoom: false,
    cameraMaxDistanceRadiusScale: 3.2,
    focusDistanceRadiusScale: 3,
    markerEnterAnimationDuration: 1000,
    markerEnterEasingFunction: ["Linear", "None"],
    markerExitAnimationDuration: 500,
    markerExitEasingFunction: ["Cubic", "Out"],
    markerTooltipRenderer: (marker) => `${marker.city}`,
    globeCloudsOpacity: 0.5,
  };

  return (
    <HomePlanetaContainer>
      <ParticlesBackground></ParticlesBackground>
      <ReactGlobe
        height="700px"
        width="100%"
        markers={markers}
        options={options}
        globeCloudsTexture={null}
        initialCoordinates={[-20.3521, -45.8198]}
        globeTexture="./assets/images/maps/worldmap.jpg"
        globeBackgroundTexture={null}
        onClickMarker={(marker, markerObject, event) =>
          console.log(marker, markerObject, event)
        }
      />
    </HomePlanetaContainer>
  );
}
