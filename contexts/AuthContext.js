import React, { useReducer, useContext, createContext, useEffect } from "react";
import { useUser } from "@/lib/useUser";

const SET_USUARIO = "SET_USUARIO";
const SET_LOADING = "SET_LOADING";
const SET_USERAUTH = "SET_USERAUTH";

const AuthStateContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const initialState = {
  userData: null,
  userAuth: undefined,
  logout: undefined,
  loadingAuthState: true,
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case SET_USUARIO:
      return {
        ...state,
        userData: action.payload?.user,
      };
    case SET_LOADING:
      return {
        ...state,
        loadingAuthState: action.payload?.state,
      };
    case SET_USERAUTH:
      return {
        ...state,
        logout: action.payload?.logout,
        userAuth: action.payload?.user,
      };
    default:
      return state;
  }
}

export function setUser({ user }) {
  return {
    type: SET_USUARIO,
    payload: {
      user,
    },
  };
}

export function setLoadingAuthState({ state }) {
  return {
    type: SET_LOADING,
    payload: {
      state,
    },
  };
}

export function setUserAuth({ userAuth }) {
  return {
    type: SET_USERAUTH,
    payload: {
      userAuth,
    },
  };
}

export const AuthProvider = ({ children }) => {
  const { user, logout } = useUser();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    dispatch(setLoadingAuthState({ state: false }));
    dispatch(setUserAuth({ userAuth: { logout, user } }));
    if (!user) {
      dispatch(setUser(null));
    }
  }, [user, logout]);

  return (
    <AuthStateContext.Provider
      value={{
        authenticated: user !== null,
        ...state,
      }}
    >
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthContextProvider");
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useAuthDispatch must be used within a AuthContextProvider"
    );
  }
  return context;
}
