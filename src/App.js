import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./constants";
import Home from "./pages/home";
import IniciarSesion from "./pages/iniciarsesion";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          {/* INICIO */}
          <Route exact path="/">
            <IniciarSesion />
          </Route>
          {/* INICIAR SESION Y REGISTRO */}
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
