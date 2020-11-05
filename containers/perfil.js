import React, { useState, useEffect } from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import Loading from "@/components/uikit/loading";
import { useRouter } from "next/router";
import styled from "styled-components";
import { storage, db } from "@/lib/firebase";

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
  const [fotoCargada, setFotoCargada] = useState();
  const [fotoMiniatura, setMiniatura] = useState(
    "/assets/images/card/Card1.png"
  );
  const Router = useRouter();
  const { userAuth, userData, logout } = useAuthState();
  useEffect(() => {
    if (userData && userData.fotoperfil) {
      setMiniatura(userData.fotoperfil);
    }
  }, [userData]);

  const HandleInputChange = (file) => {
    const fileInstance = new File([file], file.name);
    setMiniatura(URL.createObjectURL(fileInstance));
    setFoto(fileInstance);
  };

  const HandleSubmitFile = async () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(foto.name);
    const fotoURL = await fileRef
      .put(foto)
      .then(async (snapshoot) => {
        return await snapshoot.ref.getDownloadURL().then((url) => {
          console.log("foto cargada", url);
          setFotoCargada(url);
          return url;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    const dataUpdate = { fotoperfil: fotoURL };

    db.collection("usuarios").doc(userAuth.id).update(dataUpdate);
  };

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
          <img src={fotoCargada ? fotoCargada : fotoMiniatura}></img>
        </div>
      )}
    </ProfileContainer>
  );
}
