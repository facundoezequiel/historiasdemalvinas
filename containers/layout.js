import React, { useContext } from "react";
import { useAuthState } from "@/contexts/AuthContext";

export default function Layout({ children }) {
  const { user } = useAuthState();

  console.log(user);

  return <>{children}</>;
}
