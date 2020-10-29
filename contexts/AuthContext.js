import React, { useState, useEffect, createContext } from "react";
import { useUser } from "@/lib/useUser";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, logout } = useUser();
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    setLoadingAuthState(false);
    console.log(user, "ap user");
    console.log(user !== null, "ap authenticated");
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        logout,
        loadingAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
