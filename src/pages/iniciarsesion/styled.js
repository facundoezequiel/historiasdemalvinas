/* CSS - STYLED COMPONENTS DOCUMENT */
import styled from "styled-components";
/* IMPORT BACKGROUND IMAGE */
import fondo from "./Fondo.jpg";

const IniciarSesionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${fondo});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export { IniciarSesionContainer };
