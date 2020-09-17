import React from "react";
import styled from "styled-components";
import FormularioBotones from "@/components/general/iniciarsesion/FormularioBotones";

const IniciarSesionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/login/Fondo.jpg");
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export default function IniciarSesion() {
  return (
    <IniciarSesionContainer>
      <FormularioBotones />
    </IniciarSesionContainer>
  );
}
