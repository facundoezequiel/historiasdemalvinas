import React from "react";
import { FormularioIniciarSesionContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/uikit/input";
import Button from "@/components/uikit/button";

class FormularioIniciarSesion extends React.Component {
  render() {
    return (
      <FormularioIniciarSesionContainer>
        <Input
          icon={<FontAwesomeIcon icon={faAt} />}
          text="Correo electrónico"
          type="email"
          design="iniciarSesion"
        />
        <Input
          icon={<FontAwesomeIcon icon={faLock} />}
          text="Contraseña"
          type="password"
          design="iniciarSesion"
        />
        <Button
          text="Iniciar Sesión"
          type="submit"
          backgroundColor="orange"
          design="iniciarSesion"
        />
        <Button
          text="Registrarse"
          backgroundColor="blue"
          design="iniciarSesion"
        />
        <Button
          text="Entrar como invitado"
          to="/inicio"
          backgroundColor="gray"
          design="iniciarSesion"
        />
      </FormularioIniciarSesionContainer>
    );
  }
}

export default FormularioIniciarSesion;
