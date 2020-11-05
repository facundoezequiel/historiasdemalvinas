import React, { useState } from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import Loading from "@/components/uikit/loading";
import { useRouter } from "next/router";
import styled from "styled-components";
import { storage } from "@/lib/firebase";

const ProfileContainer = styled.div`
  width: 100%;

  .BotonCerrarSesion {
    color: var(--blue);
    cursor: pointer;

    :hover {
      color: var(--orange);
    }
  }
`;

export default function Perfil() {
  const [foto, setFoto] = useState();

  const HandleInputChange = (file) => {
    setFoto(file);
  };

  const HandleSubmitFile = async () => {
    const file = new File([foto], foto.name);
    const storageRef = storage.ref();
    const fileRef = storageRef.child(foto.name);
    await fileRef
      .put(file)
      .then((snapshoot) => {
        snapshoot.ref.getDownloadURL().then((url) => {
          console.log("foto cargada", url);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Router = useRouter();
  const { userAuth, userData, logout } = useAuthState();

  const HandleLogout = async () => {
    await logout();
    Router.push("/");
  };

  return (
    <ProfileContainer>
      {!userData && userAuth ? (
        <Loading />
      ) : (
        <div>
          <p>{userData && userData.nombreyapellido}</p>
          <p>{userData && userData.mail}</p>
          <p>{userData && userData.dni}</p>
          <p>{userData && userData.edad}</p>
          <p>{userData && userData.guardadas}</p>
          <p>{userData && userData.historias}</p>
          <p onClick={() => HandleLogout()} className="BotonCerrarSesion">
            Cerras Sesión
          </p>
          <input
            type="file"
            placeholder="Foto"
            onChange={(e) => HandleInputChange(e.target.files[0])}
          ></input>
          <button onClick={() => HandleSubmitFile()}>Guardar cambios</button>
        </div>
      )}
    </ProfileContainer>
  );
}
