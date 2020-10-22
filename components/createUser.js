import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

class createUser extends React.Component {
  // Construye lo que se va a subir a la base de datos
  constructor() {
    super();
    this.state = {
      nombre: "",
      mail: "",
    };
  }

  // Le asigna a los estados lo que diga en cada input
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Manda a la base de datos lo que esta en los estados, es decir lo que esta dentro del form
  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection("usuarios").add({
      nombre: this.state.nombre,
      mail: this.state.mail,
    });
    this.setState({
      nombre: "",
      mail: "",
    });
  };

  render() {
    return (
      <div>
        {/* Caundo se manda el form ejecuta la funcion addUser */}
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            // Si cambia algo en el input ejecuta la funcion updateInput
            onChange={this.updateInput}
            // Asigna en que estado tiene que guardarse lo que esta dentro del input
            value={this.state.nombre}
          />
          <input
            type="email"
            name="mail"
            placeholder="Mail"
            onChange={this.updateInput}
            value={this.state.mail}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default createUser;
