import React, { useState } from "react";

const FindNickname = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement find nickname logic
    setMessage("If this email exists, your nickname has been sent.");
  };

  return (
    <div className="find-nickname-container">
      <h2>Find Nickname</h2>
      <form onSubmit={handleSubmit} className="find-nickname-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Nickname</button>
      </form>
      {message && <div className="find-nickname-message">{message}</div>}
    </div>
  );
};

export default FindNickname;
