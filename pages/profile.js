import React from "react";
import Perfil from "@/containers/perfil";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100% !important;
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <Perfil></Perfil>
    </ProfileContainer>
  );
}
