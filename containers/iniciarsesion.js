import React from "react";
import styled from "styled-components";
import CardIniciarSesion from "@/components/general/iniciarsesion/cardiniciarsesion";

const IniciarSesionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--gray);
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function IniciarSesion() {
  return (
    <IniciarSesionContainer>
      <CardIniciarSesion />
    </IniciarSesionContainer>
  );
}
