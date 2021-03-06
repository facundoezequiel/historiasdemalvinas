import React from "react";
import dynamic from "next/dynamic";
import { HomePlanetaContainer } from "./styled";
// import ReactGlobe from "react-globe";
import markers from "@/components/general/home/homeplaneta/markers";
import Paragraph from "@/components/uikit/paragraph";

const ReactGlobe = dynamic(() => import("react-globe"), { ssr: false });

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
    pointLightIntensity: 0.3,
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
      <Paragraph
        size="0.8"
        text="Mapa 3D interactivo, posiciones internacionales ante la cuestión Malvinas"
      ></Paragraph>
      <ReactGlobe
        height="700px"
        width="100%"
        markers={markers}
        options={options}
        globeCloudsTexture={null}
        initialCoordinates={[-20.3521, -45.8198]}
        // globeTexture="./assets/images/maps/worldmap.jpg"
        globeBackgroundTexture={null}
        onClickMarker={(marker, markerObject, event) =>
          console.log(marker, markerObject, event)
        }
      />
    </HomePlanetaContainer>
  );
}
