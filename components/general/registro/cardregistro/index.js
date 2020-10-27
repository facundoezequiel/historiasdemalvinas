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
          <Title level={3} texto="Cree una cuenta" />
          {/* Texto */}
          <Paragraph
            size="0.8"
            text="Historias de Malvinas, es un proyecto universitario y sin finas de lucro, realizado por Facundo Brahim, estudiante
            Lic. en Tecnología Multimedial de la Univ. Maimónides."
          />
          <Paragraph
            size="0.8"
            text="Se busca crear una repositorio web participativo de historias sobre la Guerra de Malvinas y temas relacionados 
            con la participación de excombatientes y/o familiares de los mismos/caidos."
          />
          <Paragraph
            size="0.8"
            text="Así lograr una nueva forma de reclamo a traves de herramientas digitales ante la usurpación colonial e ilegal por parte
            Reino Unido en las Islas Malvinas e Islas del Atlántico Sur."
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
            />
            <Button
              text={<FontAwesomeIcon icon={faFacebookSquare} />}
              backgroundColor="facebook"
              design="registro"
              scope="public_profile,email"
              onlogin="checkLoginState();"
            />
          </form>
          {/* Texto */}
          <Paragraph size="0.8" text="Ya tengo una cuenta. Iniciar sesión" />
        </div>
      </div>
    </CardRegistroContainer>
  );
}
