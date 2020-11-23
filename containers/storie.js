import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import styled, { css } from "styled-components";
import SecondHeader from "@/components/general/secondheader/navbar";
import Headroom from "react-headroom";
import Title from "@/components/uikit/title";
import Image from "@/components/uikit/image";
import Paragraph from "@/components/uikit/paragraph";
import { Waypoint } from "react-waypoint";

const StorieContainer = styled.div`
  width: 100% !important;

  .animate__animated.animate__fadeIn {
    --animate-duration: 300ms;
  }

  .animate__animated.animate__fadeOut {
    --animate-duration: 300ms;
  }

  .userAside {
    width: 15%;
    margin: 0% 0% 0% 15%;
    top: 10%;
    float: left;
    position: sticky;
  }
  .removePointerEvents {
    pointer-events: none;
  }
  #displayNone {
    display: none;
  }
  #displayBlock {
    display: block !important;
  }
`;

const HistoriaDataContainer = styled.div`
  width: 100%;
  // background-color: var(--gray2);
  padding: 2% 0% 2% 0%;
  background-color: var(--white);
  // border-bottom: 1px solid var(--gray);
  h2 {
    width: 35%;
    margin: 0 auto;
    font-family: "Merriweather", serif !important;
  }
`;

const HistoriaImageAndText = styled.div`
  width: 35%;
  margin: 0 auto;
  img {
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 0px solid #000000;
    // margin-top: 11%;
    // margin-bottom: 11%;
    margin: 5% 0% 11% 0%;
  }
`;

export default function Storie({ dataStorie, data }) {
  // Defino que asideDisplay ni bien abro la pagina va a ser none para que no se vea el aside con el fadeOut;
  let asideDisplay = "displayNone";
  // Defino el state
  const [asideDisplayScroll, setAsideDisplayScroll] = useState({
    asideDisplay: asideDisplay,
  });
  // Funcion para cambiar el estado
  function handleAsideDisplayScrollChange(value) {
    setAsideDisplayScroll({ ...asideDisplayScroll, asideDisplay: value });
  }

  // Detecta el scroll
  const [isAddAside, setAddAside] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => document.removeEventListener("scroll", trackScrolling);
  }, []);
  const trackScrolling = () => {
    // Si el scroll es mayor o igual al scroll para agregar el aside
    if (window.innerHeight + window.scrollY >= addAsideScroll) {
      // Agrega el aside
      setAddAside(true);
      // asideDisplay ahora lo pongo en display block asi aparece la animacion del fadeOut cuando vuelve a scrolear para arriba
      asideDisplay = "displayBlock";
      // Cambio el estado de asideDisplay
      handleAsideDisplayScrollChange(asideDisplay);
    }
    // Si el scroll es menor o igual al scroll para remover el aside
    if (window.innerHeight + window.scrollY <= removeAsideScroll) {
      // Saco el aside
      setAddAside(false);
    }
  };

  console.log("Hola", dataStorie.usuario);
  let addAsideScroll = 1170;
  let removeAsideScroll = 1169;
  let contenidoHistoria = dataStorie.contenido.replace(/\\n/g, "\n");

  return (
    <StorieContainer>
      <SecondHeader />
      <HistoriaDataContainer>
        <Title texto={dataStorie.titulo} level={2} />
      </HistoriaDataContainer>
      {isAddAside ? (
        <aside className="userAside animate__animated animate__fadeIn">
          <Paragraph
            size="1"
            text={dataStorie.titulo}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.usuario}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.categoria}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.fecha}
            design="historia"
          ></Paragraph>
        </aside>
      ) : (
        <aside
          className="userAside removePointerEvents animate__animated animate__fadeOut"
          id={asideDisplayScroll.asideDisplay}
        >
          <Paragraph
            size="1"
            text={dataStorie.titulo}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.usuario}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.categoria}
            design="historia"
          ></Paragraph>
          <Paragraph
            size="1"
            text={dataStorie.fecha}
            design="historia"
          ></Paragraph>
        </aside>
      )}
      <HistoriaImageAndText>
        <Image imageLink={dataStorie.fotohistoria} />
        <Paragraph
          size="1"
          text={contenidoHistoria}
          design="historia"
        ></Paragraph>
      </HistoriaImageAndText>
    </StorieContainer>
  );
}
