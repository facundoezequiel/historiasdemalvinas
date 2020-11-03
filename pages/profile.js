import React from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";

export default function Profile() {
  const { userAuth, userData } = useAuthState();
  return (
    <>
      <p>{userData && userData.nombreyapellido}</p>
      <p>{userData && userData.mail}</p>
      <p>{userData && userData.edad}</p>
      <p>{userData && userData.dni}</p>
      <p>{userData && userData.guardadas}</p>
      <p>{userData && userData.historias}</p>
    </>
  );
}
