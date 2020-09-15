import React from "react";
import { IniciarSesionContainer } from "./styled";
import FormularioBotones from "../../components/general/iniciarsesion/FormularioBotones";

class IniciarSesion extends React.Component {
  render() {
    return (
      <IniciarSesionContainer>
        <FormularioBotones />
      </IniciarSesionContainer>
    );
  }
}

export default IniciarSesion;
