import React from "react";
import { HomeSearchContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../../uikit/logo";
import Title from "./../../../uikit/title";
import Image from "./../../../uikit/image";
import Paragraph from "./../../../uikit/paragraph";
import Input from "../../../uikit/input";
import Button from "../../../uikit/button";

export default function HomeSearch() {
  return (
    <HomeSearchContainer>
      <div className="searchCoverContainer">
        <div className="searchDiv">
          <Logo imageLink="./assets/logos/IsologoDedicadoNegro.svg" size="12" />
          <Title level={3} texto="Bienvenido a"></Title>
          <Title level={1} texto="Historias de Malvinas"></Title>
          <Paragraph
            size="0.9"
            text="Historias de Malvinas, es repositorio web participativo sin animo 
              de lucro, sobre historias y sucesos que transcurrieron en las Islas Malvinas 
              e Islas del Atlántico Sur, con la misión de no olvidar que las Malvinas, 
              son Argentinas."
          ></Paragraph>
          <Input
            type="text"
            icon={<FontAwesomeIcon icon={faSearch} />}
            text="Buscar en Historias de Malvinas"
            design="searchHome"
          ></Input>
          <div>
            <Button
              text="Conocer más"
              backgroundColor="orange"
              design="homeSearch"
            ></Button>
            <Button
              text="Donar"
              backgroundColor="blue"
              design="homeSearch"
            ></Button>
          </div>
          <Logo imageLink="./assets/logos/ScrollMouse.svg" size="4"></Logo>
        </div>
        <div className="coverImageDiv">
          <Image
            imageLink="./assets/images/home/RamonLopez.png"
            design="coverHome"
            size="95.7"
          ></Image>
          <div>
            <Logo
              imageLink="./assets/logos/IsologoCruzNaranja.svg"
              size="9"
            ></Logo>
            <Paragraph
              size="0.8"
              text="Veterano Ramón López Medalla de Honor en Combate. Actualmente 
                vive en Tierra del Fuego Antártida e Islas del Atlántico Sur"
            ></Paragraph>
          </div>
        </div>
      </div>
    </HomeSearchContainer>
  );
}
