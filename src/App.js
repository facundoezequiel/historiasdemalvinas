import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./constants";
import Header from "./components/general/header";
import Home from "./pages/home";
import Donar from "./pages/donar";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          {/* CONTACTO */}
          <Route exact path="/contacto"></Route>
          {/* DONAR */}
          <Route exact path="/donar">
            <Donar />
          </Route>
          {/* COMUNIDAD */}
          <Route exact path="/comunidad"></Route>
          {/* HISTORIAS */}
          <Route exact path="/historias"></Route>
          {/* PROYECTO */}
          <Route exact path="/proyecto"></Route>
          {/* INICIO */}
          <Route exact path="/home">
            <Home />
          </Route>
          {/* INICIAR SESION Y REGISTRO */}
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
