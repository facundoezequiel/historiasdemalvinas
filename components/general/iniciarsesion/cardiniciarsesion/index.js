import React, { useState, useEffect } from "react";
import { CardIniciarSesionContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Logo from "@/components/uikit/logo";
import Title from "@/components/uikit/title";
import Paragraph from "@/components/uikit/paragraph";
import Input from "@/components/uikit/input";
import Button from "@/components/uikit/button";
import ParagraphLink from "@/components/uikit/paragraphlink";
import Image from "@/components/uikit/image";
import { auth } from "@/lib/firebase";
import {
  setUserCookie,
  removeUserCookie,
  getUserFromCookie,
} from "@/lib/userCookies";
import { mapUserData } from "@/lib/mapUserData";
import { useRouter } from "next/router";

export default function CardInciarSesion() {
  const router = useRouter();

  // User state retorna un array con dos posiciones, la primera el valor del estado y la segunda un funcion que setea el estado
  // Incia el estado cuando el componente se termino de renderizar, con valores iniciales desde un objeto con dos propiedades nulas en principio
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    // Si fuese de registro tendria mas info
  });

  // Registro: Haria la funcion async que paso gonza por slack y le paso todas las propiedades tengo que importar axios
  // await axios.post('/api/auth/register', {email: fromValue.emial , password: 'bla bla'});

  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  // Recibe el mail y la contraseña que le estoy pasando e inica sesion con esos datos
  // rEGISTRO seria la funcion signUp adentro antes de los parentesis tendria un async y dentro pongo la funcion de acios
  const login = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        router.push("/inicio");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cambiar por la funcion que corresponda
    login({ email: formValue.email, password: formValue.password });
  };

  // Guarda el token en las cookies
  // Esto registro no lo usa
  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);

        // console.log(getUserFromCookie());
      } else {
        removeUserCookie();
      }
    });
  };

  // Esto registro no lo usa
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CardIniciarSesionContainer>
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
        <div className="containerDataDiv2 animate__animated animate__fadeIn">
          {/* Texto */}
          <Paragraph
            size="0.8"
            text="Por favor, complete los datos para poder inciar sesión"
            design="registroCarta"
          />
          {/* Texto */}
          <Paragraph
            size="0.8"
            text="Si acaba de registrarse, valide su identidad mediante el correo que le fue enviado para poder inicar sesión."
            design="registroCarta"
          />
          {/* Formulario de registro */}
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Input Correo electronico */}
            <Input
              icon={<FontAwesomeIcon icon={faAt} />}
              text="Correo electrónico"
              type="email"
              design="iniciarSesion"
              onChange={(e) => handleChange("email", e.target.value)}
              value={formValue.email}
              min={0}
              oninput="validity.valid || (value='');"
            />
            {/* Input Contraseña */}
            <Input
              icon={<FontAwesomeIcon icon={faLock} />}
              text="Contraseña"
              type="password"
              design="iniciarSesion"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.password}
            />
            {/* Boton enviar datos */}
            <Button
              text="Iniciar Sesión"
              type="submit"
              backgroundColor="orange"
              design="iniciarSesion"
              design="registro"
              className="buttonRegistro"
            />
            {/* Boton registrarse con facebook */}
            <Button
              text="Entrar con Facebook"
              backgroundColor="blue"
              design="registro"
              icon={<FontAwesomeIcon icon={faFacebookSquare} />}
            />
          </form>
          {/* Texto */}
          <ParagraphLink
            textLink="Registrarse"
            buttonLink="/register"
            size="0.8"
            text="No tengo una cuenta. "
            design="registroYaTengoCuenta"
          ></ParagraphLink>
        </div>
      </div>
    </CardIniciarSesionContainer>
  );
}
