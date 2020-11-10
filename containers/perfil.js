import React, { useState, useEffect } from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import Loading from "@/components/uikit/loading";
import { useRouter } from "next/router";
import styled from "styled-components";
import { storage, db } from "@/lib/firebase";
import BackHeader from "@/components/general/backheader";
import Image from "@/components/uikit/image";
import Title from "@/components/uikit/title";
import Button from "@/components/uikit/button";
import PerfilGrid from "@/components/general/perfil/perfilgrid";

const ProfileContainer = styled.div`
  width: 100%;

  .profileDataContainer {
    width: 100%;
    background-color: var(--white);
  }

  .profileDataSecondContainer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4% 0% 4% 0%;
  }

  .imageNameContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .imageNameContainer div {
    margin-left: 15%;
    color: var(--black);
  }

  .imageNameContainer div p {
    margin-bottom: 6%;
    color: var(--black);
    font-size: 0.77em !important;
    font-family: var(--poppins);
    font-weight: 400;
    width: max-content;
  }

  .imageNameContainer div p:nth-child(4) {
    width: auto !important;
  }

  .imageNameContainer div p span {
    margin-left: 15%;
  }

  .imageNameContainer div h2 {
    line-height: 1.4em;
    width: max-content;
    padding: 0% 0% 5% 0%;
    border-bottom: 1px solid var(--gray);
    margin: 0% 0% 7% 0%;
  }

  .profileButtons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0% 0% 0% 0% !important;
  }
`;

export default function Perfil() {
  const [foto, setFoto] = useState();
  const [fotoCargada, setFotoCargada] = useState();
  const [fotoMiniatura, setMiniatura] = useState(
    "/assets/images/placeholder/profile.png"
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
      <BackHeader text="Perfil" />
      {!userData && userAuth ? (
        <Loading />
      ) : (
        <div>
          <div className="profileDataContainer">
            <div className="profileDataSecondContainer">
              <div className="imageNameContainer">
                <Image
                  imageLink={fotoCargada ? fotoCargada : fotoMiniatura}
                  design="imagenPerfil"
                  size="15"
                ></Image>
                <div>
                  <p>Usuario verificado</p>
                  <Title
                    texto={userData && userData.nombreyapellido}
                    level={2}
                  />
                  <p>
                    <b>Correo electrónico: </b>
                    {userData && userData.mail}
                  </p>
                  <p>
                    <b>DNI: </b>
                    {userData && userData.dni}{" "}
                    <span>
                      <b>Edad: </b>
                      {userData && userData.edad}
                    </span>
                  </p>
                  <div className="profileButtons">
                    <Button
                      onClick={() => HandleLogout()}
                      text="Cerrar sesión"
                    />
                    <input
                      type="file"
                      placeholder="Editar"
                      onChange={(e) => HandleInputChange(e.target.files[0])}
                    ></input>
                    <Button
                      onClick={() => HandleSubmitFile()}
                      text="Guardar cambios"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PerfilGrid />
        </div>
      )}
    </ProfileContainer>
  );
}
