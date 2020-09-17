import React from "react";
import { FormularioBotonesContainer } from "./styled";
import Logo from "@/components/uikit/logo";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";
import FormularioIniciarSesion from "@/components/general/iniciarsesion/FormularioIniciarSesion";

export default function FormularioBotones() {
  return (
    <FormularioBotonesContainer>
      <div className="contenedor-logos">
        <Logo size="35" imageLink="./assets/logos/LogoHistoriasAzul.svg" />
        <Logo size="15" imageLink="./assets/logos/IsologoDedicadoNegro.svg" />
      </div>
      <Title level={3} texto="Bienvenido." />
      <Paragraph
        size="0.8"
        text="Historias de Malvinas, es un proyecto sin animo de lucro, con los objetivos de almacenar, compartir e investigar diferentes acontecimientos de las Islas Malvinas."
      />
      <Paragraph
        size="0.8"
        text="Para acceder y participar de su contenido, por favor inicie sesión o cree una cuenta."
      />
      <FormularioIniciarSesion />
    </FormularioBotonesContainer>
  );
}
