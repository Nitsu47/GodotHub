import React from "react";
import "../styles/game_cards.css";

const Reviews = ({ users = [] }) => {
  return (
    <div className="games-grid">
      {users.map((user) => (
        <div key={user.id} className="user-container">
          <div className="user-info">
            <h2 className="user-name">{user.name}</h2>
            <div className="user-review">
              <p className="review">{user.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
