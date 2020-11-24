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
    width: 10%;
    margin: 0% 0% 0% 15%;
    top: 15%;
    float: left;
    position: fixed;
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
  width: 35%;
  padding: 3% 0% 2% 0%;
  margin: 0 auto;
  background-color: var(--white);

  h2 {
    margin-top: 3%;
    font-family: "Merriweather", serif !important;
    font-weight: 300 !important;
    font-size: 2.5em !important;
  }
`;

const HistoriaImageAndText = styled.div`
  width: 35%;
  margin: 0 auto;

  img {
    border-radius: 0px 0px 0px 0px !important;
    -moz-border-radius: 0px 0px 0px 0px !important;
    -webkit-border-radius: 0px 0px 0px 0px !important;
    border: 0px solid #000000;
    margin: 3% 0% 11% 0%;
  }
`;

const HistoriaUserAndShare = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;

  .shareButtonsContainer,
  .imageNameDateContainer {
    display: flex;
    width: 50%;
  }

  .imageNameDateContainer {
    justify-content: flex-start;
    align-items: center;

    img {
      margin-right: 3%;
    }
  }

  .shareButtonsContainer {
    justify-content: flex-end;
  }
`;

export default function Storie({ dataStorie, dataUsuario }) {
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

  let addAsideScroll = 1170;
  let removeAsideScroll = 1169;
  let contenidoHistoria = dataStorie.contenido.replace(/\\n/g, "\n");

  return (
    <StorieContainer>
      <SecondHeader />
      <HistoriaDataContainer>
        <Paragraph
          text={dataStorie.categoria}
          size="0.9"
          design="historiaTitleCategoria"
        />
        <Title texto={dataStorie.titulo} level={2} />
        <Paragraph
          text={dataStorie.descripcion}
          size="0.9"
          design="historiaTitleDescripcion"
        />
        <HistoriaUserAndShare>
          <div className="imageNameDateContainer">
            <Image
              imageLink={
                dataUsuario && dataUsuario.fotoperfil
                  ? dataUsuario.fotoperfil
                  : "/assets/images/placeholder/profile.png"
              }
              size="8"
              design="imagenPerfil"
            ></Image>
            <div>
              <Paragraph
                text={dataUsuario.nombreyapellido}
                design="historiaTitleUserDate"
              />
              <Paragraph
                text={dataStorie.fecha}
                size="0.9"
                design="historiaTitleUserDate"
              />
            </div>
          </div>
          <div className="shareButtonsContainer">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              class="twitter-share-button"
              data-size="large"
              data-text={
                "Hola! Te quiero compartir esta historia de " +
                dataUsuario.nombreyapellido
              }
              data-via="historiasdemalvinas"
              data-hashtags="NoLosOlvidamos"
              data-related="historiasdemalvinas"
              data-lang="es"
              data-show-count="false"
            >
              Tweet
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </HistoriaUserAndShare>
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
            text={dataUsuario.nombreyapellido}
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
            text={dataUsuario.nombreyapellido}
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
