import React, { useContext } from "react";
import { useAuthState } from "@/contexts/AuthContext";
import { useDocument } from "@nandorojo/swr-firestore";

export default function Layout({ children }) {
  const { userAuth } = useAuthState();

  console.log(userAuth);

  const { data, update, error } = useDocument(
    userAuth ? `usuarios/${userAuth.uid}` : null,
    {
      listen: true,
    }
  );

  console.log(data);

  return <>{children}</>;
}
