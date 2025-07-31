import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
    email: "",
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    alert("Signup submitted!");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
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
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          name="height"
          type="number"
          value={form.height}
          onChange={handleChange}
          placeholder="Height (cm)"
          required
        />
        <input
          name="weight"
          type="number"
          value={form.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          required
        />
        <select
          name="activityLevel"
          value={form.activityLevel}
          onChange={handleChange}
          required
        >
          <option value="">Select Activity Level</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
