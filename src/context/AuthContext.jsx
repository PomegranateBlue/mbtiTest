import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("access Token");

export const AuthProvider = (token) => {
  const [isAuthed, setIsAuthed] = useState(!!token);
};
