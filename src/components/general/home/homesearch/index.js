import React from "react";
import { HomeSearchContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Title from "./../../../uikit/title";
import Paragraph from "./../../../uikit/paragraph";
import Input from "../../../uikit/input";
import Button from "../../../uikit/button";
import ReactTyped from "react-typed";

export default function HomeSearch() {
  return (
    <HomeSearchContainer>
      <div className="searchDiv">
        <div className="titleType">
          <Title level={1} texto="Historias de"></Title>
          <ReactTyped
            strings={["Malvinas.", "argentinos.", "heroes."]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={3500}
            showCursor={false}
            loop
            smartBackspace
          />
        </div>
        <div className="searchInput">
          <Input
            type="text"
            icon={<FontAwesomeIcon icon={faSearch} />}
            text="Buscar en Historias de Malvinas"
            design="searchHome"
          ></Input>
          <div className="buttonsSearch">
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
          <Paragraph
            size="0.9"
            text="Repositorio web participativo sin fines de lucro"
          ></Paragraph>
        </div>
      </div>
    </HomeSearchContainer>
  );
}
