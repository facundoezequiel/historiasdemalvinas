import React, { useContext } from "react";
import { useAuthState } from "@/contexts/AuthContext";

export default function Layout({ children }) {
  const userAuth = useAuthState();

  console.log(userAuth);

  return <>{children}</>;
}
