import React, { useState, useEffect } from "react";
import { FormularioIniciarSesionContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/uikit/input";
import Button from "@/components/uikit/button";
import { auth } from "@/lib/firebase";
import {
  setUserCookie,
  removeUserCookie,
  getUserFromCookie,
} from "@/lib/userCookies";
import { mapUserData } from "@/lib/mapUserData";

export default function FormularioIniciarSesion() {
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
      .then((response) => console.log(response))
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
    <FormularioIniciarSesionContainer onSubmit={handleSubmit}>
      <Input
        icon={<FontAwesomeIcon icon={faAt} />}
        text="Correo electrónico"
        type="email"
        design="iniciarSesion"
        onChange={(e) => handleChange("email", e.target.value)}
        value={formValue.email}
      />
      <Input
        icon={<FontAwesomeIcon icon={faLock} />}
        text="Contraseña"
        type="password"
        design="iniciarSesion"
        onChange={(e) => handleChange("password", e.target.value)}
        value={formValue.password}
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
    </FormularioIniciarSesionContainer>
  );
}
