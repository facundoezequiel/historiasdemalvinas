import React, { useContext, useEffect } from "react";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import { useDocument } from "@nandorojo/swr-firestore";

export default function Layout({ children }) {
  const dispatch = useAuthDispatch();

  const { userAuth, userData } = useAuthState();

  console.log(userAuth);

  const { data, update, error } = useDocument(
    userAuth?.id ? `usuarios/${userAuth.id}` : null,
    {
      listen: true,
    }
  );
  console.log(data);

  useEffect(() => {
    if (data) {
      dispatch(
        setUser({
          user: data,
        })
      );
    }
  }, [data]);

  console.log("User data", userData);

  return <>{children}</>;
}
