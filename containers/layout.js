import React, { useContext } from "react";
import { useUser } from "@/lib/useUser";
import { AuthContext } from "@/contexts/AuthContext";

export default function Layout({ children }) {
  const { user, loadingAuthState } = useContext(AuthContext);
  console.log(user, loadingAuthState);

  return <>{children}</>;
}
