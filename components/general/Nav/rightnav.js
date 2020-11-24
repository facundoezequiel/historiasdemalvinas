import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { default as NextLink } from "next/link";
import { breakpoints } from "@/constants/media";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import Image from "@/components/uikit/image";

const RightNavContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  align-items: center;

  a {
    margin: 0px 0px 0px 13px;
    text-decoration: none;
    color: var(--black);
    font-size: 0.77em;
    font-family: var(--poppins);
    font-weight: 400;
    transition: 0.2s ease 0s;
    position: relative;
  }

  a::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--black);
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(19.5px);
    cursor: default;
  }

  a:hover {
    color: var(--black);
    cursor: pointer !important;
  }

  a:hover:after {
    opacity: 1;
    transform: translateY(19.5px);
    background-color: var(--black);
  }

  .navBar > .active:after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--orange) !important;
    content: "";
    opacity: 1;
    transform: translateY(19.5px);
    cursor: default;
  }

  .profileButton,
  .iniciarSesionButton {
    width: auto;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 0% 0% 0% 15px;
    border-left: 1px solid;
  }

  .profileButton:hover {
    cursor: default !important;
  }

  .iniciarSesionButton:hover {
    cursor: pointer;
  }

  .profileButton:hover:after {
    opacity: 0;
    transform: translateY(0px);
    background-color: var(--black);
  }

  img {
    transition: 0.2s all;
  }

  img:hover {
    transform: scale(1.25);
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-flow: column nowrap;
    backdrop-filter: saturate(180%) blur(10px);
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 8.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      text-align: center;
      padding: 35px 0px 0px 0px;
      margin: 0 auto;
      text-decoration: none;
      color: var(--black);
      font-size: 1.77em;
      font-family: var(--poppins);
      font-weight: 400;
      transition: 0.2s ease 0s;
      position: relative;
    }

    a:hover {
      color: var(--black);
      font-weight: 800;
      transform: scale(1.1);
    }

    a:hover:after {
      opacity: 0;
    }
  }
`;

export default function RightNav({ open }) {
  const { userAuth, userData } = useAuthState();
  let scrollSpy = Scroll.scrollSpy;
  useEffect(() => {
    scrollSpy.update();
  });

  return (
    <RightNavContainer open={open} className="navBar">
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        spy={true}
        duration={500}
      >
        Inicio
      </Link>
      <Link
        activeClass="active"
        to="historias"
        smooth={true}
        spy={true}
        duration={500}
      >
        Historias
      </Link>
      <Link
        activeClass="active"
        to="proyecto"
        smooth={true}
        spy={true}
        duration={500}
        offset={-50}
      >
        Proyecto
      </Link>
      <Link
        activeClass="active"
        to="donar"
        smooth={true}
        spy={true}
        duration={500}
      >
        Donar
      </Link>
      <Link
        activeClass="active"
        to="contacto"
        smooth={true}
        spy={true}
        duration={500}
      >
        Contacto
      </Link>
      {!userData && !userAuth ? (
        <NextLink href="/">
          <a className="iniciarSesionButton">Iniciar sesión</a>
        </NextLink>
      ) : (
        <NextLink href="/profile">
          <a className="profileButton">
            <Image
              size="5"
              imageLink={
                userData && userData.fotoperfil
                  ? userData.fotoperfil
                  : "/assets/images/placeholder/profile.png"
              }
              design="imagenPerfilHeader"
            />
          </a>
        </NextLink>
      )}
    </RightNavContainer>
  );
}
