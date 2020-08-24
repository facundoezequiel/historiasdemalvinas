import React from "react";
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { HeaderContainer } from "./styled";
import Logo from "../../uikit/logo";
import LogoButton from "../../uikit/logobutton";

class Header extends React.Component {
  state = {
    active: false,
  };
  render() {
    return (
      <HeaderContainer>
        <div className="navprofileDiv">
          <LogoButton
            route="/home"
            imageLink="./assets/logos/LogoHistoriasAzul.svg"
            size="8.7"
          />
          <nav>
            <ul>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/home"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/proyecto"
                >
                  Proyecto
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/historias"
                >
                  Historias
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/comunidad"
                >
                  Comunidad
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/donar"
                >
                  Donar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="pageButton"
                  activeClassName="pageActive"
                  to="/contacto"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to="/profile" className="profileLink">
            {/* Replace by user name*/}
            <p>Facundo Brahim</p>
          </Link>
        </div>
        <hr></hr>
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);
