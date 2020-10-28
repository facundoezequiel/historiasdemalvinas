import React, { useState } from "react";
import { useRouter } from "next/router";
import { CardRegistroContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAt,
  faCalendarDay,
  faFingerprint,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Input from "@/components/uikit/input";
import Button from "@/components/uikit/button";
import Logo from "@/components/uikit/logo";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";
import ParagraphLink from "@/components/uikit/paragraphlink";
import Image from "@/components/uikit/image";
import axios from "axios";

export default function CardRegistro() {
  // Usamos el hook para poder redireccionar al usuario cuando se completa el registro
  const router = useRouter();
  /* Estados */
  const [formValue, setFormValue] = useState({
    nombreyapellido: "",
    dni: "",
    edad: "",
    email: "",
    password: "",
  });

  /* Facebook Login Facebook
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
  function checkLoginState() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  } */

  /* Le asigna a los estados lo que hay en cada input */
  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  /* Registra los datos en la base segun lo que hay en los estados*/
  const register = async ({ nombreyapellido, dni, edad, email, password }) => {
    await axios
      .post("/api/auth/register", {
        nameandlastname: nombreyapellido,
        dni,
        combatiente: false,
        email,
        age: edad,
        password,
      })
      .then(() => {
        // router.push cambia el Location del browser a lo que le indiquemos
        router.push("/login");
      })
      .catch(() => {
        // Si no funciona el registro tiramos un cartelito. Hay que hacerlo mas prolijo.
        alert("HEY ACA PASO ALGO");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Inicia la funcion register pasandole los datos de los inputs */
    register({
      nombreyapellido: formValue.nombreyapellido,
      dni: formValue.dni,
      edad: formValue.edad,
      email: formValue.email,
      password: formValue.password,
    });
    return false;
  };

  /*
  const changeIconColor = (color) => {
    document.getElementById("svg").style.color = color;
  }; */

  return (
    // Contenedor general
    <CardRegistroContainer>
      {/* Lado Derecho / Abajo */}
      <div className="containerDiv1">
        {/* Data container */}
        <div className="containerDataDiv1">
          {/* Logos */}
          <div className="containerLogos">
            <Logo size="35" imageLink="./assets/logos/LogoHistoriasAzul.svg" />
            <Logo
              size="15"
              imageLink="./assets/logos/IsologoDedicadoNegro.svg"
            />
          </div>
          {/* Titulo */}
          <Title level={3} texto="Bienvenido" />
          {/* Texto */}
          <Paragraph design="registroCarta" size="0.8" text="Al usuario:" />
          <Paragraph
            design="registroCarta"
            size="0.8"
            text={[
              "Historias de Malvinas, es un proyecto universitario y ",
              <span>sin finas de lucro</span>,
              " realizado por ",
              <span>Facundo Brahim</span>,
              " estudiante Lic. en Tecnología Multimedial de la Univ. Maimónides.",
            ]}
          />
          <Paragraph
            design="registroCarta"
            size="0.8"
            text={[
              "Se busca crear una repositorio web participativo de historias sobre la ",
              <span>Guerra de Malvinas</span>,
              " y temas relacionados con la participación de excombatientes y/o familiares de los mismos/caidos.",
            ]}
          />
          <Paragraph
            design="registroCarta"
            size="0.8"
            text={[
              "Así lograr una ",
              <span>nueva forma de reclamo</span>,
              " a traves de herramientas digitales ante la usurpación colonial e ilegal por parte Reino Unido en las Islas Malvinas e Islas del Atlántico Sur.",
            ]}
          />
          <Image
            imageLink="/assets/logos/Firma.svg"
            size="25"
            design="firmaRegistro"
          />
        </div>
      </div>

      {/* Lado Izquierdo / Arriba */}
      <div className="containerDiv2">
        {/* Data container */}
        <div className="containerDataDiv2">
          {/* Texto */}
          <Paragraph
            size="0.8"
            text="Por favor, complete los datos para crear una nueva cuenta de usuario. Es necesaria una cuenta
            para poder ingresar."
            design="registroCarta"
          />
          {/* Formulario de registro */}
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Input Nombre */}
            <Input
              icon={<FontAwesomeIcon icon={faFingerprint} />}
              name="nombre y apellido"
              text="Nombre y apellido"
              type="text"
              onChange={(e) => handleChange("nombreyapellido", e.target.value)}
              value={formValue.nombreyapellido}
              design="iniciarSesion"
              required
            ></Input>
            {/* Input DNI */}
            <Input
              icon={<FontAwesomeIcon icon={faAddressCard} />}
              name="dni"
              text="D.N.I."
              type="number"
              onChange={(e) => handleChange("dni", e.target.value)}
              value={formValue.dni}
              design="iniciarSesion"
              required
            ></Input>
            {/* Input Fecha de nacimiento */}
            <Input
              icon={<FontAwesomeIcon icon={faCalendarDay} />}
              name="edad"
              text="Edad"
              type="number"
              onChange={(e) => handleChange("edad", e.target.value)}
              value={formValue.edad}
              design="iniciarSesion"
              required
            ></Input>
            {/* Input Correo electronico */}
            <Input
              icon={<FontAwesomeIcon icon={faAt} />}
              name="email"
              text="Correo electronico"
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
              value={formValue.email}
              design="iniciarSesion"
              required
            ></Input>
            {/* Input Contraseña */}
            <Input
              icon={<FontAwesomeIcon icon={faLock} />}
              name="password"
              text="Contraseña"
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.password}
              design="iniciarSesion"
              required
            ></Input>
            {/* Boton enviar datos */}
            <Button
              type="submit"
              text="Registrarse"
              backgroundColor="orange"
              design="registro"
              className="buttonRegistro"
            />
            {/* Boton registrarse con facebook */}
            <Button
              text="Registrarse con Facebook"
              icon={<FontAwesomeIcon icon={faFacebookSquare} />}
              backgroundColor="facebook"
              design="registro"
              /* scope="public_profile,email"
              onlogin="checkLoginState();" */
            />
          </form>
          {/* Texto */}
          <ParagraphLink
            textLink="Iniciar Sesión"
            buttonLink="/login"
            size="0.8"
            text="Ya tengo una cuenta. "
            design="registroYaTengoCuenta"
          ></ParagraphLink>
        </div>
      </div>
    </CardRegistroContainer>
  );
}
