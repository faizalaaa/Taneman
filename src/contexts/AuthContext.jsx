import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const username = "admin";
  const password = "admin";

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (username && password) {
      login(username, password);
    }
  }, []);

  async function login(uname, pwd) {
    if (uname !== username || pwd !== password) {
      throw new Error("Salah!");
    }
    setUser({
      username: uname,
      password: pwd,
    });
    localStorage.setItem("username", uname);
    localStorage.setItem("password", pwd);
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
