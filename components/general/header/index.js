import React, { useEffect } from "react";
import { useFetchUser } from "lib/user";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { HeaderContainer } from "./styled";
import LogoButton from "../../uikit/logobutton";
import { default as NextLink } from "next/link";

export default function Header(props) {
  const { user, loading } = useFetchUser();
  let scrollSpy = Scroll.scrollSpy;
  useEffect(() => {
    scrollSpy.update();
  });
  return (
    <HeaderContainer>
      <div className="navprofileDiv">
        <LogoButton
          route="/"
          imageLink="./assets/logos/LogoHistoriasAzul.svg"
          size="8.7"
        />
        <div className="navBar">
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
            to="comunidad"
            smooth={true}
            spy={true}
            duration={500}
          >
            Comunidad
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
            s
            spy={true}
            duration={500}
          >
            Contacto
          </Link>
        </div>
        <NextLink href="/auth/profile">
          <a className="profileLink">
            <p>Facundo Brahim</p>
          </a>
        </NextLink>
        {!loading && user ? (
          <a href="/api/logout" className="profileLink">
            Logout
          </a>
        ) : (
          <a href="/api/login" className="profileLink">
            Login
          </a>
        )}
      </div>
      <hr></hr>
    </HeaderContainer>
  );
}
