import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { HeaderContainer } from "./styled";
import LogoButton from "../../uikit/logobutton";

function Header(props) {
  let scrollSpy = Scroll.scrollSpy;
  useEffect(() => {
    scrollSpy.update();
  });
  return (
    <HeaderContainer>
      <div className="navprofileDiv">
        <LogoButton
          route="/home"
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
            spy={true}
            duration={500}
          >
            Contacto
          </Link>
        </div>
        <NavLink to="/profile" className="profileLink">
          {/* Replace by user name*/}
          <p>Facundo Brahim</p>
        </NavLink>
      </div>
      <hr></hr>
    </HeaderContainer>
  );
}

export default withRouter(Header);
