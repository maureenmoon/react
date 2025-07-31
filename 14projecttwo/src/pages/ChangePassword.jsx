import React, { useState } from "react";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement change password logic
    setMessage("If this email exists, a temporary password has been sent.");
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit} className="change-password-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Temporary Password</button>
      </form>
      {message && <div className="change-password-message">{message}</div>}
    </div>
  );
};

export default ChangePassword;
