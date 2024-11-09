import React, { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
