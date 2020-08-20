import React from "react";
import { Planet3DContainer } from "./styled";
import ReactGlobe from "react-globe";
import ParticlesBackground from "./../particlesbackground";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export default function Planet3D() {
  const markers = [
    {
      id: "malvinas",
      city: "Islas Malvinas (Colonia Británica)",
      color: "orange",
      coordinates: [-50.0, -59.523613],
      value: 200,
    },
    {
      id: "argentina",
      city: "Argentina",
      color: "blue",
      coordinates: [-34.61, -58.37723],
      value: 200,
    },
    {
      id: "georgias",
      city: "Islas Georgias del Sur (Colonia Británica)",
      color: "orange",
      coordinates: [-52.429579, -36.587909],
      value: 200,
    },
    {
      id: "sandwich",
      city: "Islas Sandwich del Sur (Colonia Británica)",
      color: "orange",
      coordinates: [-55.75, -26.5],
      value: 200,
    },
    {
      id: "libia",
      city: "Libia (Apoyo a Argentina)",
      color: "blue",
      coordinates: [26.3351, 17.228331],
      value: 197,
    },
    {
      id: "peru",
      city: "Perú (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-9.189967, -75.015152],
      value: 197,
    },
    {
      id: "chile",
      city: "Chile (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [-35.675147, -71.542969],
      value: 197,
    },
    {
      id: "reino unido",
      city: "Reino Unido",
      color: "red",
      coordinates: [55.378051, -3.435973],
      value: 200,
    },
    {
      id: "urss",
      city: "Unión Soviética (Apoyo a Argentina)",
      color: "blue",
      coordinates: [55.75222, 37.61556],
      value: 197,
    },
    {
      id: "cuba",
      city: "Cuba (Apoyo a Argentina)",
      color: "blue",
      coordinates: [21.521757, -77.781167],
      value: 197,
    },
    {
      id: "colombia",
      city: "Colombia (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [4.570868, -74.297333],
      value: 197,
    },
    {
      id: "eua",
      city: "Estados Unidos (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [37.09024, -95.712891],
      value: 197,
    },
    {
      id: "dominicana",
      city: "República Dominicana (Apoyo a Argentina)",
      color: "blue",
      coordinates: [18.735693, -70.162651],
      value: 197,
    },
    {
      id: "nicaragua",
      city: "Nicaragua (Apoyo a Argentina)",
      color: "blue",
      coordinates: [12.865416, -85.207229],
      value: 197,
    },
    {
      id: "panama",
      city: "Panamá (Apoyo a Argentina)",
      color: "blue",
      coordinates: [8.9936, -79.51973],
      value: 197,
    },
    {
      id: "tyb",
      city: "Trinidad y Tobago (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [10.691803, -61.222503],
      value: 197,
    },
    {
      id: "brasil",
      city: "Brasil (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-14.235004, -51.92528],
      value: 197,
    },
    {
      id: "venezuela",
      city: "Venezuela (Apoyo a Argentina)",
      color: "blue",
      coordinates: [6.42375, -66.58973],
      value: 197,
    },
    {
      id: "españa",
      city: "España (Apoyo a Argentina)",
      color: "blue",
      coordinates: [40.463667, -3.74922],
      value: 197,
    },
    {
      id: "irlanda",
      city: "Irlanda (Apoyo a Argentina)",
      color: "blue",
      coordinates: [53.41291, -8.0],
      value: 197,
    },
    {
      id: "italia",
      city: "Italia (Apoyo a Argentina)",
      color: "blue",
      coordinates: [41.871941, 14.56738],
      value: 197,
    },
    {
      id: "australia",
      city: "Australia (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [-25.274398, 133.775136],
      value: 197,
    },
    {
      id: "nueva zelanda",
      city: "Nueva Zelanda (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [-40.900557, 174.885971],
      value: 197,
    },
    {
      id: "francia",
      city: "Francia (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [48.85341, 2.3488],
      value: 197,
    },
    {
      id: "canada",
      city: "Canadá (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [56.130366, -106.346771],
      value: 197,
    },
    {
      id: "mexico",
      city: "Mexico (Apoyo a Argentina)",
      color: "blue",
      coordinates: [23.634501, -102.552784],
      value: 197,
    },
    {
      id: "bolivia",
      city: "Bolivia (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-16.290154, -63.588653],
      value: 197,
    },
    {
      id: "paraguay",
      city: "Paraguay (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-23.442503, -58.443832],
      value: 197,
    },
    {
      id: "uruguay",
      city: "Uruguay (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-32.522779, -55.765835],
      value: 197,
    },
    {
      id: "ecuador",
      city: "Ecuador (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-1.831239, -78.183406],
      value: 197,
    },
    {
      id: "turquia",
      city: "Turquía (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [38.963745, 35.243322],
      value: 197,
    },
    {
      id: "indonesia",
      city: "Indonesia (Apoyo a Argentina)",
      color: "blue",
      coordinates: [-0.789275, 113.921327],
      value: 197,
    },
    {
      id: "siria",
      city: "Siria (Apoyo a Argentina)",
      color: "blue",
      coordinates: [34.802075, 38.996815],
      value: 197,
    },
    {
      id: "yugoslavia",
      city: "Yugoslavia (Apoyo a Argentina)",
      color: "blue",
      coordinates: [44.016521, 21.005859],
      value: 197,
    },
    {
      id: "belice",
      city: "Belice (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [17.189877, -88.49765],
      value: 197,
    },
    {
      id: "guayana francesa",
      city: "Guayana Francesa (Apoyo a Reino Unido)",
      color: "red",
      coordinates: [3.933889, -53.125782],
      value: 197,
    },
    {
      id: "isla ascención",
      city: "Isla Ascención (Base estratégica del Reino Unido)",
      color: "brown",
      coordinates: [-7.93333, -14.3667],
      value: 195,
    },
    {
      id: "santa elena",
      city: "Santa Elena (Base estratégica del Reino Unido)",
      color: "brown",
      coordinates: [-24.143474, -10.030696],
      value: 195,
    },
    {
      id: "tristán de acuña",
      city: "Tristán de Acuña (Base estratégica del Reino Unido)",
      color: "brown",
      coordinates: [-37.06757, -12.31155],
      value: 195,
    },
    {
      id: "gibraltar",
      city: "Gibraltar (Base estratégica del Reino Unido)",
      color: "brown",
      coordinates: [36.137741, -5.345374],
      value: 195,
    },
    {
      id: "gough",
      city: "Gough (Base estratégica del Reino Unido)",
      color: "brown",
      coordinates: [-40.316666666667, -9.9166666666667],
      value: 195,
    },
    {
      id: "trelew",
      city: "Trelew (Base estratégica Argentina)",
      color: "green",
      coordinates: [-43.24895, -65.30505],
      value: 195,
    },
    {
      id: "comodoro rivadavia",
      city: "Comodoro Rivadavia (Base estratégica Argentina)",
      color: "green",
      coordinates: [-45.8641, -67.4966],
      value: 195,
    },
    {
      id: "san julian",
      city: "San Julián (Base estratégica Argentina)",
      color: "green",
      coordinates: [-49.3036, -67.7351],
      value: 195,
    },
    {
      id: "santa cruz",
      city: "Santa Cruz (Base estratégica Argentina)",
      color: "green",
      coordinates: [-50.0167, -68.516],
      value: 195,
    },
    {
      id: "rio gallegos",
      city: "Río Gallegos (Base estratégica Argentina)",
      color: "green",
      coordinates: [-51.6333, -69.2167],
      value: 195,
    },
    {
      id: "rio grande",
      city: "Río Grande (Base estratégica Argentina)",
      color: "green",
      coordinates: [-53.7865, -67.7105],
      value: 195,
    },
  ];

  const options = {
    ambientLightColor: "white",
    cameraRotateSpeed: 0.5,
    cameraAutoRotateSpeed: 0.4,
    focusAnimation: 0,
    focusEasingFunction: ["Cubic", "Out"],
    enableMarkerGlow: true,
    pointLightColor: "white",
    pointLightIntensity: 0.3,
    globeGlowColor: "transparent",
    enableCameraZoom: false,
    cameraMaxDistanceRadiusScale: 3,
    focusDistanceRadiusScale: 3,
    markerEnterAnimationDuration: 1000,
    markerEnterEasingFunction: ["Linear", "None"],
    markerExitAnimationDuration: 500,
    markerExitEasingFunction: ["Cubic", "Out"],
    markerTooltipRenderer: (marker) => `${marker.city}`,
  };

  return (
    <Planet3DContainer>
      <ReactGlobe
        height="700px"
        width="100%"
        markers={markers}
        options={options}
        globeCloudsTexture={null}
        initialCoordinates={[-20.3521, -45.8198]}
        globeTexture="https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg"
        globeBackgroundTexture={null}
      />
    </Planet3DContainer>
  );
}
