import React from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import Loading from "@/components/uikit/loading";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
`;

export default function Perfil() {
  const { userAuth, userData } = useAuthState();
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
        </div>
      )}
    </ProfileContainer>
  );
}
