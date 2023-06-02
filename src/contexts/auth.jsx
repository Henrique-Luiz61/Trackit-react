import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [infoUsuario, setInfo] = useState("");

  return (
    <AuthContext.Provider value={{ infoUsuario, setInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
