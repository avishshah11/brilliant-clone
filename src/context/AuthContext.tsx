import React from "react";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);
