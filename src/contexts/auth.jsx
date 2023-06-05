import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [infoUsuario, setInfo] = useState("");
  const [totalHabitos, setTotalHab] = useState(0);
  const [totalHabFeitos, setTotalFeitos] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        infoUsuario,
        setInfo,
        totalHabitos,
        setTotalHab,
        totalHabFeitos,
        setTotalFeitos,
        porcentagem,
        setPorcentagem,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
