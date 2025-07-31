import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    if (!form.nickname || !form.password) {
      setError("Please enter both nickname and password.");
      return;
    }
    setError("");
    alert("Login submitted!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          placeholder="Nickname"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <Link to="/find-nickname">Find Nickname</Link> |{" "}
        <Link to="/change-password">Change Password</Link>
      </div>
    </div>
  );
};

export default Login;
