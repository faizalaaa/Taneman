import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import "./index.css";
import { AxiosError } from "axios";

export default function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Taneman";
  }, []);

  async function submitHandler(e) {
    try {
      e.preventDefault();
      setLoading(true);
      await login(username, password);
      navigate("/");
    } catch (error) {
      if (error.message === "Akun tidak ditemukan") {
        setErrorMsg("Akun tidak ditemukan");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}
