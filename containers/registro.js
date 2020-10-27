import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RegistroContainer = styled.div`
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
export default function Registro() {
  const [formValue, setFormValue] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    edad: "",
    nombredeusuario: "",
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  const register = async ({
    nombre,
    apellido,
    dni,
    edad,
    nombredeusuario,
    email,
    password,
  }) => {
    await axios.post("/api/auth/register", {
      name: nombre,
      lastname: apellido,
      username: nombredeusuario,
      dni,
      combatiente: false,
      email,
      age: edad,
      password,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      nombre: formValue.nombre,
      apellido: formValue.apellido,
      dni: formValue.dni,
      edad: formValue.edad,
      nombredeusuario: formValue.nombredeusuario,
      email: formValue.email,
      password: formValue.password,
    });
  };

  return (
    <RegistroContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="nombre"
          onChange={(e) => handleChange("nombre", e.target.value)}
          value={formValue.nombre}
        ></input>
        <input
          name="apellido"
          onChange={(e) => handleChange("apellido", e.target.value)}
          value={formValue.apellido}
        ></input>
        <input
          name="dni"
          onChange={(e) => handleChange("dni", e.target.value)}
          value={formValue.dni}
        ></input>
        <input
          name="edad"
          onChange={(e) => handleChange("edad", e.target.value)}
          value={formValue.edad}
        ></input>
        <input
          name="nombredeusuario"
          onChange={(e) => handleChange("nombredeusuario", e.target.value)}
          value={formValue.nombredeusuario}
        ></input>
        <input
          name="email"
          type="email"
          onChange={(e) => handleChange("email", e.target.value)}
          value={formValue.email}
        ></input>
        <input
          name="password"
          onChange={(e) => handleChange("password", e.target.value)}
          value={formValue.password}
        ></input>
        <button type="submit">Registrarse</button>
      </form>
    </RegistroContainer>
  );
}
