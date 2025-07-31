import React from "react";
import "./Mypage.css";

const user = {
  nickname: "johndoe",
  email: "john@example.com",
  name: "John Doe",
  targetCalories: 2200,
  activityLevel: "Moderate",
  height: 175,
  weight: 70,
  photo: "", // If empty, use first letter of nickname
};

const Mypage = () => {
  return (
    <div className="mypage-container">
      <div className="profile-header">
        {user.photo ? (
          <img src={user.photo} alt="Profile" className="profile-photo" />
        ) : (
          <div className="profile-placeholder">
            {user.nickname.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="profile-info">
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      </div>
      <div className="profile-details">
        <div>Target Calories: {user.targetCalories}</div>
        <div>Activity Level: {user.activityLevel}</div>
        <div>Height: {user.height} cm</div>
        <div>Weight: {user.weight} kg</div>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Logout</button>
        <button>Withdraw Membership</button>
      </div>
    </div>
  );
};

export default Mypage;
