import React from "react";
import { HomeActualidadContainer } from "./styled";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";
import Image from "@/components/uikit/image";

export default function HomeActualidad() {
  return (
    <HomeActualidadContainer>
      <div className="textContainer">
        <Title
          level={3}
          texto={["Actualidad: ", <span>Naciones Unidas</span>]}
        ></Title>
        <Paragraph
          size="0.9"
          text={[
            "Historias de Malvinas, es un proyecto de ",
            <span>repositorio web público y participativo</span>,
            ", pensado, diseñado y desarrollado por ",
            <span>Facundo Brahim</span>,
            ", estudiante de Lic. en tecnología multimedial en la UMAI.",
            <br></br>,
            <br></br>,
            "Su indetidad inspirada en la Cruz de Hierro y la bandera de Tierra del Fuego e Islas del Atlántico Sur, busca conceptualizar el reclamo argentino de soberania desde herramientas gráficas, invitando a los veteranos de Malvinas y familiares, estudiantes, investigadores, etc, a formar parte con sus historias.",
            <br></br>,
            <br></br>,
            "Su ",
            <span>misión</span>,
            " busca revindicar el reclamo de soberanía de la República Argentina, sobre las Islas Malvinas, Georgias y Sandwich del Sur, de una innovadora forma digital, ante el colonialismo de facto y anticuado del Reino Unido.",
          ]}
        ></Paragraph>
      </div>
      <div className="animationLottie">
        <Image imageLink="./assets/images/home/onu.png"></Image>
      </div>
    </HomeActualidadContainer>
  );
}
